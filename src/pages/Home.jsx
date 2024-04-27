import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Explorex</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto mt-8">
        <Banner></Banner>
      </div>

      <div className="w-11/12 mx-auto my-5">
        <h2>This is Homepage</h2>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
