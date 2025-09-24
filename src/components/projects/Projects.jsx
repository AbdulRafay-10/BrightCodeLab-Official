// import React from 'react'
// import ProjectHead from './ProjectHead'
// import AllProjects from './AllProjects'
// import GetMessage from '../home/GetMessage'
// import Apply from '../home/Apply'

// const Projects = () => {
//     return (
//         <div>
//             <ProjectHead />
//             <AllProjects />
//             <GetMessage />
//             <Apply />

//         </div>
//     )
// }

// export default Projects

import React from "react";
import Contact from "../../components/ContactUsComponent/Contact";
import {
  budget,
  dropdownOptions,
  projectsCrumbPaths,
  relatedProjects,
} from "../../components/constants/Constant";
import TopSection from "../TopSection/TopSection";
import RelatedProjects from "../../pages/webDevelopment/RelatedProjects";
import LetsTalk from "../LetsTalk/LetsTalk";
import CaseStudies from "../home/CaseStudies";
import FullPro from "../../components/projects/FullPro";


const Projects = ({ }) => {

  
  return (
    <>
      <TopSection
        breadcrumbPaths={projectsCrumbPaths}
        heading="Projects"
        description="Explore our case studies to see how our
                cutting-edge technology solutions have helped businesses achieve their goals and overcome their challenges.
            "
        descriptionClassName="lg:!w-[53%] w-11/12"
      />
      <div className="">

        <FullPro />
        {/* <RelatedProjects relatedProjects={relatedProjects} /> */}
        <div className="w-full mt-4">
          <Contact options={dropdownOptions} budget={budget} />
        </div>
        <LetsTalk />
      </div>
    </>
  );
};

export default Projects;
