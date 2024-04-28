import React from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Users = () => {
  const loadedUser = useLoaderData();
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto">
        <h1>Users {loadedUser.length}</h1>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Users;
