import React from "react";
import { motion } from "framer-motion";

const BrightCodeLab = () => {
  return (
    <div className="py-20 px-8">
      {/* Heading Animation - from Top */}
      <motion.h1
        className="text-4xl font-bold text-center pb-3"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        What is <span className="text-customBlue">Bright Code Lab ?</span>
      </motion.h1>

      {/* Paragraph Animation - from Bottom */}
      <motion.div
        className="text-center"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false }}
      >
        <p className=" text-lg">
         Bright Code Lab is a forward-thinking software development company dedicated to building powerful and user-friendly digital solutions. We specialize in custom software, web development, MVPs, and intuitive UI/UX design, helping businesses turn ideas into scalable products.

What makes us different is our focus on people first—understanding your goals, challenges, and vision before writing a single line of code. Our team brings together technology experts, designers, engineers, and project managers who collaborate closely to deliver secure, high-quality, and affordable solutions.

Over the years, we’ve had the privilege of working with clients from diverse industries, creating long-term partnerships built on trust, transparency, and results. At Bright Code Lab, we don’t just build apps—we build solutions that grow with your business
        </p>
      </motion.div>
    </div>
  );
};

export default BrightCodeLab;
