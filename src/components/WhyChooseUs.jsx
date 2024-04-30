import React from "react";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-5 rounded-3xl bg-base-100 shadow-xl">
        <figure className="flex-grow">
          <img
            src="https://i.ibb.co/4YkdNRr/360-F-141523101-8umyxdkp-KIq-Fg-VIm-Rhc-WNw-H9-Gg5-TBu29.jpg"
            alt="Why Choose Us"
            className="w-full rounded-3xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">We care about our Clients!</h2>
          <p>we understand that when it comes to planning your travel experiences, you have a myriad of options to choose from. Here we provide compelling reasons why we believe you should entrust us with crafting your next adventure.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
