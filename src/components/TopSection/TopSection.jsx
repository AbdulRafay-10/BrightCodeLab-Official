import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Breadcrumb from "../../pages/webDevelopment/BreadCrumb";

const TopSection = ({
  className = "",
  breadcrumbPaths,
  heading,
  description = "",
  descriptionClassName = "",
}) => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };
  return (
    <div
      className={` lg:h-[550px] md:h-[350px] h-[300px] ${className}`}
      style={{
        // backgroundImage: `url('/images/AboutUs.webp')`,
        backgroundColor: "#012842",
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
          fpsLimit: 90,
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
        <h1 className="font-bold lg:text-4xl text-2xl text-white">{heading}</h1>
        <Breadcrumb paths={breadcrumbPaths} />
        <p
          className={`lg:text-lg text-sm lg:font-bold font-medium text-center lg:w-[85%] w-[95%] pt-6 text-white ${descriptionClassName}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default TopSection;
