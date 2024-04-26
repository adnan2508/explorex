import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile } = useAuth();
  console.log(createUser);

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>

      <div className="w-11/12 mx-auto mt-20 md:mt-10 animate__animated animate__jello">
        <div className="hero min-h-screen bg-base-200 rounded-3xl">
          <div className="hero-content flex-col">
            <div className="text-center mb-5 mt-10 lg:text-left">
              <h1 className="text-5xl font-bold">Create Account</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
