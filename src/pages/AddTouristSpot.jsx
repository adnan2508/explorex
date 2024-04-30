import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const AddTouristSpot = () => {
  const {user} = useAuth() || {};
    
  const handleAddSpot = (event) => {
    event.preventDefault();
    const form = event.target;
    const spotName = form.spotName.value;
    const country = form.country.value;
    const location = form.location.value;
    const cost = form.cost.value;
    const description = form.description.value;
    const season = form.season.value;
    const visitor = form.visitor.value;
    const time = form.time.value;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;

    const newSpot = {spotName, country, location, cost, description, season, visitor, time, name, email, image};
    console.log(newSpot);

    //send data to the server
    fetch(`https://explorex-server.vercel.app/spot`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Tourist Spot Added Successfully!",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };
  
  return (
    <div>
      <Helmet>
        <title>Add Tourist Spot</title>
      </Helmet>
      <Navbar></Navbar>

      <div className="w-11/12 mx-auto my-10">
        <h2 className="text-center text-5xl font-bold">Add Tourist Spot</h2>

        <form onSubmit={handleAddSpot}>
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

          <input
            type="submit"
            className="btn bg-[#4E4E4E] w-11/12 mx-auto flex justify-center text-white my-8"
            value="Add Spot"
          />
        </form>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default AddTouristSpot;
