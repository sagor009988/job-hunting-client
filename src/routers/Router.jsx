import { createBrowserRouter } from "react-router-dom";
import Home from './../pages/home/Home';
import Signin from "../pages/signin/Signin";
import MainLayout from './../layout/MainLayout';
import SignUp from "../pages/signUp/SignUp";
import JobDetails from "../components/jobs/JobDetails";
import JobPost from "../components/jobs/JobPost";
import AppliedJobs from "../components/jobs/AppliedJobs";
import MyJobs from "../components/jobs/MyJobs";
import UpdateJobPost from "../components/jobs/UpdateJobPost";
import JobTabs from "../components/jobTabs/JobTabs";
import AllJobs from "../pages/allJobs/AllJobs";
import PrivateRoute from './PrivateRoute';
import Error from './../pages/404';

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error />,
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
                element: <PrivateRoute><JobPost /></PrivateRoute>
            },
            {
                path: 'applied',
                element: <PrivateRoute><AppliedJobs /></PrivateRoute>,
            },
            {
                path: 'myjob',
                element: <PrivateRoute><MyJobs /></PrivateRoute>
            },
            {
                path: 'updatesjob/:id',
                element: <UpdateJobPost />,
                loader: ({ params }) => fetch(`http://localhost:5000/job/${params.id}`)

            },
            {
                path: 'alljobs',
                element: <AllJobs />
            }
        ]
    },
]);

export default router;