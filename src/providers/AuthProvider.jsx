import { createContext, useEffect, useState } from "react";
import auth from './../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext(null);



const AuthProvider = ({ children }) => {
    const [user, SetUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // google login 
    const googleProvider = new GoogleAuthProvider();
    const googleSignin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // create a user
    const userSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update profile
    const updateUserData = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }

    // signIn user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // observe user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            SetUser(currentUser);
            setLoading(false);
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail }
            if (currentUser) {
                axios.post('https://assignment11-five.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => console.log(res.data))
            } else {
                axios.post('https://assignment11-five.vercel.app/logout', loggedUser, { withCredentials: true })
                    .then(res => { console.log(res.data) })
            }
        });
        return () => unsubscribe();
    }, [])





    // user signout
    const signOutUser = () => {
        signOut(auth);
    }


    // auth info provide
    const authInfo = {
        userSignUp,
        signInUser,
        googleSignin,
        signOutUser,
        user,
        loading,
        updateUserData
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;