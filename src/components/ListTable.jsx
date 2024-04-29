import React from "react";

const ListTable = ({ p }) => {
  return (
    <div>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTable;
