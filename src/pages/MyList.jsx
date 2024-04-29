import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";

const MyList = () => {
  const { user } = useAuth() || {};
  const [item, setItem] = useState([]);
  console.log(user);

  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        console.log(data);
      });
  }, [user]);

  return (
    <div>
      <Navbar></Navbar>

      <div className="w-11/12 mx-auto my-10">
        <h2 className="text-center text-5xl font-bold">My Added List</h2>

        <div className="overflow-x-auto mt-8">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Country</th>
                <th>Average Cost</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {item.map((p) => (
                <tr>
                  <td>{p.spotName}</td>
                  <td>{p.location}</td>
                  <td>{p.country}</td>
                  <td>${p.cost}</td>
                  <td className="flex flex-col gap-3">
                    <button className="btn btn-info text-white">Update</button>
                    <button className="btn btn-error text-white">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyList;
