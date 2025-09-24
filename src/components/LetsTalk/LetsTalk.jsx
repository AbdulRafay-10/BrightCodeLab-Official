import React from "react";
import Capital from "../../assets/images/capital.svg"
import Qatar from "../../assets/images/Doha.png";
import Canada from "../../assets/images/exports_Ottawa-512.webp";

import OptimizedImage from "../OptimizedImage";
const LetsTalk = () => {
  const locations = [
    {
      country: "PAKISTAN",
      address: "Peshawar KPK",
      phone: "+92 3151503181",
      image: Capital,
      bgClass: "",
      invert: false
    },
    {
      country: "QATAR",
      address: "Doha Qatar",
      phone: "+974 3151503181",
      image: Qatar,
      bgClass: "bg-white p-1 rounded ", // ✅ added border-black
      invert: false // ✅ no brightness filter
    },
    {
      country: "CANADA",
      address: "Alberta, Canada",
      phone: "+1 3151503181",
      image: Canada,
      bgClass: "bg-white p-1 rounded ", 
      invert: true
    },
  ];

  return (
    <div className="w-full mt-8 px-6 bg-white flex flex-wrap lg:justify-center justify-start lg:items-center items-start">
      <div className="lg:w-1/2 lg:px-0 md:px-16 px-0 w-full py-8">
        <h1 className="lg:text-[50px] text-[40px] leading-[50px] font-medium text-[#005baa]">
          Let's talk about your <br className="lg:block hidden" /> project
        </h1>
        <p className="text-xl w-full mt-4 text-black">
          Have a project in mind? Talk to us directly and get <br /> personalized
          guidance every step of the way.
        </p>
        <button className="mt-6 border px-6 md:py-3 py-2 rounded font-semibold text-lg border-primaryBlue text-white hover:bg-white bg-primaryBlue hover:text-primaryBlue transition-all duration-700 ease-in-out transform hover:shadow-lg">
          Book a Consultation - it's free
        </button>
      </div>
      <div className="lg:w-1/2 w-full lg:px-0 md:px-16 px-0 flex items-center flex-col py-8">
        {locations.map((location, index) => (
          <div className="flex items-center mb-6" key={index}>
            <div className={`mr-6 ${location.bgClass}`}>
              <img src={location.image}
                alt={`${location.country} flag`}
                className={`w-16 h-16 object-contain ${location.invert ? "filter invert-0" : ""}`}
                style={location.invert ? { filter: "brightness(0)" } : {}}
                />
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-semibold text-black">
                {location.country}
              </p>
              <div className="flex text-black">
                <h1 className="mr-2 font-bold">Address</h1>
                <p>{location.address}</p>
              </div>
              <div className="flex text-black">
                <h1 className="mr-2 font-bold">Phone No</h1>
                <p>{location.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LetsTalk;