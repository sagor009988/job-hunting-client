import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import AppliedJob from "./AppliedJob";
import Loading from "../loading/Loading";
import JobTab from "../jobTabs/JobTab";
import useJobs from "../../hooks/useJobs";
import { Tab, TabList, Tabs } from "react-tabs";

const AppliedJobs = () => {
    const { user } = useContext(AuthContext);
    const [appliedJob, setAppliedJob] = useState([]);
    const [allJob, setAllJob] = useState([])

    const url = `http://localhost:5000/appliedjob?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAppliedJob(data);
                setAllJob(data);
            })
    }, [user]);


    const { data, isLoading, isFetching, refetch } = useJobs();
    const [ctgName, setCtgName] = useState('all');
    const [showVal, setShowVal] = useState(3);

    const handleJobsFilter = (ctg) => {
        setCtgName(ctg);
    }

    useEffect(() => {
        if (ctgName === "all") {
            setAppliedJob(allJob);
        } else {
            const filterData = appliedJob?.filter((job) => ctgName == job?.category);
            console.log(filterData);
            setAppliedJob(filterData);
        }
        setShowVal(3);
    }, [ctgName, appliedJob]);

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
                    {
                        appliedJob?.length == 0 ? <>
                            <div className="text-center py-4">
                                <p>No data found</p>
                            </div>
                        </> : <>
                            {appliedJob?.slice(0, showVal)?.map((job) => <JobTab key={job._id} job={job} refetch={refetch} />)}

                            {
                                appliedJob?.length > showVal ? (
                                    <div className='flex items-center justify-center py-8'>
                                        <div>
                                            <button onClick={() => setShowVal(showVal + 3)} className='border-[#153CF5] border py-1 px-4 rounded-sm hover:bg-[#153CF5] hover:text-white hover-text-white font-medium'>
                                                Load More Jobs
                                            </button>
                                        </div>
                                    </div>
                                ) : null

                            }</>
                    }

                </Tabs>
            </div>
        </div>
    );
};

export default AppliedJobs;
