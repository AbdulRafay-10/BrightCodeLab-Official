import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DownArrow } from "../icons/Icons";

import OptimizedImage from "../OptimizedImage";
const Dropdown = ({ title, items, linkPath, isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group mt-2"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex gap-2 items-center cursor-pointer">
        <Link
          to={linkPath}
          className={`transition duration-300 hover:border-b-2 hover:border-[#0031a0] ${isScrolled ? "text-black" : "text-white"}`}
        >
          {title}
        </Link>
        <p className="pt-1">
          <DownArrow color={isScrolled ? "black" : "white"} />
        </p>
      </div>
      <div className="pt-2"></div>
      {isOpen && (
        <div className="absolute left-1/2 p-3 -translate-x-1/2 right-0 bg-white text-black shadow-lg rounded-md lg:min-w-[700px]">
          <div className="grid grid-cols-2 gap-4 p-2">
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center gap-4 text-sm border-2 border-transparent hover:border-customBlue rounded-lg p-2 hover:bg-gray-100 transition duration-300"
              >
                <div className="w-24 min-w-16 min-h-16 h-12 flex justify-center items-center rounded-full">
                    <OptimizedImage src={item.icon} alt={item.name} className="w-10 h-10" />
                </div>
                <div>
                  <div className="font-bold text-xl">
                    {item?.title?.split(" ")[0]}{" "}
                    <span className="text-blue-500">
                      {item?.title?.split(" ")?.slice(1)?.join(" ")}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {item.description}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
