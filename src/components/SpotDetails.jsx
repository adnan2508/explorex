import React from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SpotDetails = () => {
  const spot = useLoaderData();
  const {id} = useParams();
  
  return (
    <div >
      <Helmet>
        <title>{spot.spotName} Details</title>
      </Helmet>
      <Navbar></Navbar>

      <div className="w-11/12 mx-auto">
      <div className="card lg:card-side bg-base-100 shadow-2xl my-5">
        <figure>
          <img src={spot.image} alt={spot.spotName} className="h-full w-full"/>
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-semibold">{spot.spotName}</h2>
          <p className="mt-4 text-lg">{spot.description}</p>
          <p className="mt-4 text-lg">Location: {spot.location}</p>
          <p className="text-lg">Average Cost: ${spot.cost}</p>
          <p className="text-lg">Total Visitor: {spot.visitor} Per Year</p>
          <p className="text-lg">Travel Time: {spot.time} Day</p>
          <p className="text-lg">Seasonality: {spot.season}</p>
          <p className="text-lg">User Name: {spot.name}</p>
          <p className="text-lg">User Email: {spot.email}</p>

          <div className="card-actions justify-end">
            <Link to="/allTouristSpot">
              <button className="btn btn-primary text-white px-8">Go Back</button>
            </Link>
            <Link to="/">
              <button className="btn btn-primary text-white px-8">Home</button>
            </Link>
          </div>
        </div>
      </div>
      </div>
      
      <Footer></Footer>
    </div>
  );
};

export default SpotDetails;
