import { Link } from "react-router-dom";
import { BiTime } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { useState, useEffect, useContext } from 'react';
import Popup from "../popup/JobApplyPopup";
import { AuthContext } from "../../providers/AuthProvider";

const JobTab = ({ job, refetch }) => {
    const { user } = useContext(AuthContext);
    const { _id, jobTitle, category, postbanner, salary, description, gender, qualification, eduRequirements, applied, postBy, postEmail, expirationDate, statement, location } = job;

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
            // const secondsDifference = Math.floor((timeDifference % (1000 * 60)) / 1000);

            return `${daysDifference}d ${hoursDifference}h ${minutesDifference}m remaining`;
        } else {
            console.error('Invalid expirationDate format.');
            return 'Invalid date format';
        }
    }

    // popup related
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openPopup = () => {
        setIsPopupOpen(true);
    };
    const closePopup = () => {
        setIsPopupOpen(false);
    };

    // show real time
    const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

    useEffect(() => {
        if (remainingTime !== 'Expired') {
            const interval = setInterval(() => {
                try {
                    setRemainingTime(calculateRemainingTime());
                } catch (error) {
                    console.error('Error calculating remaining time:', error);
                }
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [remainingTime]);

    return (
        <div key={_id} className='bg-white dark-bg-[#26272D]'>
            <div className='flex flex-col mt-6 p-4 border shadow-sm rounded justify-between'>
                <div className='flex flex-col gap-1 md:gap-2'>
                    <div>
                        <img className='w-full md:w-[80px]' src={postbanner} alt={postbanner} />
                    </div>
                    <div className='flex gap-0 flex-col justify-center'>
                        <h2 className='text-xl font-semibold text-[16px] md:text-base'>{jobTitle}</h2>
                        <p className='text-[#a68800] font-semibold hidden md:block text-[10px] md:text-[13px]'>
                            {postBy}
                        </p>
                        <div className='flex flex-col mt-4'>
                            <div className="flex gap-6">
                                <div className='hidden md:flex gap-1 top-0 right-0  font-semibold items-center text-[10px] md:text-[13px]'>
                                    <BiTime />
                                    {
                                        remainingTime == 'Expired' ? <p className="text-[red]">{remainingTime}</p> : <p>{remainingTime}</p>
                                    }
                                    <div className='hidden md:flex gap-1 top-0 right-0  font-semibold items-center text-[10px] md:text-[13px]'>
                                        <p>$ Salary: {salary}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className='flex font-semibold text-[10px] md:text-[13px]'>
                                    <CiLocationOn />
                                    <p>{location}</p>
                                </div>
                                <div className='flex font-semibold text-[10px] md:text-[13px]'>
                                    <BsPeople />
                                    <p>Applied: {applied} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between mt-6 items-center gap-2'>
                    <div>
                        <Link to={`/job/${_id}`} className='border-[#D2DE32] border py-1 px-2 md:px-4 rounded-sm hover.bg-[#D2DE32] hover.text-white block text-[10px] md:text-base'>
                            View Job
                        </Link>
                    </div>
                    <div>
                        {
                            user?.email !== postEmail ? <>
                                <button onClick={openPopup} disabled={remainingTime === 'Expired'} className={remainingTime !== 'Expired' ? ' border py-1 px-2 md:px-4 rounded-sm bg-[#D2DE32] hover.bg-[#153af5d6] text-white block text-[10px]  md:text-base' : ' border py-1 px-2 md:px-4 rounded-sm bg-[#f1c40f78]  text-white block text-[10px] md:text-base'}>
                                    Apply Now
                                </button></> : null
                        }
                    </div>

                    <Popup isOpen={isPopupOpen} onClose={closePopup} refetch={refetch} job={job} />
                </div>
            </div>
        </div>
    );
};

export default JobTab;
