import { createBrowserRouter } from "react-router-dom";
import Home from './../pages/home/Home';
import Signin from "../pages/signin/Signin";
import MainLayout from './../layout/MainLayout';
import SignUp from "../pages/signUp/SignUp";
import JobDetails from "../components/jobs/JobDetails";
import JobPost from "../components/jobs/JobPost";
import AppliedJobs from "../components/jobs/AppliedJobs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signin',
                element: <Signin />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/job/:id',
                element: <JobDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/job/${params.id}`)
            },
            {
                path: 'jobpost',
                element: <JobPost />
            },
            {
                path: 'applied',
                element: <AppliedJobs />,
                loader: ()=> fetch('http://localhost:5000/applied')
            }
        ]
    },
]);

export default router;