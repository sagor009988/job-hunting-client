import { Link, useLoaderData } from "react-router-dom";
import { BiTime } from 'react-icons/bi';
import { BsPeople, BsLink45Deg } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';


const AppliedJob = ({ job }) => {
    const { _id, jobTitle, category, postbanner, salary, description, gender, qualification, eduRequirements, applied, postBy, postEmail, expirationDate, statement, location, resumeLink, applidId } = job;

    return (
        <div>
            <div key={_id} className='bg-white dark-bg-[#26272D]'>
                <div className='flex flex-col mt-6 p-4 border shadow-sm rounded justify-between'>
                    <div className='flex flex-col gap-1 md:gap-2'>
                        <div>
                            <img className='w-[60px] md:w-[80px]' src={postbanner} alt={postbanner} />
                        </div>
                        <div className='flex gap-0 md:gap-4 flex-col justify-center'>
                            <h2 className='text-xl font-semibold text-[16px] md:text-base'>{jobTitle}</h2>
                            <div className='flex flex-col '>
                                <p className='text-[#a68800] font-semibold hidden md:visible'>
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
                                    <BsLink45Deg />
                                    <Link className="text-blue-700 font-medium" to={resumeLink}>See resume</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 mt-4'>
                        <div>
                            <Link to={`/job/${applidId}`} className='border-[#D2DE32] border py-1 px-2 md:px-4 rounded-sm hover.bg-[#D2DE32] hover.text-white block text-[10px] md:text-base'>
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