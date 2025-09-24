import React from "react";
import TopSection from "../TopSection/TopSection";
import {
  budget,
  dropdownOptions,
  relatedProjects,
  servicesCrumbPaths,
} from "../constants/Constant";
import Contact from "../ContactUsComponent/Contact";
import RelatedProjects from "../../pages/webDevelopment/RelatedProjects";

const Services = ({}) => {
  return (
    <>
      <TopSection
        breadcrumbPaths={servicesCrumbPaths}
        heading="Services"
        description="Brightcodelab is a custom software design and development company offering a
                comprehensive range of innovative and AI powered solutions. Our expert team is well versed in Website
                development, Mobile application development, UI UX design, Quality assurance, MVP builder and Dedicated team
                services."
        descriptionClassName="!w-[74%]"
      />
      <div className="py-10">
        <RelatedProjects relatedProjects={relatedProjects} />
        <div className="w-full mt-4">
          <Contact options={dropdownOptions} budget={budget} />
        </div>
      </div>
    </>
  );
};

export default Services;
