import { Link, useLoaderData } from "react-router-dom";
import { BiTime } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { useContext, useEffect, useState } from "react";
import { BsPeople } from 'react-icons/bs';
import Popup from "../popup/JobApplyPopup";
import { AuthContext } from "../../providers/AuthProvider";



const JobDetails = () => {
    const { user } = useContext(AuthContext)
    const { jobTitle, postingDate, postbanner, category, postedBy, _id, description, salary, gender, eduRequirements, postEmail, applied, postBy, expirationDate, statement, location, responsibilities } = useLoaderData();

    const job = { jobTitle, postingDate, postbanner, category, postedBy, _id, description, salary, gender, eduRequirements, postEmail, applied, postBy, expirationDate, statement, location, responsibilities };



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
        <div className="bg-[#F5F7FF]">
            <div className="bg-[url(https://i.ibb.co/ncjQDJS/Rectangle-15.png)] py-16">
                <div className=" h-72 flex items-center justify-center">
                    <h1 className='text-4xl text-white font-bold mb-2'>Job Details</h1>
                </div>
            </div>
            <div className="max-w-6xl mx-auto  py-4">
                <div>
                    <div key={_id} className='bg-white dark-bg-[#26272D]'>
                        <div className='flex mt-6 p-4 border shadow-sm rounded justify-between'>
                            <div className='flex gap-1 md:gap-2'>
                                <div>
                                    <img className='w-[60px] md:w-[80px]' src={postbanner} alt={postbanner} />
                                </div>
                                <div className='flex gap-0 md:gap-4 flex-col justify-center'>
                                    <h2 className='text-xl font-semibold text-[16px] md:text-base'>{jobTitle}</h2>
                                    <div className='flex gap-2 md:gap-6 items-center'>
                                        <p className='text-[#45A600] font-semibold hidden md:visible'>
                                            {postBy}
                                        </p>
                                        <div className='hidden md:flex gap-1 top-0 right-0  font-semibold items-center text-[10px] md:text-base'>
                                            <BiTime />
                                            {
                                                remainingTime == 'Expired' ? <p className="text-[red]">{remainingTime}</p> : <p>{remainingTime}</p>
                                            }
                                        </div>
                                        <div className='flex gap-1 font-semibold items-center text-[10px] md:text-base'>
                                            <CiLocationOn />
                                            <p>{location}</p>
                                        </div>
                                        <div className='flex gap-1 font-semibold items-center text-[10px] md:text-base'>
                                            <BsPeople />
                                            <p>Applied: {applied} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div>
                                    {
                                        user?.email !== postEmail ? <>
                                            <button onClick={openPopup} disabled={remainingTime === 'Expired'} className={remainingTime !== 'Expired' ? ' border py-1 px-2 md:px-4 rounded-sm bg-[#153CF5] hover.bg-[#153af5d6] text-white block text-[10px]  md:text-base' : ' border py-1 px-2 md:px-4 rounded-sm bg-[#153af58e]  text-white block text-[10px] md:text-base'}>
                                                Apply Now
                                            </button></> : null
                                    }
                                </div>

                                <Popup isOpen={isPopupOpen} onClose={closePopup} job={job} />
                            </div>
                        </div>
                    </div>

                    {/* job details */}

                </div>
                <div className="grid grid-cols-6 gap-6 py-10">
                    <div className="col-span-4">
                        <div className="mb-4">
                            <h1 className="text-[#020A31] font-bold text-2xl">Description</h1>
                            <div className="mt-4">
                                <p>{description}</p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h1 className="text-[#020A31] font-bold text-2xl">Responsibilities</h1>
                            <div className="mt-4">
                                <p>{responsibilities}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="border  py-8 px-12 rounded">
                            <h2 className="text-[#020A31] font-bold text-2xl">Summery</h2>
                            <div className="space-y-4 mt-4">
                                <p className="text-sm font-bold text-[#020A31]">Job Type: <span className="font-normal">{category}</span></p>
                                <p className="text-sm font-bold text-[#020A31]">Applied: <span className="font-normal">{applied} people</span></p>
                                <p className="text-sm font-bold text-[#020A31]">Gender: <span className="font-normal">{gender}</span></p>
                                <p className="text-sm font-bold text-[#020A31]">Educational req: <span className="font-normal">{eduRequirements}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;