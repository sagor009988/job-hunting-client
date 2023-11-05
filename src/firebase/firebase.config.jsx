// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3IjGKh8dY9BG1S4PWU1zzEeH_qcpwfSE",
  authDomain: "assignment11-f53fd.firebaseapp.com",
  projectId: "assignment11-f53fd",
  storageBucket: "assignment11-f53fd.appspot.com",
  messagingSenderId: "924154464340",
  appId: "1:924154464340:web:82e97fa88f7409bd0505c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;