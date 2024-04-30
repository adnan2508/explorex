import React from "react";

const OurTeam = () => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* First card */}
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/HHnfQ2W/John-Kumah-e1608222378172.jpg"
            alt="Shoes"
            className="w-full h-64"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">John Emanuel</h2>
          <p>Tour Analyst</p>
        </div>
      </div>

      {/* Second card */}
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/47L01yg/210126121823-martha-stewart-0105-file.jpg"
            alt="Martha"
            className="w-full h-64"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Martha Stewart</h2>
          <p>Tour Advisor</p>
        </div>
      </div>

      {/* Third card */}
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/d6VdXGW/maxresdefault.jpg"
            alt="Joshua"
            className="w-full h-64"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Joshua Cobb</h2>
          <p>CEO</p>
        </div>
      </div>

    </div>
  );
};

export default OurTeam;
