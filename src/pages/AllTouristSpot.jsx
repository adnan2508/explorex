import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import AllSpotCard from "../components/AllSpotCard";

const AllTouristSpot = () => {
  const spots = useLoaderData();
  console.log(spots);
  return (
    <div>
      <Helmet>
        <title>All Tourist Spot</title>
      </Helmet>
      <Navbar></Navbar>

      <div className="w-11/12 mx-auto mt-10 mb-10">
        <h2 className="text-center text-5xl font-bold">
          All Tourist Spot
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {
            spots.map(spot => <AllSpotCard key={spot._id} spot={spot}></AllSpotCard>)
          }
        </div>

      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllTouristSpot;
