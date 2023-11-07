import { useLoaderData } from "react-router-dom";
import AppliedJob from "./AppliedJob";


const AppliedJobs = () => {
    const data = useLoaderData();
    return (
        <div className="py-16 max-w-6xl mx-auto">
            {
                data?.map(job => <AppliedJob job={job} />)
            }
        </div>
    );
};

export default AppliedJobs;