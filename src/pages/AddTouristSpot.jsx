import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const AddTouristSpot = () => {
  return (
    <div>
      <Helmet>
        <title>Add Tourist Spot</title>
      </Helmet>
      <Navbar></Navbar>

      <div className="w-11/12 mx-auto my-10">
        <h2>Welcome You're in!🎉</h2>
      </div>
      
      <Footer></Footer>
    </div>
  );
};

export default AddTouristSpot;
