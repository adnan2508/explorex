import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateSpot = () => {
    const spot = useLoaderData();
    const {spotName, country, location, cost, description, season, visitor, time, name, email, image, _id} = spot ;

    const handleUpdateSpot = (event) => {
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
    
        const updatedSpot = {spotName, country, location, cost, description, season, visitor, time, name, email, image};
        console.log(updatedSpot);
    
        //send data to the server
        fetch(`https://explorex-server.vercel.app/spot/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedSpot),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "Tourist Spot Updated Successfully!",
                icon: "success",
                confirmButtonText: "Done",
              });
            }
          });
      };

    return (
        <div>
            <Helmet>
                <title>Update {spotName}</title>
            </Helmet>
            <Navbar></Navbar>

            <div className='w-11/12 mx-auto'>
            <div className="w-11/12 mx-auto my-10">
        <h2 className="text-center text-5xl font-bold mb-8">Update {spotName}</h2>

        <form onSubmit={handleUpdateSpot}>
          <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-5">
            {/* single row */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg">Spot Name</span>
              </div>
              <input
                type="text"
                name="spotName"
                defaultValue={spotName}
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
                defaultValue={country}
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
                defaultValue={location}
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
                defaultValue={cost}
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
                defaultValue={description}
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
                defaultValue={season}
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
                defaultValue={visitor}
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
                defaultValue={time}
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
                defaultValue={name}
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
                defaultValue={email}
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
                defaultValue={image}
                placeholder="Image Link"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <input
            type="submit"
            className="btn bg-[#4E4E4E] w-11/12 mx-auto flex justify-center text-white my-8"
            value="Update Spot"
          />
        </form>
      </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default UpdateSpot;