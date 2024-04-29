import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyList = () => {
  const { user } = useAuth() || {};
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);

  const handleDelete = (id) => {
    //make sure he confirms
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myList/${user?.email}/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              //remove the list item from UI
              const remainingItem = item.filter((i) => i._id !== id);
              setItem(remainingItem);
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Explorex- My List</title>
      </Helmet>
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
              {item.map((p) => (
                <tr>
                  <td>{p.spotName}</td>
                  <td>{p.location}</td>
                  <td>{p.country}</td>
                  <td>${p.cost}</td>
                  <td className="flex flex-col gap-3">
                    <Link to={`/updateSpot/${p._id}`} className="btn btn-accent text-white">
                      <button>Update</button>
                    </Link>
                    <button onClick={() => handleDelete(p._id)}
                      className="btn btn-error text-white">
                      Delete
                    </button>
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
