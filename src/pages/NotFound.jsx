import React from 'react';
import notFound from '../assets/notFound.jpg'

const NotFound = () => {
    return (
        <div>
            <img src={notFound} className='w-[700px] mx-auto h-[600px]' />
        </div>
    );
};

export default NotFound;