import React from "react";
import { motion } from "framer-motion";

const OurServicesText = () => {
  return (
    <div className="overflow-x-hidden">
  <div className="lg:px-14 px-6 pt-10 md:py-24 text-center max-w-screen mx-auto">
    <motion.p
      className="font-bold md:font-bold lg:text-5xl md:text-3xl text-xl leading-snug"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ amount: 0.5 }}
    >
      Bright Code Lab Premium{" "}
      <span className="text-customBlue">
        Custom Software <br className="lg:block hidden" />
        <span className="py-3"> Development Services </span>
      </span>
    </motion.p>
    <motion.p
      className="md:text-xl text-base py-3 leading-relaxed"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      viewport={{ amount: 0.5 }}
    >
      Turning your vision into reality with Bright Code Lab premium custom
      software solutions.
    </motion.p>
  </div>
</div>
  );
};

export default OurServicesText;
