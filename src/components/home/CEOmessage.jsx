import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import CEOMassege from "../../assets/images/CEOMassege.png";

const CEOmessage = () => {

  return (
    <div className="px-8  md:flex justify-between items-center text-white team-Bg bg-[#00319f]">
      {/* CEO Message Text */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, y: -50 }} // Start hidden and slightly above
        whileInView={{ opacity: 1, y: 0 }} // Animate to visible and in place
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        viewport={{ amount: 0.5 }} // Trigger animation when 50% of the element is in view
      >
        <p className="text-4xl font-bold pb-4">
  Our CEO <span className="text-white"> Massege </span>
</p>
<motion.p
  className="text-lg tracking-wider "
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
  viewport={{ amount: 0.5 }}
>
At BrightCodeLab, our vision is to shape the future of technology by creating solutions that empower businesses and inspire innovation. Since our inception, we have been committed to delivering excellence in every project we undertake — whether it’s mobile app development, web solutions, AI/ML systems, or UI/UX design. <br /><br />
As CEO, I take immense pride in leading a company that values creativity, collaboration, and customer success above all else. Every line of code we write and every design we create carries our dedication to helping businesses thrive in the digital age.

Together, let’s build smarter solutions and a brighter tomorrow.
</motion.p>
        <motion.div
          className="pt-9"
          initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and in place
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }} // Add delay for staggered effect
          viewport={{ amount: 0.5 }}
        >
          <h2 className="text-2xl font-bold"> Awais Khan </h2>
          <p className="tracking-wider"> Founder & CEO of BrightCodeLab </p>
        </motion.div>
      </motion.div>

      {/* CEO Image */}
      <motion.div
  className="relative w-full max-w-[600px] h-auto rounded-2xl overflow-hidden"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
  viewport={{ amount: 0.5 }}
>
  <img
    src={CEOMassege}
    alt="CEO Message"
    className="w-full h-auto -mt-36"
  />
</motion.div>
    </div>
  );
};

export default CEOmessage;