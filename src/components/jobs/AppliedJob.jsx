import { useLoaderData } from "react-router-dom";


const AppliedJob = ({ job }) => {
    const { jobTitle } = useLoaderData();
    return (
        <div>
            <h2>{job.jobTitle}</h2>
        </div>
    );
};

export default AppliedJob;