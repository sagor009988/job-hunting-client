import React from 'react';
import { Link } from 'react-router-dom';

const Bolg = ({ blg }) => {
    const { _id, content, title, img } = blg;
    return (
        <Link to={`/blog/${_id}`}>
            <div className="bg-white rounded-lg shadow hover:shadow-md">
                <img className='w-full max-h-72' src={img} alt="" />
                <div className="p-4">
                    <h2 className="font-bold text-black">{title?.slice(0, 20)}...</h2>
                    <p>{content?.slice(0, 30)}...</p>
                </div>
            </div>
        </Link>
    );
};

export default Bolg;
