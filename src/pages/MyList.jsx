import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MyList = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className='w-11/12 mx-auto my-10'>
                <h1>Welcome this is your list!🎉</h1>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default MyList;