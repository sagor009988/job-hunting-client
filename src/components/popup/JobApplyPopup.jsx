import React, { useContext } from 'react';
import { GrClose } from 'react-icons/gr';
import { AuthContext } from './../../providers/AuthProvider';
import { toast } from 'react-toastify';
import { Link, Navigate } from 'react-router-dom';


const Popup = ({ isOpen, onClose, job, refetch }) => {
    const { user } = useContext(AuthContext);
    const { _id, jobTitle, category, postbanner, salary, description, gender, qualification, eduRequirements, applied, postBy, postEmail, expirationDate, statement, location } = job;


    const handleApplied = (e) => {
        e.preventDefault();
        const form = e.target;
        const candidateName = form.candidateName.value;
        const candidateEamil = form.candidateEamil.value;
        const resumeLink = form.resumeLink.value;

        const applyFor = {
            candidateName, candidateEamil, resumeLink, jobTitle, category, postbanner, salary, description, gender, qualification, eduRequirements, applied, postBy, postEmail, expirationDate, statement, location
        }


        fetch('https://assignment11-five.vercel.app/appliedjob', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(applyFor)
        })
            .then(res => toast.success('Job applied'))
            .then(data => console.log(data))



        const newCount = parseInt(applied) + 1;
        fetch(`https://assignment11-five.vercel.app/count/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ newCount }),
        })
            .then(res => refetch())
            .catch();

    }

    if (!isOpen || !job) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-white z-50 w-full m-4 md:w-1/2 p-4 md:p-12 rounded-lg">
                <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    &times;
                </button>
                <div className="relative">
                    <GrClose className="absolute -right-2 -top-2 md:-top-4 cursor-pointer z-50" onClick={onClose} />
                    {
                        user?.email ? <>
                            <h2 className='text-xl font-bold text-[16px] md:text-base py-4'>Application for: <span className="font-semibold">{jobTitle}</span></h2>
                            <form onSubmit={handleApplied}>
                                <div className="flex flex-col gap-4">

                                    <div className="flex flex-col md:flex-row gap-4">
                                        <input className="border w-full focus:outline-none rounded-sm p-1" type="text" defaultValue={user?.displayName} name="candidateName" />
                                        <input className="border w-full focus:outline-none rounded-sm p-1" type="email" defaultValue={user?.email} name='candidateEamil' />
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <input className="border w-full focus:outline-none rounded-sm p-1" type="link" placeholder="Resume link" name='resumeLink' />
                                    </div>
                                    <div>
                                        <input className="border-[#153CF5] w-full border py-1 px-2 md:px-4 rounded-sm bg-[#153CF5] hover:bg-[#153af5c7] text-white block md:text-base'" type="submit" value="Submit Application" />
                                    </div>
                                </div>
                            </form>
                        </> : <>
                            <p className='text-center'>Please<Link className='text-blue-700' state={location.pathname} to={'/signin'}> signIn</Link> now</p>

                        </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Popup;
