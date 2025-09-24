import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Deployment,
  Development,
  QualityAssurance,
  Revision,
} from "../icons/Icons";
import { GiTeamIdea } from "react-icons/gi";
import { FaProjectDiagram } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const DevelopmentProcess = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: false, margin: "-100px" });

  const Card2Data = [
    {
      title: "Ideation",
      description: `a. Conducting Product Discovery.
                    b. Conducting Product Research.
                    c. Brainstorming Ideas.`,
      icon: <GiTeamIdea className="w-10 h-10" />,
    },
    {
      title: "Project Planning & Strategy",
      description: `a. Defining Roadmap.
                   b. Assigning Roles & Responsibilities.
                   c. Setting up the environment`,
      icon: <FaProjectDiagram className="w-10 h-10" />,
    },
    {
      title: "Analysis and Documentation",
      description: `a. Gathering Requirements.
                   b. Generating backlog.
                   c. Preparing architecture and project planning.`,
      icon: <HiDocumentText className="w-10 h-10" />,
    },
    {
      title: "Design & Prototyping",
      description: `a. Creating user flows(UI). 
                    b. Low fidelity designs(UX)
                    c. High fidelity prototypes`,
      icon: <MdDesignServices className="w-10 h-10" />,
    },
    {
      title: "Development",
      description: `a. Front end development
                    b. Back end development
                    c. API and Database connection `,
      icon: <Development className="w-8 h-8 ml-10" />,
    },
    {
      title: "Quality Assurance",
      description: `a. Creating a test plan & strategy
                    b. Manual testing(functional testing)
                    c. Automation testing `,
      icon: <QualityAssurance className="w-8 h-8" />,
    },
    {
      title: "Deployment",
      description: `a. Hosting & going live
                    b. Crafting user manuals
                    c. Training session`,
      icon: <Deployment className="w-8 h-8" />,
    },
    {
      title: "Revision",
      description: `a. Technical & user support
                    b. Upgrading & enhancement
                    c. Bug fixing`,
      icon: <Revision className="w-8 h-8" />,
    },
  ];

  const scrollingCards = [...Card2Data, ...Card2Data, ...Card2Data];

  return (
    <div className="px-7 bg-white pb-28 pt-10 relative overflow-hidden">
      <div className="relative -mb-10 tracking-wider text-black text-center" ref={headingRef}>
        <motion.p
          className="font-bold text-4xl"
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          How we work
        </motion.p>
        <motion.p
          className="text-4xl font-bold pt-4 pb-10"
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          Our Custom Software Development{" "}
          <span className="text-primaryBlue">
            <br /> Process
          </span>
        </motion.p>
      </div>

      <div className="relative overflow-hidden pb-3 pt-16">
        <div className="flex animate-scroll">
          {scrollingCards.map((slide, index) => (
            <div
              key={index}
              className="relative h-72 w-72 flex-shrink-0 card mx-4 
  backdrop-blur-lg bg-transparent 
  shadow-[0px_3px_8px_rgba(0,49,160,0.25)] 
  rounded-2xl p-5 duration-500 overflow-hidden 
  hover:shadow-[0px_6px_16px_rgba(0,49,160,0.35)] hover:scale-105 text-black"
            >
              {loaded && (
                <Particles
                  id={`particles-${index}`}
                  init={particlesInit}
                  options={{
                    background: { color: "transparent" },
                    fullScreen: { enable: false },
                    particles: {
                      number: {
                        value: 20,
                        density: { enable: true, area: 200 },
                      },
                      color: { value: "#000000" },
                      shape: { type: "circle" },
                      opacity: { value: 0.3, random: true },
                      size: { value: 2, random: true },
                      links: {
                        enable: true,
                        distance: 130,
                        color: "#000000",
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
                  className="absolute inset-0 w-full h-full pointer-events-none"
                />
              )}
              <div className="flex justify-between items-center z-50 px-2">
  <h2 className="text-xl font-bold">{slide.title}</h2>
  <div className="flex-shrink-0">{slide?.icon}</div>
</div>
              <p className="text-gray-600 pt-6 text-sm">
                {slide.description.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcess;
