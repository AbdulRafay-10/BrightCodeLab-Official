import React from "react";
import { motion } from "framer-motion";
import webImage from "../../../public/images/webimage.webp";

import OptimizedImage from "../../components/OptimizedImage";
const WebDescription = () => {
  return (
    <div className="flex px-6 w-full flex-wrap justify-center items-center py-12">
      
      {/* Text section animates from left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="lg:w-1/2 mx-auto w-11/12 px-4"
      >
        <p className="my-2 text-justify text-lg text-textBlack">
          Brightcodelab goes beyond the ordinary to provide you with highly
          customized web development services that perfectly align with your
          unique business needs and target audience. Our dedicated team of
          seasoned web developers leverages cutting-edge technologies to craft
          high-performance web applications that stand out in today's
          competitive landscape
        </p>
        <p className="my-2 text-justify text-lg text-textBlack">
          Our approach to web development is built on a solid foundation of
          collaboration and innovation. We understand that your website is often
          the first touchpoint your customers have with your brand, and we take
          that responsibility seriously. With this in mind, we follow a
          comprehensive development process that prioritizes your satisfaction
          and sets the stage for your online success.
        </p>
        <p className="my-2 text-justify text-lg text-textBlack">
          We meticulously plan and execute each project, ensuring that it not
          only meets your current requirements but also lays the groundwork for
          future scalability. Whether you're looking to create a sleek and
          modern corporate website, an e-commerce platform that drives sales, or
          a feature-rich web application, our team is well-equipped to bring
          your vision to life.
        </p>
        <p className="my-2 text-justify text-lg text-textBlack">
          So, partner with Brightcodelab, and let us guide you through the
          dynamic world of web development.
        </p>
      </motion.div>

      {/* Image section animates from right */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="lg:w-1/2 lg:mt-0 mt-4 mx-auto w-11/12 px-4"
      >
        <OptimizedImage src={webImage}
          alt="web image"
          className="lg:w-[583px] object-contain w-full lg:h-[359px] h-full"
          />
      </motion.div>
    </div>
  );
};

export default WebDescription;
