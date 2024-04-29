import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useAuth from '../hooks/useAuth';

const MyList = () => {
    const {user} = useAuth() || {};
    const [item, setItem] = useState([]);
    console.log(user);

    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setItem(data);
        })
    }, [user])

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