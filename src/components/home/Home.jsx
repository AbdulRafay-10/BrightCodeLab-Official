import React from "react";
import HomeImg from "./HomeImg";
import OurServices from "./OurServices";
import OurServicesText from "./OurServicesText";
import CEOmessage from "./CEOmessage";
import DevelopmentProcess from "./DevelopmentProcess";
import CaseStudies from "./CaseStudies";
import Testimonials from "./Testimonials";
import Contact from "../ContactUsComponent/Contact";
import TechStack from "./TechStack";
import { budget, dropdownOptions } from "../constants/Constant";
import LetsTalk from "../LetsTalk/LetsTalk";

const Home = () => {
  return (
    <div>
      <HomeImg />
      <OurServicesText />
      <OurServices />
      {/* <CEOmessage /> */}
      <TechStack />
      <DevelopmentProcess />
      <CaseStudies />
      <Testimonials />
      <Contact options={dropdownOptions} budget={budget} />
      <LetsTalk />
    </div>
  );
};

export default Home;
