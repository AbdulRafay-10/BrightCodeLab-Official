import React, { useEffect, useRef, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion, useInView } from "framer-motion";
import Card from "./HomeCard";

const useIsLargeScreen = () => {
  const [isLarge, setIsLarge] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLarge;
};

const OurServices = () => {
  const [loaded, setLoaded] = useState(false);
  const isLargeScreen = useIsLargeScreen();

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const particlesOptions = {
    background: { color: "transparent" },
    fullScreen: { enable: false },
    particles: {
      number: { value: 20, density: { enable: true, area: 200 } },
      color: { value: "#0031a0" }, // Changed from white to blue
      shape: { type: "circle" },
      opacity: { value: 0.3, random: true },
      size: { value: 2, random: true },
      links: {
        enable: true,
        distance: 130,
        color: "#0031a0", // Changed from white to blue
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: { default: "bounce" },
      },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 50, duration: 0.2 } },
    },
    detectRetina: true,
  };

  const cardsData = [

    {
      imageUrl: "/images/UI UX design.svg",
      path: "/ui-ux-design",
      title: "UI/UX Design",
      text: "Crafting a data-driven and user centered UI UX to provide the greatest user experience and satisfaction",
    },
    {
      imageUrl: "/images/Services2.svg",
      path: "/mobile-development",
      title: "Mobile Development",
      text: "Well-engineered, AI-driven native and hybrid applications for all your business needs with a seamless experience.",
    },
    {
      imageUrl: "/images/Services4.svg",
      path: "/web-development",
      title: "Web Development",
      text: "Achieve business objectives and build a strong online presence by our web development solutions for customers.",
    },
    {
      imageUrl: "/images/Services7.svg",
      path: "/ai-embedded-applications",
      title: "AI Embedded Applications",
      text: "Infuse your devices with AI to create smarter, more autonomous, & more efficient products.",
    },
    {
      imageUrl: "/images/Product scope1.svg",
      path: "/product-scope",
      title: "Product Scope",
      text: "Define product to clarify features and functionalities for success",
    },
    {
      imageUrl: "/images/Dedicated team1.svg",
      path: "/dedicated-teams",
      title: "Dedicated Teams",
      text: "Onboard our dedicated designers, developers and skilled engineers on a full-time basis to achieve your business objectives.",
    },
  ];

  const getAnimation = (index) => {
    const animations = [
      { x: -100, opacity: 0 },
      { y: -100, opacity: 0 },
      { x: 100, opacity: 0 },
      { x: -100, opacity: 0 },
      { y: 100, opacity: 0 },
      { x: 100, opacity: 0 },
    ];
    return animations[index % animations.length];
  };

  return (
    <div className="relative w-full min-h-screen bg-white text-black pt-4">
      <div className="relative flex flex-wrap justify-center px-3 mt-8 pb-6">
        {cardsData.map((card, index) => {
          const ref = useRef();
          const isInView = useInView(ref, {
            margin: "-100px 0px",
            triggerOnce: false,
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={isLargeScreen ? getAnimation(index) : {}}
              animate={isLargeScreen && isInView ? { x: 0, y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative lg:w-[30%] md:w-[46%] w-[95%] mx-4 my-4 
  backdrop-blur-lg bg-transparent  
  shadow-[0px_3px_8px_rgba(0,49,160,0.25)]   /* slightly stronger */
  rounded-2xl p-6 duration-500 overflow-hidden 
  hover:shadow-[0px_6px_16px_rgba(0,49,160,0.35)] hover:scale-105"
            >
              {loaded && (
                <Particles
                  id={`particles-${index}`}
                  init={particlesInit}
                  options={particlesOptions}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                />
              )}
              <div className="relative">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-20 h-20 transition duration-300 filter brightness-0 "
                />
                <Card {...card} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;