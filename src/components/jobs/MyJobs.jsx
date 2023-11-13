import React, { useContext, useEffect, useState } from 'react';
import MyJob from './MyJob';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const MyJobs = () => {
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);

    const url = `https://assignment11-five.vercel.app/myjobs?email=${user?.email}`;
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(response => {
                setJobs(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [user]);

    return (
        <div>
            <Helmet>
                <title>Career Link | My job</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            <div className="bg-[url(https://i.ibb.co/ncjQDJS/Rectangle-15.png)]">
                <div className=" h-[40vh] md:h-[60vh] flex items-center justify-center">
                    <h1 className='text-4xl text-white font-bold mb-2'>My Jobs</h1>
                </div>
            </div>
            <div className="py-16 max-w-6xl mx-auto">
                {jobs?.length == 0 ? (
                    <p>No jobs found.</p>
                ) : (
                    jobs?.map((job) => <MyJob key={job._id} job={job}></MyJob>)
                )}
            </div>
        </div>
    );
};

export default MyJobs;

