import React from "react";
import { motion } from "framer-motion";
import OptimizedImage from "../OptimizedImage";

const OurMission = () => {
  return (
    <div>
      {/* Image Container */}
      <div className="relative text-white text-center">
        <OptimizedImage
          src="/images/OurMission.jpg"
          className="w-full"
          alt="Our Mission"
        />

        {/* Animated Text Overlay */}
        <motion.div
          className="absolute top-3 space-y-2 w-full md:top-32 px-10"
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h1 className="text-xl md:text-4xl font-bold">Our Mission</h1>
          <p className="md:text-xl">
            We aim to help businesses worldwide thrive by combining creativity, technology, and innovation to deliver solutions that truly make a difference.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default OurMission;
