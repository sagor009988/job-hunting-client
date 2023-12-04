import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useJobs from '../../hooks/useJobs';
import { useState } from 'react';
import Loading from './../loading/Loading';
import { BiTime } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { Link, NavLink } from 'react-router-dom';

const JobTabs = () => {
    const { data, isLoading, isFetching } = useJobs();
    const [tabJobs, setTabJobs] = useState(data?.jobs);

    const handleFilter = (ctg) => {
        
        console.log(ctg);
    }





    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <div className='py-16 max-w-6xl mx-auto'>
                <Tabs>
                    <TabList>
                        <Tab onClick={() => handleFilter("all")} key="all">All</Tab>
                        {data?.categories?.map((category) => {
                            return <>
                                <Tab onClick={() => handleFilter(category?.name)} key={category._id}>
                                    {category.name}
                                </Tab></>
                        })}
                    </TabList>
                    <TabPanel>
                        {data.jobs?.map((job) => {
                            return <>
                                <div>
                                    <div key={job.id} className='bg-white  dark:bg-[#26272D]'>
                                        <div className='flex mt-6 p-4 border shadow-sm rounded justify-between'>
                                            <div className='flex'>
                                                <div>
                                                    <img className='w-[100px]' src={'https://i.ibb.co/xM0Qj77/download-2.jpg'} alt={job.postedBy} />
                                                </div>
                                                <div className='flex gap-4 flex-col justify-center'>
                                                    <h2 className='text-2xl font-semibold'>{job.jobTitle}</h2>
                                                    <div className='flex gap-6 items-center'>
                                                        <p className='text-[#D2DE32] font-semibold'>{job.postedBy}</p>
                                                        <div className='flex gap-1 font-semibold items-center'>
                                                            <BiTime />
                                                            <p>{job.category}</p>
                                                        </div>
                                                        <div className='flex gap-1 font-semibold items-center'>
                                                            <CiLocationOn />
                                                            <p>{job.location}</p>
                                                        </div>
                                                        <div className='flex gap-1 font-semibold items-center'>
                                                            <BiTime />
                                                            <p>{job.postingDate}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-8'>
                                                <div>
                                                    <Link to={`/job/${job._id}`} className='border-[#D2DE32] border py-1 px-4 rounded-sm hover:bg-[#D2DE32] hover:text-white'>View Job</Link>
                                                </div>
                                                <div>
                                                    <button className='bg-[#D2DE32] py-1 px-4 rounded-sm hover:bg-[#1bbf72d0] text-white'>Apply Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>;
                        })}
                    </TabPanel>
                    <div className='flex items-center justify-center py-8'>
                        <div>
                            <button className='border-[#D2DE32] border py-1 px-4 rounded-sm hover:bg-[#D2DE32] hover:text-white font-medium'>Load More Jobs</button>
                        </div>
                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default JobTabs;


// Programming-Hero Instructors11:32
// const App = () => {
//   const [tabIndex, setTabIndex] = useState(0);

//   return (
//     <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
//       <TabList>
//         <Tab>Title 1</Tab>
//         <Tab>Title 2</Tab>
//       </TabList>
//       <TabPanel></TabPanel>
//       <TabPanel></TabPanel>
//     </Tabs>
//   );
// };
// https://www.npmjs.com/package/react-tabs
