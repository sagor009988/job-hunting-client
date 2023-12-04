import React from 'react';
import jsPDF from 'jspdf';

const AppliedJobSummary = ({ allJob }) => {
    const handleDownloadPDF = () => {
        const doc = new jsPDF();
        doc.text('Applied Job List', 10, 10);

        let y = 30;
        allJob.forEach((job) => {
            doc.text(`Job Title: ${job.jobTitle}`, 10, y);
            doc.text(`Category: ${job.category}`, 10, y + 10);
            doc.text(`Salary: ${job.salary}`, 10, y + 20);
            doc.text(`Gender: ${job.gender}`, 10, y + 30);
            doc.text(`Education Requirements: ${job.eduRequirements}`, 10, y + 40);
            doc.text(`Posted By: ${job.postBy}`, 10, y + 50);
            doc.text(`Posted Email: ${job.postEmail}`, 10, y + 60);
            doc.text(`Statement: ${job.statement}`, 10, y + 70);
            doc.text(`Location: ${job.location}`, 10, y + 80);
            y += 100; // Adjust this value as needed for spacing
            if (y >= 250) {
                doc.addPage();
                y = 10;
            }
        });

        doc.save('applied_jobs.pdf');
    };

    return (
        <div className='text-right'>
            <button className='bg-[#D2DE32] py-1 px-2 rounded-sm text-[10px] md:text-base text-white' onClick={handleDownloadPDF}>Download PDF</button>
        </div>
    );
};

export default AppliedJobSummary;






