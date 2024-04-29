import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import AllSpotCard from "../components/AllSpotCard";

const AllTouristSpot = () => {
  const spots = useLoaderData();
  const [sortedSpots, setSortedSpots] = useState([...spots]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(spots);

  const sortSpotsByCost = () => {
    const sorted = [...spots].sort((a, b) => a.cost - b.cost);
    setSortedSpots(sorted);
    setIsMenuOpen(false); // Close the dropdown menu after sorting
  };

  return (
    <div>
      <Helmet>
        <title>All Tourist Spot</title>
      </Helmet>
      <Navbar></Navbar>

      <div className="w-11/12 mx-auto mt-10 mb-10">
        <h2 className="text-center text-5xl font-bold">All Tourist Spot</h2>

        <div className="flex justify-center my-8">
          <div className="relative">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-white text-gray-700 border border-gray-300 py-2 px-4 rounded inline-flex items-center">
              <span>Sort by</span>
              <svg
                className="fill-current h-4 w-4 ml-2"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6l-6 6z" />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu">
                  <button
                    onClick={() => sortSpotsByCost()}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                    role="menuitem">
                    Average Cost
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3">
          {sortedSpots.map((spot) => (
            <AllSpotCard key={spot._id} spot={spot}></AllSpotCard>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllTouristSpot;
