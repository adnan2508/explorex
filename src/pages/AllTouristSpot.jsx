import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const AllTouristSpot = () => {
    return (
        <div>
            <Helmet>
                <title>All Tourist Spot</title>
            </Helmet>
            <Navbar></Navbar>
            <div className='w-11/12 mx-auto mt-10 mb-10'>
            <h2>All tourist spot</h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllTouristSpot;