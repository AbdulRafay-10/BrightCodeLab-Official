import React from "react";

const Apply = () => {
  return (
    <div className="flex justify-center items-center h-[15rem] ">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          Looking for a <span className="text-customBlue">job</span>
        </h1>

        {/* button */}
        <div className="pt-5">
          <button
            className="bg-customBlue border border-customBlue rounded-md h-12 w-44 
         hover:bg-white transitoin duration-[1.5s] hover:text-customBlue ">
            Send us a message!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Apply;
