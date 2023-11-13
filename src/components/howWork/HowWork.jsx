import React from 'react';

const HowWork = () => {
    return (
        <div className='max-w-6xl mx-auto py-16'>
            <div className='flex items-center justify-center flex-col'>
                <h2 className='text-4xl text[#020A31] font-bold mb-4'>How it works</h2>
                <p>Job for anyone, anywhere</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
                <div>
                    <img className='mx-auto mb-4' src="https://i.ibb.co/XCSqCf1/Rectangle-9.png" alt="" />
                    <div>
                        <h2 className='text-[#26272D]  text-center text-xl font-bold'>Free Resume Assessments</h2>
                        <p className='text-[#26272D] text-center mt-2 '>Employers on average spend 31 seconds scanning resumes to identify potential matches.</p>
                    </div>
                </div>
                <div>
                    <img className='mx-auto mb-4' src="https://i.ibb.co/thWjqsw/Rectangle-9-1.png" alt="" />
                    <div>
                        <h2 className='text-[#26272D]  text-center text-xl font-bold'>Job Fit Scoring</h2>
                        <p className='text-[#26272D] text-center mt-2 '>Our new fit meter shows you which jobs are most relevant to your skills and interests.</p>
                    </div>
                </div>
                <div>
                    <img className='mx-auto mb-4' src="https://i.ibb.co/M5w8yCT/Rectangle-9-2.png" alt="" />
                    <div>
                        <h2 className='text-[#26272D]  text-center text-xl font-bold'>Help Center</h2>
                        <p className='text-[#26272D] text-center mt-2 '>Visit our Help Center for job portal support. Find answers, troubleshoot, and optimize your experience. We're here to help!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowWork;