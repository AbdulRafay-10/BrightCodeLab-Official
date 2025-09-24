import React from "react";
import { motion } from "framer-motion";

import OptimizedImage from "../../components/OptimizedImage";
const Process = ({ steps, clipPathImage }) => {
  return (
    <div className="w-full lg:px-8 md:px-6 px-2">
      {steps.map((step, index) => (
        <div key={index}>
          <div className="w-full flex flex-wrap justify-center items-center my-6">
            
            {/* Text block animation from left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className={`lg:w-1/2 md:w-3/4 w-full lg:px-10 md:px-6 px-4 lg:py-20 md:py-12 py-8 rounded-lg bg-primaryBlue2 ${
                index % 2 === 0
                  ? "order-last lg:order-first"
                  : "order-first lg:order-last"
              }`}
            >
              <div className="flex items-center gap-2">
                  <OptimizedImage src={step.icon} alt={`${step.title} icon`} />
                <p className="text-white text-2xl font-bold">{step.title}</p>
              </div>
              <ul className="list-decimal px-4 lg:text-lg md:text-base text-sm text-gray-300 font-semibold mt-4">
                {step.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </motion.div>

            {/* Image block animation from right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="flex lg:w-1/2 md:w-3/4 w-full lg:my-0 my-4"
            >
              <OptimizedImage src={step.image}
                alt={`${step.title} illustration`}
                className="lg:h-[414px] h-full object-contain"
              />
            </motion.div>
          </div>

          {/* Divider image */}
          {index < steps.length - 1 && (
            <div className="w-full flex items-center justify-center">
              <OptimizedImage src={clipPathImage}
                alt="clip path illustration"
                className="h-[214px]"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Process;
