import React from "react";

const InfiniteScroll = ({technologies}) => {
  return (
    <div className="relative overflow-hidden w-full py-6">
      <div className="flex w-[200%] animate-marquee gap-5">
        {technologies?.concat(technologies)?.map((image, index) => (
          <img
            key={index}
            className="h-20 lg:w-52 w-36 object-contain"
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;