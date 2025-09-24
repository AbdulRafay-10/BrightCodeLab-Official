import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import OptimizedImage from "../../components/OptimizedImage";
const OurTeamPopup = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamData = [
    {
      id: 1,
      name: "Awais Khan",
      role: "Founder",
      image: "/images/ourteam/Awais-Sir .jpg",
      bio: "Visionary leader with extensive experience in business development.",
      Description:
        "Awais Khan is a visionary leader with extensive experience in business development, driving innovation and growth in the tech industry.",
      skills:
        "Flutter, Dart, Node Js, Leadership, Strategic Planning, Business Development",
      imageStyle: "center 5%" // Custom styling for Awais
    },
    {
      id: 2,
      name: "Umair Marwat",
      role: "Co-Founder",
      image: "/images/ourteam/amir.jpeg",
      bio: "Innovative thinker driving company growth through tech.",
      Description:
        "Umair Marwat is an innovative thinker driving company growth through technology, with a focus on strategic development and market expansion.",
      skills: "React, Node Js, MongoDB, Express.js, SQL, HTML, CSS, Tailwind",
    },
    {
      id: 3,
      name: "Muhammad Talha",
      role: "Project Manager",
      image:
        "/images/ourteam/WhatsApp Image 2025-08-21 at 16.22.39_684c98c1.jpg",
      bio: "Project manager with a passion for delivering results.",
      Description:
        "Talha is skilled in overseeing complex projects from inception to completion and ensuring they meet quality standards.",
      skills: "Project Management, Agile, Leadership, Communication",
      imageStyle: "center 10%" // Custom styling for Talha
    },
    {
      id: 4,
      name: "Anees",
      role: "MERN Stack Developer",
      image:
        "/images/ourteam/WhatsApp Image 2025-08-21 at 15.45.09_ead2bf6b.jpg",
      bio: "Experienced MERN developer passionate about backend architecture.",
      Description:
        "Anees builds robust and efficient web applications with a focus on backend performance.",
      skills: "React, Node Js, MongoDB, Express.js, Tailwind",
      imageStyle: "center 25%" // Custom styling for Anees
    },
    {
      id: 5,
      name: "Ali Akbar",
      role: "MERN Stack Developer (France)",
      image: "/images/ourteam/ali.jpeg",
      bio: "Remote full stack developer with international experience.",
      Description:
        "Ali specializes in building scalable web applications using the MERN stack.",
      skills: "React, Node Js, MongoDB, Express.js, Tailwind",
    },
  ];

  return (
    <div className="bg-white p-10 min-h-screen">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black">
          Meet the team that makes the magic happen
        </h2>
        <p className="text-black">
          Meet our diverse team of world-class creators, designers, and problem solvers.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamData.map((member) => (
          <div key={member.id} className="group [perspective:1000px]">
            <div className="relative w-full h-80 duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front */}
              <div className="absolute w-full h-full rounded-xl overflow-hidden [backface-visibility:hidden] border border-gray-400">
                <OptimizedImage src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  style={member.imageStyle ? { objectPosition: member.imageStyle } : {}}
                />
                <div className="absolute bottom-0 p-4 bg-black/70 text-white w-full">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm">{member.role}</p>
                </div>
              </div>

              {/* Back */}
              <div className="absolute w-full h-full bg-white border border-blue-900 text-black rounded-xl p-6 flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <button
                  className="bg-white text-blue-800 border-blue-900 border px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedMember(member);
                  }}
                >
                  View <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-3xl w-full shadow-2xl relative z-50 max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                {/* Fixed image container with custom positioning */}
                <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-gray-200 shadow-lg flex-shrink-0">
                  <OptimizedImage src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                    style={selectedMember.imageStyle ? { objectPosition: selectedMember.imageStyle } : {}}
                  />
                </div>
                <div className="text-center md:text-left space-y-3">
                  <h3 className="text-3xl font-bold text-gray-800">
                    {selectedMember.name}
                  </h3>
                  <p className="text-lg text-primaryBlue font-semibold">
                    {selectedMember.role}
                  </p>
                  <p className="text-gray-600">{selectedMember.bio}</p>
                  <div className="text-sm text-gray-500 space-y-1 pt-3">
                    <p>
                      <strong>Description:</strong> {selectedMember.Description}
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 space-y-1 pt-3">
                    <p>
                      <strong>Skills:</strong> {selectedMember.skills}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#0f51db] rounded-full absolute top-4 right-4 w-8 h-8 text-center text-white">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="relative top-[-3px] right-0 text-white text-2xl"
                >
                  &times;
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OurTeamPopup;