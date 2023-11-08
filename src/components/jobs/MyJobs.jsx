import React, { useContext, useEffect, useState } from 'react';
import MyJob from './MyJob';
import { AuthContext } from '../../providers/AuthProvider';

const MyJobs = () => {
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);

    const url = `http://localhost:5000/myjobs?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user])
    return (
        <div>
            <div className="bg-[url(https://i.ibb.co/ncjQDJS/Rectangle-15.png)] py-16">
                <div className=" h-72 flex items-center justify-center">
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

