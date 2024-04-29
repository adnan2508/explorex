import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";
import ListTable from "../components/ListTable";

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

        {
        item?.map((p) => <ListTable p={p}></ListTable>)
        }
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MyList;
