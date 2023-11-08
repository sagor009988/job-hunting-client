import { Link, useLoaderData } from "react-router-dom";
import { BiTime } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';


const AppliedJob = ({ job }) => {
    const { _id, jobTitle, category, postbanner, salary, description, gender, qualification, eduRequirements, applied, postBy, postEmail, expirationDate, statement, location } = job;

    return (
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
                                <div className='flex gap-1 font-semibold items-center text-[10px] md:text-base'>
                                    <CiLocationOn />
                                    <p>{location}</p>
                                </div>
                                <div className='hidden md:flex gap-1 top-0 right-0  font-semibold items-center text-[10px] md:text-base'>
                                    <BiTime />
                                    <p>$ Salary: {salary}</p>
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
                            <Link to={`/job/${_id}`} className='border-[#153CF5] border py-1 px-2 md:px-4 rounded-sm hover.bg-[#153CF5] hover.text-white block text-[10px] md:text-base'>
                                View Job
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AppliedJob;