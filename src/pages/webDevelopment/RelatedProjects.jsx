import React, { useState } from "react";
import ProjectCards from "../../pages/webDevelopment/ProjectCards";
import { motion } from "framer-motion";
import { caseStudiesProjects } from "../../components/projects/FullPro"; // <-- import from CaseStudies

const RelatedProjects = ({ category = "Web Development" }) => {
  const [showAll, setShowAll] = useState(false);

  // ✅ Filter from caseStudiesProjects
  const filteredProjects = caseStudiesProjects.filter(
    (project) => project.category === category
  );

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  return (
    <div className="w-full bg-white px-6">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-[40px] font-bold px-4 pt-8 pb-5">
          Related <span className="text-primaryBlue">Projects</span>
        </h1>
      </div>

      {/* Cards */}
      <div className="cursor-pointer w-full flex flex-wrap mx-auto">
        {displayedProjects.map((card, index) => (
          <motion.div
            key={index}
            className="rounded-md m-3 pb-6 lg:w-[48%] md:w-[46%] w-full"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <ProjectCards
              imageSrc={card.img}
              title={card.title}
              description={card.description}
              link={card.link}
              className="!h-[400px] rounded-md"
              showVisitButton={true}
            />
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      {filteredProjects.length > 4 && (
        <div className="text-center py-14">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#0f51db] border border-customBlue text-white rounded-md h-10 w-32 hover:bg-white transition duration-[0.5s] hover:text-customBlue"
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default RelatedProjects;
