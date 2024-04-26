import React from 'react';
import Navbar from '../components/Navbar';

const MyList = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 mx-auto'>
                <h1>Welcome this is your list!🎉</h1>
            </div>
        </div>
    );
};

export default MyList;