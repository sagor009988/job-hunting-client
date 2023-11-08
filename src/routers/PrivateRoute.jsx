import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return;
    }
    if(user){
        return children;
    }
    console.log('detils page');
    return <Navigate state={location.pathname}  to={'/signin'}></Navigate>
};

export default PrivateRoute;