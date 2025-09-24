import React from 'react';

import OptimizedImage from "../OptimizedImage";
const Card = ({ imageUrl, title, text }) => (
  <div className="px-6">
    {console.log(typeof text)}
    <div className="rounded-xl w-[25.375rem] h-[21rem] shadow-2xl scroll-card 
        cursor-pointer duration-[0.7s] hover:scale-105 ">

      <div className="flex p-10"> {/* Image */}
        <h1 className="text-3xl ">{title}</h1>
        <OptimizedImage src={imageUrl} alt={title} className='h-20' / />
      </div>

      <div className="flex flex-col items-start px-8"> {/* Text */}
        {
          text.map(txt => <li className=" list-disc w-[19rem] font-light tracking-widest">{txt}</li>)
        }

      </div>

    </div>
  </div>

);

export default Card; 