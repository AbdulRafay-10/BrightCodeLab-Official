import React from "react";
import TopSection from "../../components/TopSection/TopSection";
import {
  budget,
  dropdownOptions,
  relatedProjects,
} from "../../components/constants/Constant";
import MobileDescription from "./MobileDescription";
import InnovativeApp from "../webDevelopment/InnovativeApp";
import Process from "../webDevelopment/WebProcess";
import OurTechnologies from "../webDevelopment/OurTechnologies";
import clipPathImage from "../../../public/images/clippathImage.webp"
import RelatedProjects from "../webDevelopment/RelatedProjects";
import Contact from "../../components/ContactUsComponent/Contact";
import LetsTalk from "../../components/LetsTalk/LetsTalk";
import { breadcrumbPathsMobileApp, MobileApplicationHeading, mobileSteps, moblieTechnologies } from "./Constants";

const MobileApplication = () => {
  return (
    <div>
      <TopSection
        breadcrumbPaths={breadcrumbPathsMobileApp}
        className="!lg:h-[450px] "
        heading="Mobile Development"
      />
      <div className="w-full lg:pt-12 pt-8 bg-white">
        <InnovativeApp
          dynamicHeading={MobileApplicationHeading}
          className="lg:w-[55%]"
          headingClassName="!max-w-[670px]"
          description="We create seamless and cross-platform mobile experiences that redefine convenience and excitement, wherever you are."
        />
        <MobileDescription />
      </div>
      <div className="bg-primaryBg py-8 w-full">
        <h1 className="text-white lg:text-[40px] w-full lg:px-8 md:px-6 px-2 md:text-3xl text-2xl font-bold">
          Mobile
          <span className="text-[#0066b3] ml-1"> Development Process</span>
        </h1>
        <Process steps={mobileSteps} clipPathImage={clipPathImage} />
        <div className="w-full lg:px-8 md:px-6 px-2">
          <OurTechnologies
            title="Our Technologies for"
            highlightedText="Mobile Development"
            technologies={moblieTechnologies}
          />
        </div>
      </div>
      <RelatedProjects category="App Development" />
      <div className="w-full mt-4">
       <Contact options={dropdownOptions} budget={budget}/>
      </div>
      <LetsTalk/>
    </div>
  );
};

export default MobileApplication;
