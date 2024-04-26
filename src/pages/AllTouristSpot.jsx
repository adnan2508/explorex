import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AllTouristSpot = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 mx-auto mt-10 mb-10'>
            <h2>All tourist spot</h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllTouristSpot;