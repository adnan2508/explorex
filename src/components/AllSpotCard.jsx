import React from "react";
import { Link } from "react-router-dom";

const AllSpotCard = ({spot}) => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="card card-compact w-96 bg-base-100 shadow-xl mt-10 mr-4">
        <figure>
          <img src={spot.image} alt={spot.spotName} />
        </figure>
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">{spot.spotName}</h2>
          <p className="mt-4 text-lg">Average Cost: ${spot.cost}</p>
          <p className="text-lg">Total Visitor: {spot.visitor} Per Year</p>
          <p className="text-lg">Travel Time: {spot.time} Day</p>
          <p className="text-lg">Seasonality: {spot.season}</p>
          <div className="card-actions justify-end">
            <Link to={`/spotDetails/${spot._id}`}>
            <button className="btn btn-primary text-white">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSpotCard;
