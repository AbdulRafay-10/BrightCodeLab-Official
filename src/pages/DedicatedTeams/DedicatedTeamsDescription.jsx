import React from "react";
import { motion } from "framer-motion";
import webImage from "../../../public/images/dedicatedTeams.webp";

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

const DedicatedTeamsDescription = () => {
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
          Are you tired of the never-ending search for the perfect designer,
          developer, or full-stack development team? Look no further! Our
          Dedicated Team service provides a seamless way to find experts who are
          not only skilled in their craft but also have a deep commitment to
          excellence and integration into your existing teams or starting from
          scratch.
        </p>
        <p className="my-2 text-justify text-lg text-textBlack">
          No more daunting to-do lists for hiring teams—leave it all to us! Our
          teams at Brightcodelab are equipped with the latest tools and
          technologies, as well as a deep understanding of industry best
          practices. Whether you need a project manager, business analyst, UI/UX
          specialist, or developer, you can choose from our diverse pool of
          highly talented professionals.
        </p>
        <p className="my-2 text-justify text-lg text-textBlack">
          Let us take the weight off your shoulders and introduce you to the
          perfect designer, developer, and expert you've been searching for.
          Streamline your creative processes and achieve exceptional results
          with Brightcodelab's Dedicated Team service.
        </p>
        <p className="my-2 text-justify text-lg text-textBlack">
          Here are some of the benefits of working with our Dedicated Team
          service:
          <ul className="list-disc list-inside mt-2 ml-4">
            <li>
              You'll be able to focus on your core business while we take care
              of the rest.
            </li>
            <li>
              You'll have peace of mind knowing that your project is in good
              hands.
            </li>
            <li>You'll get the best possible results on time and on budget.</li>
          </ul>
          <br />
          Contact us today to learn more about our Dedicated Team service and
          how we can help you take your business to the next level.
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

export default DedicatedTeamsDescription;
