import React from "react";
import TopSection from "../../components/TopSection/TopSection";
import {
  budget,
  dedicatedTeamsbreadcrumbPaths,
  dedicatedTeamsHeading,
  dedicatedTeamSteps,
  dropdownOptions,
} from "../../components/constants/Constant";
import InnovativeApp from "../webDevelopment/InnovativeApp";
import Process from "../webDevelopment/WebProcess";
import OurTechnologies from "../webDevelopment/OurTechnologies";
import clipPathImage from "../../../public/images/clippathImage.webp";
import OurTeamSection from "./OurTeamSection";

import Contact from "../../components/ContactUsComponent/Contact";
import DedicatedTeamsDescription from "./DedicatedTeamsDescription";
import { dedicatedTeamsTechnologies } from "./Constants";
import LetsTalk from "../../components/LetsTalk/LetsTalk";

const DedicatedTeams = () => {
  return (
    <div>
      <TopSection
        breadcrumbPaths={dedicatedTeamsbreadcrumbPaths}
        className="!lg:h-[450px]"
        heading={"Dedicated Teams"}
      />
      <div className="w-full lg:pt-12 pt-8 bg-white">
        <InnovativeApp
          dynamicHeading={dedicatedTeamsHeading}
          className="w-11/12"
          headingClassName="!max-w-[880px]"
          descriptionClassName="lg:!w-[57%]"
          description="We partner with you to elevate your brand with stunning visuals, intuitive experiences, and a dedicated team of designers, developers, and engineers available 24/7."
        />
        <DedicatedTeamsDescription />
      </div>
      <div className="bg-primaryBg py-8 w-full">
        <h1 className="text-white lg:text-[40px] w-full lg:px-8 md:px-6 px-2 md:text-3xl text-2xl font-bold">
          Dedicated
          <span className="text-[#0066b3] ml-1 mr-1"> Team Process</span>
        </h1>
        <Process steps={dedicatedTeamSteps} clipPathImage={clipPathImage} />
        <div className="w-full lg:px-8 md:px-6 px-2">
          <OurTechnologies
            title="Our Focus"
            highlightedText="Areas"
            technologies={dedicatedTeamsTechnologies}
          />
        </div>
      </div>
      <OurTeamSection />
      <div className="w-full mt-4">
        <Contact options={dropdownOptions} budget={budget} />
      </div>
      <LetsTalk/>
    </div>
  );
};

export default DedicatedTeams;
