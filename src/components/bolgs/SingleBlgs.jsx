import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBlgs = () => {
    const data = useLoaderData();
    const { title, img, content } = data;
    return (
        <div className='max-w-6xl mx-auto py-16 '>
            <div>
                <img className='w-full max-h-72' src={img} alt="" />
                <div className='mt-4 space-y-3'>
                    <h2 className='text-3xl'>{title}</h2>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleBlgs;