import { Tab, Tabs, TabList,  } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useJobs from '../../hooks/useJobs';
import { useEffect, useState } from 'react';
import '../../components/jobTabs/tab.css';
import Loading from '../../components/loading/Loading';
import JobTab from '../../components/jobTabs/JobTab';
import { Helmet } from 'react-helmet';



const AllJobs = () => {
    const { data, isLoading,  refetch } = useJobs();
    const [tabJobs, setTabJobs] = useState(data?.jobs);
    const [ctgName, setCtgName] = useState('all');
    const [showVal, setShowVal] = useState(3);

    const handleJobsFilter = (ctg) => {
        setCtgName(ctg);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        const text = e.target.searchText.value;
        const filterData = data?.jobs.filter((job) =>
            job?.jobTitle?.toLowerCase().includes(text.toLowerCase())
        );
        setTabJobs(filterData);
        console.log(text);
    }


    useEffect(() => {
        if (ctgName == "all") {
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
            <Helmet>
                <title>Job news | All job</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            <div className='max-w-6xl mx-auto'>
                <div className='py-8 text-center'>
                    <form onSubmit={handleSearch} className='w-full flex justify-center'>
                        <input className="p-2 w-[80%] md:w-1/3 focus:outline-0 rounded-l-sm border" placeholder="Search job with name" type="text" name="searchText" />
                        <input className="p-2 rounded-r-sm bg-[#D2DE32] w-28 text-white" type="submit" value="Search" />
                    </form>
                </div>
            </div>
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
                    {
                        tabJobs?.length == 0 ? <>
                            <div className="text-center py-4">
                                <p>No data found</p>
                            </div>
                        </> : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {tabJobs?.slice(0, showVal)?.map((job) => <JobTab key={job._id} job={job} refetch={refetch} />)}
                        </div>
                    }

                    {
                        tabJobs?.length > showVal ? (
                            <div className='flex items-center justify-center py-8'>
                                <div>
                                    <button onClick={() => setShowVal(showVal + 3)} className='border-[#D2DE32] border py-1 px-4 rounded-sm hover:bg-[#D2DE32] hover:text-white hover-text-white font-medium'>
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

export default AllJobs;
