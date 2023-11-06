import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useJobs from '../../hooks/useJobs';
import { useEffect, useState } from 'react';
import Loading from './../loading/Loading';
import { BiTime } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import './tab.css';

const JobTabs = () => {
    const { data, isLoading, isFetching } = useJobs();
    const [tabJobs, setTabJobs] = useState(data?.jobs);
    const [ctgName, setCtgName] = useState('all');
    const [showVal, setShowVal] = useState(3);

    const handleJobsFilter = (ctg) => {
        setCtgName(ctg);
    }

    useEffect(() => {
        if (ctgName === "all") {
            setTabJobs(data?.jobs);
        } else {
            const filterData = data?.jobs.filter((job) => ctgName == job.category);
            console.log(filterData);
            setTabJobs(filterData);
        }
        setShowVal(3);
    }, [ctgName, data]);





    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <div className='py-16 max-w-6xl mx-auto'>
                <Tabs>
                    <TabList>
                        <Tab onClick={() => handleJobsFilter("all")} key="all">
                            All
                        </Tab>
                        {data?.categories?.map((category) => (
                            <Tab
                                key={category?._id}
                                onClick={() => handleJobsFilter(category?.name)}
                            >
                                {category?.name}
                            </Tab>
                        ))}
                    </TabList>
                    {tabJobs?.slice(0, showVal).map((job) => (
                        <div key={job?._id} className='bg-white dark-bg-[#26272D]'>
                            <div className='flex mt-6 p-4 border shadow-sm rounded justify-between'>
                                <div className='flex'>
                                    <div>
                                        <img
                                            className='w-[100px]'
                                            src={'https://i.ibb.co/xM0Qj77/download-2.jpg'}
                                            alt={job?.postedBy}
                                        />
                                    </div>
                                    <div className='flex gap-4 flex-col justify-center'>
                                        <h2 className='text-xl font-semibold'>{job?.jobTitle}</h2>
                                        <div className='flex gap-6 items-center'>
                                            <p className='text-[#45A600] font-semibold'>
                                                {job?.postedBy}
                                            </p>
                                            <div className='flex gap-1 font-semibold items-center'>
                                                <BiTime />
                                                <p>{job?.category}</p>
                                            </div>
                                            <div className='flex gap-1 font-semibold items-center'>
                                                <CiLocationOn />
                                                <p>{job?.location}</p>
                                            </div>
                                            <div className='flex gap-1 font-semibold items-center'>
                                                <BiTime />
                                                <p>{job?.postingDate}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center gap-8'>
                                    <div>
                                        <Link to={`/job/${job?._id}`} className='border-[#153CF5] border py-1 px-4 rounded-sm hover:bg-[#153CF5] hover:text-white block'>
                                            View Job
                                        </Link>
                                    </div>
                                    <div>
                                        <button className='bg-[#153CF5] py-1 px-4 rounded-sm hover-bg-[#1bbf72d0] text-white  block'>
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {
                        tabJobs?.length > showVal ? (
                            <div className='flex items-center justify-center py-8'>
                                <div>
                                    <button onClick={() => setShowVal(showVal + 3)} className='border-[#153CF5] border py-1 px-4 rounded-sm hover:bg-[#153CF5] hover:text-white hover-text-white font-medium'>
                                        Load More Jobs
                                    </button>
                                </div>
                            </div>
                        ) : null
                    }
                </Tabs>
            </div>
        </div>
    );
};

export default JobTabs;
