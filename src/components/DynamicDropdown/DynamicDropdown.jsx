import React, { useState } from "react";
import { DownArrow } from "../icons/Icons";

const DynamicDropdown = ({ options,placeholder,value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(); 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <div
        onClick={toggleDropdown}
        className="w-full border focus:outline-none flex justify-between items-center border-[#d4ebfc] rounded-[8px] bg-[#fff] shadow-[#1018280d] px-4 h-[40px] text-sm "
      >
        <button className="text-gray-400 text-base">
          {value ? value.label : placeholder}
        </button>
        <DownArrow />
      </div>
      {isOpen && (
        <div className="absolute left-0 px-3 pb-2 right-0 mt-2 overflow-y-auto bg-white border rounded-md shadow-lg z-10">
          <ul className="">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 text-textBlack  mt-2 rounded hover:bg-[#b6d9f7] hover:text-primaryBlue cursor-pointer"
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DynamicDropdown;
