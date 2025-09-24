import React from "react";
import { motion } from "framer-motion";
import webImage from "../../../public/images/uiuxdesc.webp";

import OptimizedImage from "../../components/OptimizedImage";
const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const UiUxDescription = () => {
  return (
    <div className="flex px-6 w-full flex-wrap justify-center items-center py-12">
      <motion.div
        className="lg:w-1/2 mx-auto w-11/12 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={textVariants}
      >
        <p className="my-2 text-justify text-lg text-textBlack">
          Brightcodelab is dedicated to crafting unforgettable and meaningful
          experiences tailored specifically for your target audience. Our
          approach is deeply rooted in understanding your unique business
          objectives and gaining insights into user preferences, enabling us to
          design user-centered interfaces that seamlessly align with your brand
          identity. Our commitment to excellence is reflected in our strategic
          design process and our collaborative approach. We work closely with
          your team to transform your vision into tangible, intuitive user
          interfaces that effortlessly guide users toward their goals. With
          every project, we set out not just to meet expectations but to exceed
          them. What sets Brightcodelab apart is our keen focus on usability. We
          understand that a beautiful design is only a part of the equation.
          Through rigorous usability testing, we optimize every touchpoint in
          your interface to ensure that users enjoy interacting with your
          product and efficiently achieve their objectives. Embark on a
          transformative journey with ZAPTA Technologies, where we merge
          artistry with functionality to design a masterpiece that will elevate
          your business to new heights.
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
          your vision to life
        </p>
        <p className="my-2 text-justify text-lg text-textBlack">
          So, partner with BrightCodeLab, and let us guide you through the
          dynamic world of web development.
        </p>
      </motion.div>

      <motion.div
        className="lg:w-1/2 lg:mt-0 mt-4 mx-auto w-11/12 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={imageVariants}
      >
        <OptimizedImage src={webImage}
          alt="web image"
          className="lg:w-[583px] object-contain w-full lg:h-[359px] h-full"
          />
      </motion.div>
    </div>
  );
};

export default UiUxDescription;
