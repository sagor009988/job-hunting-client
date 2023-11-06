import { Link } from "react-router-dom";
import { BiTime } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { useState, useEffect } from 'react';

const JobTab = ({ job }) => {
    const {
        _id,
        jobTitle,
        category,
        postbanner,
        salary,
        description,
        gender,
        qualification,
        eduRequirements,
        applied,
        postBy,
        postEmail,
        expirationDate,
        statement,
        location } = job;

    const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

    function calculateRemainingTime() {
        const currentDate = new Date();
        const expirationDateObject = new Date(expirationDate);

        if (expirationDateObject <= currentDate) {
            return 'Expired';
        } else if (!isNaN(expirationDateObject)) {
            const timeDifference = expirationDateObject - currentDate;
            const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hoursDifference = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesDifference = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const secondsDifference = Math.floor((timeDifference % (1000 * 60)) / 1000);

            return `${daysDifference}d ${hoursDifference}h ${minutesDifference}m ${secondsDifference}s remaining`;
        } else {
            console.error('Invalid expirationDate format.');
            return 'Invalid date format';
        }
    }

    useEffect(() => {
        if (remainingTime !== 'Expired') {
            const interval = setInterval(() => {
                setRemainingTime(calculateRemainingTime());
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [remainingTime]);

    return (
        <div key={job?._id} className='bg-white dark-bg-[#26272D]'>
            <div className='flex mt-6 p-4 border shadow-sm rounded justify-between'>
                <div className='flex'>
                    <div>
                        <img
                            className='w-[100px]'
                            src={postbanner}
                            alt={postbanner}
                        />
                    </div>
                    <div className='flex gap-4 flex-col justify-center'>
                        <h2 className='text-xl font-semibold'>{jobTitle}</h2>
                        <div className='flex gap-6 items-center'>
                            <p className='text-[#45A600] font-semibold'>
                                {postBy}
                            </p>
                            <div className='flex gap-1 font-semibold items-center'>
                                <BiTime />
                                {
                                    remainingTime == 'Expired' ? <p className="text-[red]">{remainingTime}</p> : <p>{remainingTime}</p>
                                }
                            </div>
                            <div className='flex gap-1 font-semibold items-center'>
                                <CiLocationOn />
                                <p>{location}</p>
                            </div>
                            <div className='flex gap-1 font-semibold items-center'>
                                <BsPeople />
                                <p>Applied: {applied}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-8'>
                    <div>
                        <Link to={`/job/${_id}`} className='border-[#153CF5] border py-1 px-4 rounded-sm hover:bg-[#153CF5] hover:text-white block'>
                            View Job
                        </Link>
                    </div>
                    <div>
                        <button disabled={remainingTime === 'Expired'} className={remainingTime !== 'Expired'?'bg-[#153CF5] py-1 px-4 rounded-sm hover:bg-[#153af5cc] text-white block':'bg-[red] py-1 px-4 rounded-sm bg-[#153af58e] text-white block'}>
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobTab;
