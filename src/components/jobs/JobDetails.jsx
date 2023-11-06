import { useLoaderData } from "react-router-dom";
import { BiTime } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { ApplyPopup } from "../popup/ApplyPopup";



const JobDetails = () => {
    const { jobTitle, postingDate, category, postedBy, _id, location } = useLoaderData();
    const job = { jobTitle, postingDate, category, postedBy, _id, location }
    return (
        <div className="bg-[#F5F7FF]">
            <div className="bg-[url(https://i.ibb.co/ncjQDJS/Rectangle-15.png)] py-16">
                <div className=" h-72 flex items-center justify-center">
                    <h1 className='text-4xl text-white font-bold mb-2'>Job Details</h1>
                </div>
            </div>
            <div className="max-w-6xl mx-auto  py-4">
                <div>
                    <div className='bg-white  dark:bg-[#26272D]'>
                        <div className='flex mt-6 p-4 border shadow-sm rounded justify-between'>
                            <div className='flex'>
                                <div>
                                    <img className='w-[100px]' src={'https://i.ibb.co/xM0Qj77/download-2.jpg'} alt={postedBy} />
                                </div>
                                <div className='flex gap-4 flex-col justify-center'>
                                    <h2 className='text-2xl font-semibold'>{jobTitle}</h2>
                                    <div className='flex gap-6 items-center'>
                                        <p className='text-[#1bbf73] font-semibold'>{postedBy}</p>
                                        <div className='flex gap-1 font-semibold items-center'>
                                            <BiTime />
                                            <p>{category}</p>
                                        </div>
                                        <div className='flex gap-1 font-semibold items-center'>
                                            <CiLocationOn />
                                            <p>{location}</p>
                                        </div>
                                        <div className='flex gap-1 font-semibold items-center'>
                                            <BiTime />
                                            <p>{postingDate}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-8'>
                                <div>
                                    <button onClick={() => ApplyPopup(job)} className='bg-[#1bbf73] py-1 px-4 rounded-sm hover:bg-[#1bbf72d0] text-white'>Apply Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-6 gap-6 py-10">
                    <div className="col-span-4">
                        <div className="mb-4">
                            <h1 className="text-[#020A31] font-bold text-2xl">Description</h1>
                            <div className="mt-4">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam enim nulla dolore ipsum quidem aliquam corrupti voluptatum officia natus maxime, similique consequatur deleniti consectetur magni assumenda sequi, veritatis possimus laudantium? Voluptatibus nesciunt, aliquid tempore cumque hic saepe accusamus voluptas placeat ad velit nemo vero reprehenderit maxime eius nulla, optio ut facilis pariatur fuga, est inventore quae fugiat natus! Facilis, nesciunt magnam. Eum velit a itaque reiciendis vitae expedita? Ipsum aspernatur eum id, sunt esse praesentium dolor ad deserunt unde eius. Dolores corporis at vero dolorem hic veniam quas dignissimos iusto? Reiciendis ipsam ad, nam officiis esse maxime saepe accusamus mollitia?</p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h1 className="text-[#020A31] font-bold text-2xl">Responsibilities</h1>
                            <div className="mt-4">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam enim nulla dolore ipsum quidem aliquam corrupti voluptatum officia natus maxime, similique consequatur deleniti consectetur magni assumenda sequi, veritatis possimus laudantium? Voluptatibus nesciunt, aliquid tempore cumque hic saepe accusamus voluptas placeat ad velit nemo vero reprehenderit maxime eius nulla, optio ut facilis pariatur fuga, est inventore quae fugiat natus! Facilis, nesciunt magnam. Eum velit a itaque reiciendis vitae expedita? Ipsum aspernatur eum id, sunt esse praesentium dolor ad deserunt unde eius. Dolores corporis at vero dolorem hic veniam quas dignissimos iusto? Reiciendis ipsam ad, nam officiis esse maxime saepe accusamus mollitia?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="border  py-8 px-12 rounded">
                            <h2 className="text-[#020A31] font-bold text-2xl">Summery</h2>
                            <div className="space-y-4 mt-4">
                                <p className="text-sm font-bold text-[#020A31]">Job Type: <span className="font-normal">{category}</span></p>
                                <p className="text-sm font-bold text-[#020A31]">Gender: <span className="font-normal">{category}</span></p>
                                <p className="text-sm font-bold text-[#020A31]">Qualification: <span className="font-normal">{category}</span></p>
                                <p className="text-sm font-bold text-[#020A31]">Job Type: <span className="font-normal">{category}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;