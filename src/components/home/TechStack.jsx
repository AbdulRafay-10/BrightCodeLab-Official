import React from "react";
import OptimizedImage from "../OptimizedImage";

// ✅ Import all images at the top
import reactBlue from "../../assets/images/reactblue.png";
import node from "../../assets/images/js.png";
import next from "../../assets/images/n.png";
import angular from "../../assets/images/angular.png";
import express from "../../assets/images/ex1.png";
import vue from "../../assets/images/v.png";
import javascript from "../../assets/images/js_new.png";
import typescript from "../../assets/images/tsnew.png";
import graphql from "../../assets/images/sequel.png";
import reactNative from "../../assets/images/reactblue.png"; // same as React.js
import flutter from "../../assets/images/flutter.png";
import dotnet from "../../assets/images/dotnet-1.png";
import figma from "../../assets/images/figma.png";
import wordpress from "../../assets/images/wp.png";
import aws from "../../assets/images/aws.png";
import postgresql from "../../assets/images/postgresql-1.png";
import mysql from "../../assets/images/mysql.png";
import mongo from "../../assets/images/mongo.png";
import { motion, useInView } from "framer-motion";

// ✅ Build your technologies array
const technologies = [
  { name: "React.js", src: reactBlue },
  { name: "Node.js", src: node },
  { name: "Next.js", src: next },
  { name: "Angular", src: angular },
  { name: "Express.js", src: express },
  { name: "Vue.js", src: vue },
  { name: "JavaScript", src: javascript },
  { name: "TypeScript", src: typescript },
  { name: "GraphQL", src: graphql },
  { name: "React Native", src: reactNative },
  { name: "Flutter", src: flutter },
  { name: ".NET Core", src: dotnet },
  { name: "Figma", src: figma },
  { name: "WordPress", src: wordpress },
  { name: "AWS", src: aws },
  { name: "PostgreSQL", src: postgresql },
  { name: "MySQL", src: mysql },
  { name: "MongoDB", src: mongo },
];

export default function TechnicalForte() {
  const headingRef = React.useRef(null);
  const isInView = useInView(headingRef, { amount: 0.2, once: false });
  return (
    <section className="w-full max-w-full mx-auto  bg-[#fefefe]">
      <div className="relative text-4xl -mb-10 mb-6 tracking-wider text-black text-center" ref={headingRef}>
        <motion.p
          className="font-bold text-4xl"
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Our Tech <span className="text-primaryBlue">Stacks</span> 
        </motion.p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 px-8 pb-16">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center group cursor-pointer transition-transform duration-200 hover:scale-105"
          >
            <div className="group-hover:bg-white group-hover:shadow-md p-6 rounded-md transition-all duration-200">
              <img
                src={tech.src}
                alt={`${tech.name} logo`}
                className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain"
              />
              <span className="block text-sm md:text-base text-muted-foreground text-center font-medium mt-2">
                {tech.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
