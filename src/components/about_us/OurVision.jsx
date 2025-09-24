import React from "react";
import { motion } from "framer-motion";

import OptimizedImage from "../OptimizedImage";
const OurVision = () => {
  return (
    <div className="flex justify-between items-center px-8 py-14 bg-customDarkBlue text-white flex-col-reverse md:flex-row">
      
      {/* Text Block with scroll animation from left */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="md:w-1/2 w-full"
      >
        <h1 className="text-4xl font-bold">Our Vision</h1>
        <p className="pt-5 text-lg">
          We are committed to deliver exceptional software solutions for businesses <br />
          while nurturing a culture of positivity, collaboration, and personal growth <br />
          among our team members. Our success is defined by our clients’ growth and <br />
          our employees’ well-being.
        </p>
      </motion.div>

      {/* Image Block with scroll animation from right */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0"
      >
        <OptimizedImage src="/images/OurVision_2.png"
          alt="Our Vision"
          className="max-w-full h-auto"
          />
      </motion.div>
    </div>
  );
};

export default OurVision;
