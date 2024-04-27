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
        <h2 className="text-center text-5xl font-bold">Add Tourist Spot</h2>

        <form>
          <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-5">
            {/* single row */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg">Spot Name</span>
              </div>
              <input
                type="text"
                name="spotName"
                placeholder="Tourist Spot Name"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg">Country</span>
              </div>
              <input
                type="text"
                name="country"
                placeholder="Country"
                className="input input-bordered w-full "
              />
            </label>
            </div>
            {/* single row */}
            <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg">Location</span>
              </div>
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg">Average Cost</span>
              </div>
              <input
                type="text"
                name="cost"
                placeholder="Average Cost"
                className="input input-bordered w-full"
              />
            </label>
          </div>
            {/* single row */}
            <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg">Description</span>
              </div>
              <input
                type="text"
                name="description"
                placeholder="Short description"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg">Season</span>
              </div>
              <input
                type="text"
                name="season"
                placeholder="Season"
                className="input input-bordered w-full"
              />
            </label>
          </div>
            {/* single row */}
            <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg">Total Visitor</span>
              </div>
              <input
                type="text"
                name="visitor"
                placeholder="Total Visitor Per Year"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg">Travel Time</span>
              </div>
              <input
                type="text"
                name="time"
                placeholder="Travel Time"
                className="input input-bordered w-full"
              />
            </label>
          </div>
            {/* single row */}
            <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg">User Name</span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="User Name"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg">Email</span>
              </div>
              <input
                type="email"
                name="email"
                placeholder="User Email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
            {/* single row */}
            <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg">Image URL</span>
              </div>
              <input
                type="text"
                name="image"
                placeholder="Image Link"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          
            <input className="btn btn-primary w-11/12 mx-auto flex justify-center text-white my-8" value='Add Spot'/>
          
        </form>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default AddTouristSpot;
