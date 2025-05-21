import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return;
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/signin'}></Navigate>
};

export default PrivateRoute;