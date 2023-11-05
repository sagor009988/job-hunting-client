import { createBrowserRouter } from "react-router-dom";
import Home from './../pages/home/Home';
import Signin from "../pages/signin/Signin";
import MainLayout from './../layout/MainLayout';
import SignUp from "../pages/signUp/SignUp";
import JobDetails from "../components/jobs/JobDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/signin',
                element: <Signin />
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: '/job/:id',
                element: <JobDetails />,
                loader: ({params})=> fetch(`http://localhost:5000/job/${params.id}`)
            }
        ]
    },
]);

export default router;