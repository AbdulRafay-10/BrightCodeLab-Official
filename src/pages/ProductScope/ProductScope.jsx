import React from "react";
import TopSection from "../../components/TopSection/TopSection";
import {
  budget,
  dropdownOptions,
  productScopebreadcrumbPaths,
  productScopeHeading,
  productScopeSteps,
} from "../../components/constants/Constant";
import InnovativeApp from "../webDevelopment/InnovativeApp";
import Process from "../webDevelopment/WebProcess";
import OurTechnologies from "../webDevelopment/OurTechnologies";
import clipPathImage from "../../../public/images/clippathImage.webp"
import RelatedProjects from "../webDevelopment/RelatedProjects";
import Contact from "../../components/ContactUsComponent/Contact";
import ProductScopeDescription from "./ProductScopeDescription";
import LetsTalk from "../../components/LetsTalk/LetsTalk";
import { productScopeTechnologies } from "./Constants";

const ProductScope = () => {
  return (
    <div>
      <TopSection
        breadcrumbPaths={productScopebreadcrumbPaths}
        className="!lg:h-[450px]"
        heading="Product Scope"
      />
      <div className="w-full lg:pt-12 pt-8 bg-white">
        <InnovativeApp
          dynamicHeading={productScopeHeading}
          className="w-11/12"
          headingClassName="!max-w-[1070px]"
          descriptionClassName="!w-[68%]"
          description="Ever wondered what sets successful software products apart from the rest? It often begins with a crucial question: how well-defined is your product scope?"
        />
        <ProductScopeDescription />
      </div>
      <div className="bg-primaryBg py-8 w-full">
        <h1 className="text-white lg:text-[40px] w-full lg:px-8 md:px-6 px-2 md:text-3xl text-2xl font-bold">
          Product
          <span className="text-[#0066b3] ml-1 mr-1"> Scope Process</span>
        </h1>
        <Process steps={productScopeSteps} clipPathImage={clipPathImage} />
        <div className="w-full lg:px-8 md:px-6 px-2">
          <OurTechnologies
            title="Our Focus"
            highlightedText="Areas"
            technologies={productScopeTechnologies}
          />
        </div>
      </div>
      <RelatedProjects relatedProjects={[]}/>
      <div className="w-full mt-4">
       <Contact options={dropdownOptions} budget={budget}/>
      </div>
      <LetsTalk/>
    </div>
  )
}

export default ProductScope