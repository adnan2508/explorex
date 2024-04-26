import React from 'react';
import Login from './Login';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2>This is Homepage</h2>
        </div>
    );
};

export default Home;