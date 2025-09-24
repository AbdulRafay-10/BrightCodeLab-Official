import React from "react";

import InnovativeApp from "./InnovativeApp";
import RelatedProjects from "./RelatedProjects";
import Contact from "../../components/ContactUsComponent/Contact";
import {
  budget,
  dropdownOptions,
  relatedProjects,
} from "../../components/constants/Constant";
import clipPathImage from "../../../public/images/clippathImage.webp";
import Process from "./WebProcess";
import OurTechnologies from "./OurTechnologies";
import WebDescription from "./WebDescription";
import TopSection from "../../components/TopSection/TopSection";
import LetsTalk from "../../components/LetsTalk/LetsTalk";
import {
  breadcrumbPaths,
  WebDevelopmentDynamicHeading,
  websteps,
  webTechnologies,
} from "./Constants";

const WebDevelopment = () => {
  return (
    <>
      <TopSection breadcrumbPaths={breadcrumbPaths} heading="Web Development" />
      <div className="">
        {/* <InnovativeApp/> */}
        <div className="w-full lg:pt-12 pt-8 bg-white">
          <InnovativeApp
            dynamicHeading={WebDevelopmentDynamicHeading}
            className="!max-w-[770px]"
            description="We build responsive, functional, scalable web apps that meet your business goals and user needs. We specialize in innovative, customized web apps that align with your strategy."
          />
          <WebDescription />
        </div>
        <div className="bg-primaryBg py-8 w-full">
          {/* <WebProcess/> */}
          <h1 className="text-white lg:text-[40px] w-full lg:px-8 md:px-6 px-2 md:text-3xl text-2xl font-bold">
            Web<span className="text-[#0066b3] ml-1">Development Process</span>
          </h1>
          <Process steps={websteps} clipPathImage={clipPathImage} />
          <div className="w-full lg:px-8 md:px-6 px-2">
            <OurTechnologies
              technologies={webTechnologies}
              title="Our Technologies for"
              highlightedText="Web Development"
            />
          </div>
        </div>
        <RelatedProjects relatedProjects={relatedProjects} />

        <div className="w-full mt-4">
          <Contact options={dropdownOptions} budget={budget} />
        </div>
        <LetsTalk />
      </div>
    </>
  );
};

export default WebDevelopment;
