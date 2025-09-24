import React from "react";
import { motion } from "framer-motion";
import webImage from "../../../public/images/productscope.webp";

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

const ProductScopeDescription = () => {
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
          Brightcodelab understands that laying the groundwork for success
          starts with precision and organization. Our project scope services are
          designed to provide comprehensive planning and documentation so that
          your software’s requirements, business objectives, deliverables,
          timelines, and resources are clearly outlined and understood.
        </p>
        <p className="my-2 text-justify text-lg text-textBlack">
          Our team collaborates closely with clients and key stakeholders to
          gather requirements, assess potential risks, and develop a robust
          framework that serves as a roadmap for project execution. Through this
          process, clients can not only expect a clear understanding of their
          product idea and project parameters but also enhanced communication,
          reduced project uncertainties, and ultimately a product that fulfills
          all key objectives.
        </p>
        <p className="my-2 text-justify text-lg text-textBlack">
          With Brightcodelab's Product Scope service, clients can embark on their
          successful software development journey with confidence, knowing that
          every step is carefully planned and executed for success.
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

export default ProductScopeDescription;
