import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import SocialLogin from "../components/SocialLogin";
import { Helmet } from "react-helmet";


const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <h2>Login Page</h2>
     
    </div>
  );
};

export default Login;
