
import OurTeam from './OurTeam'

import React from "react";
import {
  teamCrumbPaths,
} from "../constants/Constant";
import Contact from "../ContactUsComponent/Contact";
import RelatedProjects from "../../pages/webDevelopment/RelatedProjects";
import TopSection from "../TopSection/TopSection";

const Team = ({}) => {
  return (
    <>
      <TopSection
        breadcrumbPaths={teamCrumbPaths}
        heading="Team"
        description="We are a passionate and dedicated team, committed to innovation and excellence, with
                    our strength lying in collaboration, creativity, and achieving outstanding results together."
        descriptionClassName="!w-[74%]"
      />
         <OurTeam />
    </>
  );
};

export default Team;
