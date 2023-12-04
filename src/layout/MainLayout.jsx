import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Wlc from "../components/Wlc";

const MainLayout = () => {
    return (
        <div>
            <Wlc></Wlc>
            <Header/>
            <Outlet />
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default MainLayout;