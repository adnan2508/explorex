import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import CountryCard from "../components/CountryCard";
import SpotCard from "../components/SpotCard";
import OurTeam from "../components/OurTeam";

const Home = () => {
  const [allSpot, setAllSpot] = useState([]);
  const countries = useLoaderData();

  useEffect(() => {
    fetch(`http://localhost:5000/spot`)
    .then(res=>res.json())
    .then(data=>{
      setAllSpot(data)
    })
  }, [])
  
  const [text] = useTypewriter({
    words: ["Partner", "Guide", "Companion", "Friend"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 50,
  });

  return (
    <div>
      <Helmet>
        <title>Explorex</title>
      </Helmet>
      <Navbar></Navbar>

      <div className="w-11/12 mx-auto my-8">
        <h2 className="text-center text-4xl font-bold" style={{ margin: "30px"}}
        >
          Explorex! Your Best Travel
          <span style={{ color: "Blue", fontWeight: "bold", marginLeft: "13px" }}>
            {text}
          </span>
          <span style={{ color: "red" }}>
            <Cursor />
          </span>
        </h2>
        <Banner></Banner>
      </div>

      <div className="w-11/12 mx-auto mt-5">
        <h2 className="text-center text-5xl font-semibold">Tourists Spots</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-8">
          {
            allSpot.map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)
          }
        </div>
      </div>

      <div className="w-11/12 mx-auto my-5">
        <h2 className="text-center text-5xl font-semibold">Countries</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-8">
          {
            countries.map(country => <CountryCard key={country._id} country={country}></CountryCard>)
          }
        </div>
      </div>

      <div className="w-11/12 mx-auto">
        <h2 className="text-center text-5xl font-semibold">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 my-8">
        <OurTeam></OurTeam>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
