import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Breadcrumb from "../../pages/webDevelopment/BreadCrumb";
import { aboutPaths } from "../constants/Constant";

import OptimizedImage from "../OptimizedImage";
const AboutCompany = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };
  return (
    <>
      {/* <div className='relative text-white'>
                <OptimizedImage src="./src/assets/images/ AboutUs.webp" className="w-full" alt=" Image team member "
                / />

                <div className='absolute top-4 font-thin text-center w-full md:top-24 space-y-4 '>
                    <h1 className='md:text-5xl font-bold '>About Us </h1>
                    <p className=''>Bright Code Lab  Technologies is your trusted partner for comprehensive digital
                        transformation solutions. From developing user-centric <br /> applications
                        and optimizing customer experiences to harnessing the power of data
                        analytics and artificial intelligence, we <br /> empower organizations to
                        stay ahead in today's rapidly evolving digital landscape.
                    </p>
                </div>

            </div > */}
      <div
        className=" lg:h-[550px] md:h-[350px] h-[300px]"
        style={{
          backgroundImage: "url('/images/AboutUs.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // height: "calc(100vh -100px)",
          width: "100%",
        }}
      >
        <Particles
          init={particlesInit}
          options={{
            background: {
              color: "transparent",
            },
            style: {
              position: "absolute",
              top: "60px",
            },
            particles: {
              number: {
                value: 20,
                density: {
                  enable: true,
                  area: 150,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.5,
                random: true,
              },
              size: {
                value: 4,
                random: true,
              },
              links: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                  default: "bounce",
                },
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                repulse: {
                  distance: 50,
                  duration: 0.2,
                },
                push: {
                  quantity: 3,
                },
              },
            },
            detectRetina: true,
          }}
        />
        <div className="flex w-full justify-center items-center h-full flex-col">
          <h1 className="font-bold lg:text-4xl text-2xl text-white">
            About Us
          </h1>
          <Breadcrumb paths={aboutPaths} />
          <p className="text-white font-semibold mt-6 text-lg">
            Bright Code Lab Technologies is your trusted partner for
            comprehensive digital transformation solutions. From developing
            user-centric <br /> applications and optimizing customer experiences
            to harnessing the power of data analytics and artificial
            intelligence, we <br /> empower organizations to stay ahead in
            today's rapidly evolving digital landscape.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutCompany;
