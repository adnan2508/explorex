import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Register = () => {
  

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Navbar></Navbar>
      <h2>Register an Account</h2>
      <Footer></Footer>
    </>
  );
};

export default Register;
