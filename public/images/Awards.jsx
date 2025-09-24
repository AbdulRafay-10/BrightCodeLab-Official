import React from "react";

import OptimizedImage from "../../src/components/OptimizedImage";
import Award1 from "../../public/images/Award1.webp";
import Award2 from "../../public/images/Award2.webp";
import Award3 from "../../public/images/Award3.webp";

const Awards = () => {
  return (
    <div className="px-7 pt-10 h-screen">
      {/* Parent div having title , certificate and awards   */}
      <div className="">
        <h1 className="font-bold text-4xl">
          Excellence <span className="text-customBlue">Unveiled Awards</span>
        </h1>
        <p className="pt-4 text-xl ">
          Preferred by Entrepreneurs and Business Innovators.
        </p>
      </div>

      {/* Parent div have the awards image */}
      <div className=" pt-14 ">
        <div className="flex justify-center gap-16">
          <div className="h-40 w-40">
            <OptimizedImage src={Award1} alt="award" />
          </div>
          <div className="h-40 w-40">
            <OptimizedImage src={Award2} alt="award"  />
          </div>
          <div className="h-40 w-40">
            <OptimizedImage src={Award3} alt="award"  />
          </div>
          <div className="h-40 w-40">
            <OptimizedImage src="/images/Award4.webp" alt="award"  />
          </div>
        </div>

        {/* <div className="flex justify-center gap-16 md:pt-20 ">
          <div className="h-40 w-40">
            <OptimizedImage src="./src/assets/images/Award5.webp" alt="award"  />
          </div>
          <div className="h-40 w-40">
            <OptimizedImage src="./src/assets/images/Award6.webp" alt="award"  />
          </div>
          <div className="h-40 w-40">
            <OptimizedImage src="./src/assets/images/Award7.webp" alt="award" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Awards;
