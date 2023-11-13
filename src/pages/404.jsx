import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <Helmet>
                <title>Career Link | Error</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            <div className='h-screen w-full flex items-center justify-center flex-col'>
                <img className='w-[14rem]' src="https://i.ibb.co/yS1MhVL/pngtree-error-page-not-found-concept-illustration-flat-design-with-people-this-png-image-2038499-rem.png" alt="" />
                <Link to={'/'} className='text-blue-700'>Back home</Link>
            </div>
        </div>
    );
};

export default Error;