import React from "react";
import { motion } from "framer-motion";
import webImage from "../../../public/images/aiembedded.webp";

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

const AiEmbeddedDescription = () => {
  return (
    <div className="flex px-6 w-full flex-wrap justify-center items-center py-12">
      <motion.div
        className="lg:w-1/2 mx-auto w-11/12 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={textVariants}
      >
        <p className="my-2 text-justify text-lg font-semibold text-textBlack">
          Brightcodelab brings you cutting-edge{" "}
          <span className="text-primaryBlue"> AI-enabled embedded systems development,</span> a strategic solution to infuse artificial intelligence
          into your software or hardware products. Our expertise in{" "}
          <span className="text-primaryBlue">embedded machine learning development</span> ensures your business stays ahead of the
          curve with intelligent features and data-driven insights.
        </p>
        <p className="my-2 text-justify text-lg font-semibold text-textBlack">
          Our approach starts with a comprehensive assessment of your business
          requirements and objectives. Whether you want to build AI embedded apps
          for devices (e.g., smart cameras, drones, robots), or AI-powered
          embedded systems for specific tasks (e.g., image recognition, natural
          language processing, predictive maintenance), our team possesses all
          the needed expertise to deliver.
        </p>
        <p className="my-2 text-justify text-lg font-semibold text-textBlack">
          Using state-of-the-art AI frameworks such as TensorFlow and PyTorch,
          to build and integrate AI models into your applications, we ensure that
          the AI components are efficient, accurate, and seamlessly integrated.
        </p>
        <p className="my-2 text-justify text-lg font-semibold text-textBlack">
          Maintaining the integrity of your product is our top priority when
          integrating <span className="text-primaryBlue">AI functionalities</span> into your existing systems, and we do
          so with a smooth process without the need for a complete overhaul. We
          also provide comprehensive documentation and training to help your
          team make the most of these new AI capabilities.
        </p>
        <p className="my-2 text-justify text-lg font-semibold text-textBlack">
          Tap into the power of AI today and see how you can transform your
          products and services.
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

export default AiEmbeddedDescription;
