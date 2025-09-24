import React from 'react';


import OptimizedImage from "../OptimizedImage";
const Card = ({ imageUrl, title, text, children }) => (
  <div className="  cursor-pointer ">
    {/* Particles go here, absolutely positioned */}
    {children}
    <div className="px-10 pt-10 text-black brightness-0 relative z-10">
        <OptimizedImage src={imageUrl} alt={title} className="w-16 h-16 mb-4 " />
    </div>
    <div className="px-10 py-5 relative z-10">
     <h1 className="text-3xl pb-4">{title}</h1>
      <p className="font-light">{text}</p>
    </div>
  </div>
);

export default Card;