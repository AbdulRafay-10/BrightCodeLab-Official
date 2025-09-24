import React from "react";
import { loadFull } from "tsparticles";
import Process from "../webDevelopment/WebProcess";
import OurTechnologies from "../webDevelopment/OurTechnologies";
import { budget, dropdownOptions } from "../../components/constants/Constant";
import InnovativeApp from "../webDevelopment/InnovativeApp";
import RelatedProjects from "../webDevelopment/RelatedProjects";
import Contact from "../../components/ContactUsComponent/Contact";
import clipPathImage from "../../../public/images/clippathImage.webp";
import AiEmbeddedDescription from "./AiEmbeddedDescription";
import TopSection from "../../components/TopSection/TopSection";
import LetsTalk from "../../components/LetsTalk/LetsTalk";
import {
  AIEmbeddedApplicationsPaths,
  AiEmbeddedDynamicHeading,
  aiEmbeddedSteps,
  aiEmbeddedTechnologies,
} from "./Constants";

const AiEmbededApplication = () => {
  return (
    <>
      <TopSection
        breadcrumbPaths={AIEmbeddedApplicationsPaths}
        heading="AI Embedded Applications"
      />
      <div className="">
        <div className="w-full lg:pt-12 pt-8 bg-white">
          <InnovativeApp
            dynamicHeading={AiEmbeddedDynamicHeading}
            className="!max-w-[1015px]"
            description="Seeking a smart application to automate tasks, cut costs, and enhance customer satisfaction? ZAPTA Technologies’ AI-embedded applications empower your products with AI capabilities and seamlessly integrate AI into your existing systems."
          />
          <AiEmbeddedDescription />
        </div>
        <div className="bg-primaryBg py-8 w-full">
          <h1 className="text-white lg:text-[40px] w-full lg:px-8 md:px-6 px-2 md:text-3xl text-2xl font-bold">
            AI Embedded Applications{" "}
            <span className="text-[#0066b3]">Process Guide </span>
          </h1>
          <Process steps={aiEmbeddedSteps} clipPathImage={clipPathImage} />
          <div className="w-full lg:px-8 md:px-6 px-2">
            <OurTechnologies
              title="Our Technologies for"
              highlightedText="AI Embedded Applications"
              technologies={aiEmbeddedTechnologies}
            />
          </div>
        </div>
        <RelatedProjects category="AI Development" />
        <div className="w-full mt-4">
          <Contact options={dropdownOptions} budget={budget} />
        </div>
        <LetsTalk />
      </div>
    </>
  );
};

export default AiEmbededApplication;
