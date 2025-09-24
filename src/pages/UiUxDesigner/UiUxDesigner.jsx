import {
  budget,
  dropdownOptions,
} from "../../components/constants/Constant";
import InnovativeApp from "../webDevelopment/InnovativeApp";
import RelatedProjects from "../webDevelopment/RelatedProjects";
import Contact from "../../components/ContactUsComponent/Contact";
import clipPathImage from "../../../public/images/clippathImage.webp";
import Process from "../webDevelopment/WebProcess";
import OurTechnologies from "../webDevelopment/OurTechnologies";
import UiUxDescription from "./UiUxDescription";
import TopSection from "../../components/TopSection/TopSection";
import LetsTalk from "../../components/LetsTalk/LetsTalk";
import {
  UiUxBreadcrumbPaths,
  UiUxDynamicHeading,
  uiuxSteps,
  uiUxTechnologies,
} from "./constant";

const UiUxDesigner = () => {
  return (
    <>
      <TopSection
        breadcrumbPaths={UiUxBreadcrumbPaths}
        heading="UI UX Design"
      />
      <div className="">
        <div className="w-full lg:pt-12 pt-8 bg-white">
          <InnovativeApp
            dynamicHeading={UiUxDynamicHeading}
            className="!max-w-[915px]"
            description="In search of building an extraordinary digital product? We specialize in developing user-centered and data-driven products that serve the best user experience and satisfaction."
          />
          <UiUxDescription />
        </div>
        <div className="bg-primaryBg py-8 w-full">
          <h1 className="text-white lg:text-[40px] w-full lg:px-8 md:px-6 px-2 md:text-3xl text-2xl font-bold">
            UX<span className="text-[#0066b3] ml-1"> Design Process</span>
          </h1>
          <Process steps={uiuxSteps} clipPathImage={clipPathImage} />
          <div className="w-full lg:px-8 md:px-6 px-2">
            <OurTechnologies
              title="Our Technologies"
              highlightedText="for Designing"
              technologies={uiUxTechnologies}
            />
          </div>
        </div>

        {/* ✅ Related Projects filtered by UI/UX Development */}
        <RelatedProjects category="UI/UX Development" />

        <div className="w-full mt-4">
          <Contact options={dropdownOptions} budget={budget} />
        </div>
        <LetsTalk />
      </div>
    </>
  );
};

export default UiUxDesigner;
