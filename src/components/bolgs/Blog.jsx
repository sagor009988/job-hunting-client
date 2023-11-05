import React from 'react';

const Bolg = ({ blg }) => {
    const { content, title, image } = blg;
    return (
        <div className="bg-white rounded-lg shadow hover:shadow-md">
            <img className="w-full" src={image} alt="" />
            <div className="p-4">
                <h2 className="font-bold text-black">{title.slice(0, 20)}</h2>
                <p>{content.slice(0, 30)}</p>
            </div>
        </div>
    );
};

export default Bolg;