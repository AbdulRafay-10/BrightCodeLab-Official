import React from "react";


const DynamicHeading = ({ mainText ="", highlightedParts="" ,className =""}) => {
  return (
    <h1 className={`lg:text-[40px] lg:leading-[55px] md:leading-9 leading-8 md:text-[35px] text-2xl lg:px-4 px-0 lg:w-full w-11/12 text-center font-bold ${className}`}>
    {mainText.map((text, index) => (
      <React.Fragment key={index}>
      {" "}  {text} {" "}
        {highlightedParts[index] && (
          <span className={highlightedParts[index].className || "text-primaryBlue"}>
           {" "} {highlightedParts[index].text}
          </span>
        )}
      </React.Fragment>
    ))}
  </h1>
  );
};

export default DynamicHeading;
