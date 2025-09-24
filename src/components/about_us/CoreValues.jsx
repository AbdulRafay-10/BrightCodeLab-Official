import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Card from "./Card.jsx";


const CoreValues = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const cardsData = [
    {
      imageUrl: "/images/CoreValues1.svg",
      title: "Communication",
      text: "Our adherence to open and honest communication leads to our clients & employees, as we actively seek feedback.",
    },
    {
      imageUrl: "/images/CoreValues2.svg",
      title: "Seriousness",
      text: "At Bright Code Lab  Technologies, we value the significance of professionalism in our industry for achieving outstanding outcomes.",
    },
    {
      imageUrl: "/images/CoreValues3.svg",
      title: "Professionalism",
      text: "Professionalism and integrity are the pillars of our work, as we wholeheartedly adhere to a strict code of conduct",
    },
    {
      imageUrl: "/images/CoreValues4.svg",
      title: "Awareness",
      text: "We are committed to continuous learning, growth, and awareness and equip our team with the latest tools and technologies.",
    },
    {
      imageUrl: "/images/CoreValues5.svg",
      title: "Respect & Kindness",
      text: "Respect & kindness are the guiding principles of our work culture, as we foster an inclusive and diverse environment.",
    },
    {
      imageUrl: "/images/CoreValues6.svg",
      title: "Responsibility",
      text: "We understand the significance of responsibility and accountability in projects, we take ownership to ensure the best.",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-cover  text-black bg-center pt-4">
      <div className="absolute inset-0 "></div>

      <div className="relative flex flex-wrap justify-center px-3 mt-8 pb-6">
        {cardsData.map((card, index) => {
  let initialAnimation = {};

  switch (index) {
    case 0: // 1st card - from left
    case 3: // 4th card - from left
      initialAnimation = { opacity: 0, x: -80 };
      break;
    case 1: // 2nd card - from top
      initialAnimation = { opacity: 0, y: -80 };
      break;
    case 2: // 3rd card - from right
    case 5: // 6th card - from right
      initialAnimation = { opacity: 0, x: 80 };
      break;
    case 4: // 5th card - from bottom
      initialAnimation = { opacity: 0, y: 80 };
      break;
    default:
      initialAnimation = { opacity: 0, y: 50 };
  }

  return (
    // ...inside your map...
<motion.div
  key={index}
  className="lg:w-[30%] md:w-[46%] w-[95%] mx-4 my-4
  backdrop-blur-sm bg-transparent 
                shadow-[0px_1px_8px_#68a7e5] 
                rounded-2xl p-6 duration-500 overflow-hidden 
                hover:shadow-[0px_2px_10px_8px_#b3d8f7] hover:scale-105"
  initial={initialAnimation}
  whileInView={{ opacity: 1, x: 0, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
  viewport={{ once: false }}
>
  <Card
    imageUrl={card.imageUrl}
    title={card.title}
    text={card.text}
  >
    {loaded && (
      <Particles
        id={`particles-${index}`}
        init={particlesInit}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        options={{
          background: { color: "transparent" },
          fullScreen: { enable: false },
          particles: {
            number: { value: 20, density: { enable: true, area: 200 } },
            color: { value: "#012842" },
            shape: { type: "circle" },
            opacity: { value: 0.3, random: true },
            size: { value: 2, random: true },
            links: {
              enable: true,
              distance: 130,
              color: "#012842",
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              outModes: { default: "bounce" },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
            },
            modes: { repulse: { distance: 50, duration: 0.2 } },
          },
          detectRetina: true,
        }}
      />
    )}
  </Card>
</motion.div>
  );
})}
      </div>
    </div>
  );
};

export default CoreValues;
