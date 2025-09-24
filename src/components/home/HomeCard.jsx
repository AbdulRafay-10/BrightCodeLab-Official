import React from "react";
import { Link } from "react-router-dom";

import OptimizedImage from "../OptimizedImage";
const HomeCard = ({ imageUrl, title, text, path }) => (
  <div className="w-full ">
    <Link to={`${path}`}>
      <div
        className="w-full"
      >
        <div className="lg:px-5 text-black ">
            <img src={imageUrl} alt={title} />
        </div>
        <div className="py-5">
          <h1 className="lg:text-3xl text-xl px-4 text-black pb-4">{title}</h1>
          <p className="lg:w-[19rem] w-full px-4 text-black font-light tracking-widest text-start">
            {text}
          </p>
        </div>
      </div>
    </Link>
  </div>
);

export default HomeCard;
