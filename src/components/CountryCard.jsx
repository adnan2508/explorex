import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({country}) => {
  return (
    <div>
      <Link to='/placesOfCountry'>
      <div className="card card-compact w-96 h-[480px] mb-8 bg-base-100 shadow-xl">
        <figure>
          <img
            src={country.image}
            alt={country.country}
            className="w-full h-52"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">{country.country}</h2>
          <p className="text-lg font-normal">{country.description}</p>
        </div>
      </div>
      </Link>
      </div>
  );
};

export default CountryCard;
