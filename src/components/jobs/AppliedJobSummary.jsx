import React from 'react';

const AppliedJobSummary = ({ jobData }) => {
    // Render the job data in a structured way
    return (
        <div>
            <h1>{jobData.title}</h1>
            <p>{jobData.description}</p>
        </div>
    );
};

export default AppliedJobSummary;
