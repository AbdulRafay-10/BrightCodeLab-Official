import React from 'react';
import { motion } from 'framer-motion';

import OptimizedImage from "../OptimizedImage";
const Work = () => {
  return (
    <>
      {/* parent */}
      <div className="py-20 px-8 bg-white text-black">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          {/* text */}
          <motion.div
            className="md:w-1/2 lg:text-xl"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
  <h1 className="text-4xl font-bold pb-3">
          What <span className="text-customBlue">We Do</span>
        </h1>
        
            <div>
              At Bright Code Lab Technologies, we proudly lead the charge in innovation,
              setting the industry standards for tackling even the most intricate
              business challenges. Our unwavering commitment to excellence drives
              us to provide unparalleled expertise and comprehensive business
              solutions, that redefine success for our clients. We believe in going
              beyond the ordinary, which is why we offer round-the-clock support and
              monitoring to ensure your business stays ahead of the curve.
            </div>
            <br />
            <div>
              Our exceptional team is a dynamic mix of seasoned professionals,
              each a master in their respective fields. From the earliest stages of
              research and development, through the intricacies of requirement
              engineering and business analysis, to the artistry of UI/UX design, and
              the meticulous craft of software architecture, our experts stand ready
              to transform your vision into reality. We excel in custom website and
              mobile app development.
            </div>
          </motion.div>

          {/* image */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            <OptimizedImage className="rounded-xl w-full"
              src="/images/Work.jpg"
              alt="What We Do"
              />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Work;
