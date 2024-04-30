import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PlacesOfCountry = () => {
    const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/placesOfCountry/${country}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountry(data);
      });
  }, [country]);
    return (
        <div>
            <Navbar></Navbar>

            <div className='w-11/12 mx-auto'>
            <h1>Omuk Desh!</h1>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default PlacesOfCountry;