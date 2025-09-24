import React from "react";
import BrightCodeLab from "./BrightCodeLab";
import OurMission from "./OurMission";
import CoreValues from "./CoreValues";
import OurVision from "./OurVision";
import Work from "./Work";
import Contact from "../ContactUsComponent/Contact";
import {
  aboutUscrumbPaths,
  budget,
  dropdownOptions,
} from "../constants/Constant";
import TopSection from "../TopSection/TopSection";

const AboutUs = () => {
  return (
    <div>
      {/* <AboutCompany /> */}
      <TopSection
        breadcrumbPaths={aboutUscrumbPaths}
        className="!h-[calc(100vh-100px)]"
        heading={"About Us"}
        description="  Brightcodelab is your trusted partner for comprehensive digital
          transformation solutions. From developing user-centric applications
          and optimizing customer experiences to harnessing the power of data
          analytics and artificial intelligence, we empower organizations to
          stay ahead in today's rapidly evolving digital landscape"
      />
      <BrightCodeLab />
      <OurMission />
      <CoreValues />
      <OurVision />
      <Work />
      {/* <GetMessage /> */}
      {/* <Apply /> */}
      <div className="w-full mt-4">
        <Contact options={dropdownOptions} budget={budget} />
      </div>
    </div>
  );
};

export default AboutUs;
