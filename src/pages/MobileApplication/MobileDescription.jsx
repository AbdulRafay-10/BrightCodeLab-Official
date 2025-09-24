import React from "react";
import { motion } from "framer-motion";
import webImage from "../../../public/images/webimage.webp";

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

const MobileDescription = () => {
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
          At Brightcodelab, we’re passionate about delivering mobile apps that
          are not just functional but truly user-centric, innovative, and
          reliable. Driven by a commitment to using the latest technologies to
          build high-quality apps that precisely match your unique requirements.
          Our team of experienced developers is well-versed in the intricacies
          of mobile app development, ensuring that your vision becomes a
          reality.
        </p>
        <p className="my-2 text-justify text-lg text-textBlack">
          We take the time to understand your business and your target audience
          so that we can create an app that meets your needs and exceeds your
          expectations. Beyond the initial development, we offer a variety of
          services that extend the performance and life of your mobile app. Our
          app maintenance and support services ensure that your app continues to
          operate at its peak even if it's launched, giving you peace of mind
          and allowing you to focus on your core business activities.
        </p>
        <p className="my-2 text-justify text-lg text-textBlack">
          Don't miss the opportunity to transform your mobile experiences with
          Brightcodelab. Reach out to us today.
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

export default MobileDescription;
