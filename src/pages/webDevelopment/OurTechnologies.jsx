import React from "react";
import InfiniteScroll from "./Slider";

const OurTechnologies = ({
  title,
  highlightedText = "",
  technologies,
  leadingSpacer,
  trailingSpacer,
  trackPaddingX,
  gapPx,
  itemClassName,
}) => {
  return (
    <div className="w-full flex justify-center mt-10 flex-col items-center py-16">
      <h1 className="text-white lg:text-[40px] text-3xl text-center font-bold">
       {title}
        <span className="text-[#0066b3]">{" "}{highlightedText}</span>
      </h1>
     <InfiniteScroll
       technologies={technologies}
       leadingSpacer={leadingSpacer}
       trailingSpacer={trailingSpacer}
       trackPaddingX={trackPaddingX}
       gapPx={gapPx}
       itemClassName={itemClassName}
     />
    </div>
  );
};

export default OurTechnologies;
