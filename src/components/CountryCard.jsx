import React from "react";

const CountryCard = ({country}) => {
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={country.image}
            alt={country.country}
          />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">{country.country}</h2>
          <p className="text-lg font-normal">{country.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
