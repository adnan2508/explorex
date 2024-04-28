import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SpotDetails = () => {
    const spots = useLoaderData();
  return (
    <div>
        <Helmet>
            <title>Details</title>
        </Helmet>
        <Navbar></Navbar>
      <div className="card lg:card-side bg-base-100 shadow-xl my-5">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Title</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SpotDetails;
