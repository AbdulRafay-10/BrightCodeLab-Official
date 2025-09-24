import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Description } from "@mui/icons-material";
import { skeletonClasses } from "@mui/material";

import OptimizedImage from "../OptimizedImage";
const OurTeamPopup = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedMember, setSelectedMember] = useState(null);

  const teamData = [
  {
    id: 1,
    name: "Awais Khan",
    role: "Chief Executive Officer",
    category: "Founders",
    image: "/images/ourteam/AwaisPFP.jpg",
    bio: "Visionary leader with expertise in full-stack app development.",
    Description : "Awais Khan is a visionary leader with expertise in full-stack app development, building innovative solutions and driving progress in the tech industry. As the founder of the company, he is committed to fostering a culture of excellence and teamwork, ensuring that the team works in alignment with the company’s mission and values. Awais’s strengths lie in development and execution, empowering the company to overcome challenges and capture opportunities in a competitive market.",
    skills: "Flutter  Dart  Node Js   Leadership Strategic Planning Business Development",
    imageStyle: "top center" // Show top of the image
  },
  {
    id: 23,
    name: "Mbangoje Jatamunua",
    role: "Co-Founder",
    category: "Founders",
    image: "/images/ourteam/mj.jpeg",
    bio: "Innovative thinker driving company growth through tech.",
    Description : "Mbangoje Jatamunua is a skilled AI and Technical Expert who creates innovative digital solutions.He specializes in Artificial Intelligence, Machine Learning, and automation.He transforms complex problems into smart and scalable solutions.His expertise helps our company deliver next-gen AI-powered products.",
    skills: "Flutter  Dart  Node Js   Leadership Strategic Planning Business Development",
    imageStyle: "object-position: center 5%" // Custom styling for Awais
  },
  {
    id: 2,
    name: "Umair Marwat",
    role: "Co-Founder",
    category: "Founders",
    image: "/images/ourteam/amir.jpeg",
    bio: "Innovative thinker driving company growth through tech.",
    Description: "Umair Marwat is an innovative thinker driving company growth through technology, with a focus on strategic development and market expansion.As a co-founder, he is dedicated to fostering a culture of creativity and excellence within the team, ensuring that the company remains at the forefront of technological advancements.Umair's expertise lies in identifying opportunities for innovation and leveraging them to create impactful solutions that benefit both the company and its clients.",
    skills : "React Node Js MongoDB Express.js SQL HTML CSS BoothSrap Tailwind",
  },
  {
    id: 18,
    name: "Muhammad Talha",
    role: "Project Manager",
    category: "Project Manager",
    image: "/images/ourteam/WhatsApp Image 2025-08-21 at 16.22.39_684c98c1.jpg",
    bio: "Project manager with a passion for delivering results.",
    Description: "Muhammad Talha is a project manager with a passion for delivering results, skilled in overseeing complex projects from inception to completion.He is dedicated to ensuring that projects are delivered on time, within scope, and to the highest quality standards.Talha's expertise lies in coordinating cross-functional teams and managing resources effectively to achieve project goals and drive business success.",
    skills: "Project Management Agile Methodologies Team Leadership Communication",
    imageStyle: "top center" // Show top of the image
  },
  {
    id: 3,
    name: "Ghayas Ud din",
    role: "Full Stack Web Developer",
    category: "Web developer",
    image: "/images/ourteam/ghayas (2).jpeg",
    bio: "Passionate full stack developer specializing in MERN stack.",
    Description: "Ghayas Ud din is a passionate full stack developer specializing in the MERN stack, dedicated to creating dynamic and responsive web applications.As a full stack web developer, he is skilled in both front-end and back-end technologies, ensuring seamless integration and functionality across platforms.Ghayas's expertise lies in developing applications that are not only visually appealing but also highly functional, providing users with an exceptional experience.",
    skills : "React Node Js MongoDB Express.js SQL HTML CSS BoothSrap Tailwind",
    imageStyle: "object-position: center 10%" // Custom styling for Ghayas
  },
  {
    id: 4,
    name: "Ali Akbar",
    role: "MERN Stack Developer (France)",
    category: "Web developer",
    image: "/images/ourteam/ali.jpeg",
    bio: "Remote full stack developer with international experience.",
    Description: "Ali Akbar is a remote full stack developer with international experience, skilled in building scalable web applications using the MERN stack.He is dedicated to delivering high-quality software solutions that meet the needs of diverse clients across the globe.Ali's expertise lies in creating applications that are not only functional but also user-friendly, ensuring a seamless experience for end-users.",
    skills: "React Node Js MongoDB Express.js SQL HTML CSS BoothSrap Tailwind",
  },
  {
    id: 5,
    name: "Anees",
    role: "MERN Stack Developer",
    category: "Web developer",
    image: "/images/ourteam/WhatsApp Image 2025-08-21 at 15.45.09_ead2bf6b.jpg",
    bio: "Experienced MERN developer passionate about backend architecture.",
    Description: "Anees is an experienced MERN developer passionate about backend architecture, focusing on building robust and efficient web applications.He is dedicated to creating scalable solutions that enhance user experiences and meet complex business requirements.Anees's expertise lies in developing applications that seamlessly integrate front-end and back-end technologies, ensuring optimal performance and functionality.",
    skills: "React Node Js MongoDB Express.js SQL HTML CSS BoothSrap Tailwind",
    imageStyle: "top center" // Show top of the image
  },
  {
    id: 6,
    name: "Aqib",
    role: "Full Stack Developer (France)",
    category: "Web developer",
    image: "/images/ourteam/aqib.jpeg",
    bio: "Dynamic full stack engineer with focus on scalability.",
    Description: "Aqib is a dynamic full stack engineer with a focus on scalability, adept at creating high-performance web applications that meet complex business needs.He is skilled in both front-end and back-end technologies, ensuring seamless user experiences and efficient server-side operations.Aqib's expertise lies in developing applications that can handle high traffic and complex functionalities, making him a valuable asset to any development team.",
    skills : "React Node Js MongoDB Express.js SQL HTML CSS BoothSrap Tailwind",
  },
  {
    id: 7,
    name: "Shayan",
    role: "App Developer",
    category: "App developer",
    image: "/images/ourteam/shayan.jpeg",
    bio: "Mobile developer passionate about user experience.",
    Description: "Shayan is a mobile developer passionate about user experience, dedicated to creating intuitive and engaging applications for both iOS and Android platforms.He is committed to delivering high-quality mobile solutions that enhance user engagement and satisfaction.Shayan's expertise lies in developing applications that seamlessly integrate with modern mobile technologies, ensuring optimal performance and usability.",
    skills: "Dart Flutter "
  },
  {
    id: 8,
    name: "Asad",
    role: "App Developer Leader",
    category: "App developer",
    image: "/images/ourteam/asad.png",
    bio: "Focused on native app development and performance optimization.",
    Description: "Asad is focused on native app development and performance optimization, ensuring that applications run smoothly and efficiently on mobile devices.He is dedicated to delivering high-quality mobile solutions that enhance user engagement and satisfaction.Asad's expertise lies in creating seamless user experiences through well-architected mobile applications that meet the demands of modern users.",
    skills : "Dart Flutter React Native Java  Swift",
    imageStyle: "top center " // Show top of the image
  },
   {
    id: 9,
    name: "Abdul Rafay",
    role: "Web Developer",
    category: "Web developer",
    image: "/images/ourteam/IMG_20250414_150226.jpg",
    bio: "Dynamic full stack engineer with focus on scalability",
    Description: "Abdul Rafay is a dynamic full stack engineer with a focus on scalability, skilled in creating high-performance web applications that meet the demands of modern users.He is adept at both front-end and back-end development, ensuring seamless integration and functionality across platforms.He is passionate about leveraging cutting-edge technologies to drive innovation and growth in the tech industry.",
    skills: "Next JS React Node Js MongoDB Express.js SQL HTML CSS BoothSrap Tailwind framer motion animation",
    imageStyle: "top center" // Show top of the image
  },
  {
    id: 10,
    name: "Aqib",
    role: "AI Developer",
    category: "AI",
    image: "/images/ourteam/aqib.jpeg",
    bio: "Exploring AI and deep learning solutions in web and app.",
    Description: "Aqib is an AI developer exploring AI and deep learning solutions in web and app development, committed to integrating intelligent systems into modern applications.He is passionate about leveraging artificial intelligence to enhance user experiences and drive innovation in software solutions.Aqib's expertise lies in developing AI-driven features that improve functionality and performance across various platforms.",
    skills : "Python TensorFlow PyTorch Machine Learning Deep Learning",
  },
  {
    id: 13,
    name: "Jawad Khan",
    role: "Web Developer",
    category: "Web developer",
    image: "/images/ourteam/WhatsApp Image 2025-05-28 at 16.04.01.jpeg.jpg",
    bio: "Dynamic full stack engineer with focus on scalability",
    Description: "Jawad Khan is a dynamic full stack engineer with a focus on scalability, experienced in developing robust web applications that can handle high traffic and complex functionalities.He is skilled in both front-end and back-end technologies, ensuring seamless user experiences and efficient server-side operations.As a web developer, Jawad is dedicated to creating high-performance applications that meet the evolving needs of users and businesses alike.",
    skills: "React Node Js MongoDB Express.js HTML CSS BoothSrap Vue axious gsap animation framer motion",
  },
  {
    id: 15,
    name: "Bilal",
    role: "Web Developer",
    category: "Web developer",
    image: "/images/ourteam/WhatsApp Image 2025-06-03 at 17.29.22_6c6a9d00.jpg",
    bio: "Dynamic full stack engineer with focus on scalability",
    Description: "Bilal is a dynamic full stack engineer with a focus on scalability, experienced in developing robust web applications that can handle high traffic and complex functionalities.He is skilled in both front-end and back-end technologies, ensuring seamless user experiences and efficient server-side operations.Bilal is dedicated to creating high-performance applications that meet the evolving needs of users and businesses alike.",
    skills : "React Vue Js MongoDB Express.js HTML CSS BoothSrap Vue axious ",
  },
  {
    id: 12,
    name: "Usama Marwat",
    role: "Marketing Manager (Doha,Qatar)",
    category: "Marketing",
    image: "/images/ourteam/UsamaKhanMarwat.jpg",
    bio: "Marketing expert leading campaigns in Qatar region.",
    Description: "Usama Marwat is a marketing expert leading campaigns in the Qatar region, specializing in digital marketing strategies and brand development.He is adept at leveraging market insights to drive engagement and growth for the company.As a marketing manager, Usama is committed to enhancing the company's presence and impact in the competitive landscape of Qatar.",
    skills: "Digital Marketing SEO Content Strategy Social Media Management",
  },
  {
    id: 11,
    name: "Mahnoor",
    role: "UI UX Designer",
    category: "Graphic Designer",
    image: "/images/ourteam/mahnoor.jpeg",
    bio: "User-focused design thinker and interface creator.",
    Description: "Mahnoor is a user-focused design thinker and interface creator, dedicated to crafting intuitive and visually appealing user experiences across digital platforms.As a UI UX designer, she combines creativity with usability principles to enhance user satisfaction and engagement.She is passionate about understanding user needs and translating them into effective design solutions that drive business success.",
    skills : "Figma Adobe XD Sketch InVision User Research ",
  },
  {
    id: 16,
    name: "Moazma Afzal",
    role: "Mobile App Developer",
    category: "App developer",
    image: "/images/ourteam/Moazma Afzal.jpg",
    bio: "Mobile app developer with a focus on user-centric design.",
    Description: "Moazma Afzal is a passionate Flutter Developer with hands-on experience in building beautiful, responsive, and high-performance mobile applications. I specialize in cross-platform development using Flutter and Dart and have a strong understanding of UI/UX design principles. Her primary focus is on creating user-friendly and engaging apps that provide a seamless and enjoyable experience for users.",
    skills: " Dart, Java, C++, HTML, CSS "
  },

   {
    id: 14,
    name: "Sohaib",
    role: "Business Development Manager",
    category: "Marketing",
    image: "/images/ourteam/sohaib.jpeg",
    bio: "Business strategist and growth hacker with a marketing edge.",
    Description: "Sohaib is a business strategist and growth hacker with a marketing edge, skilled in identifying opportunities and driving business success through innovative strategies.He is dedicated to expanding the company's market presence and enhancing brand visibility.As a business development manager, Sohaib focuses on building strategic partnerships and fostering relationships that lead to sustainable growth.",
    skills: "Business Strategy Market Research Sales Management",
  },
  {
    id: 17,
    name: "Hussain Shinwari",
    role: "Backend Web Developer",
    category: "Web developer",
    image: "/images/ourteam/WhatsApp Image 2025-06-19 at 15.56.17_0862dfae.jpg",
    bio: "Backend Web Developer with expertise in Node.js and Express.",
    Description: "Hussain is a skilled backend web developer with hands-on experience in building scalable APIs and robust server-side applications. He specializes in Node.js, Express, and MongoDB, and has a strong understanding of backend architecture and data management. Hussain is known for his problem-solving skills and ability to create efficient and secure backend systems.",
    skills: "Node.js, Express.js, MongoDB, RESTful APIs, JWT authentication",
  },
  {
    id: 19,
    name: "Maira Bibi",
    role: "WordPress Developer",
    category: "Wordpress Developer",
    image: "/images/ourteam/WhatsApp Image 2025-08-22 at 16.08.42_2058630f.jpg",
    bio: "WordPress Developer with expertise in Node.js and Express.",
    Description: "Maria is a dedicated WordPress Developer with 2.5 years of experience and a portfolio of 120+ completed projects. She is skilled in building all types of websites, including e-commerce and multi-vendor platforms, using Elementor, ACF, and Crocoblock. Her strong background in HTML, CSS, JavaScript, and design makes her capable of delivering creative and high-quality web solutions.",
    skills: "WordPress, Elementor, ACF, Crocoblock, WooCommerce, HTML, CSS, JavaScript, Figma to WordPress, Content Writing.",
  },
  {
    id: 20,
    name: "Sulaiman",
    role: "UI/UX Designer",
    category: "UI UX Designer",
    image: "/images/ourteam/WhatsApp Image 2025-08-26 at 18.36.29_480fb786.jpg",
    bio: "WordPress Developer with expertise in Node.js and Express.",
    Description: "Sulaiman is a UI/UX Designer with 2+ years of experience and a portfolio of 50+ completed projects. He is skilled in building all types of websites, including e-commerce and multi-vendor platforms, using Elementor, ACF, and Crocoblock and design makes him capable of delivering creative and high-quality web solutions.",
    skills: " Figma Adobe XD Sketch InVision User Research ",
  },
  {
    id: 21,
    name: "Khayam",
    role: "UI/UX Designer",
    category: "UI UX Designer",
    image: "/images/ourteam/WhatsApp Image 2025-08-26 at 18.36.29_2e327991.jpg",
    bio: "WordPress Developer with expertise in Node.js and Express.",
    Description: "He is a UI/UX Designer with 2.5 years of experience and a portfolio of 50+ completed projects. He is skilled in building all types of websites, including e-commerce and multi-vendor platforms, using Elementor, ACF, and Crocoblock and design makes him capable of delivering creative and high-quality web solutions.",
    skills: "Figma Adobe XD Sketch InVision User Research ",
  },
  {
    id: 22,
    name: "Azka",
    role: "Graphic Designer",
    category: "Graphic Designer",
    image: "/images/ourteam/WhatsApp Image 2025-09-12 at 13.27.29_fe0b70fe.jpg",
    bio: "WordPress Developer with expertise in Node.js and Express.",
    Description: "She is a Graphic Designer with 2.5 years of experience and a portfolio of 50+ completed projects. She is skilled in building all types of websites, including e-commerce and multi-vendor platforms, using Elementor, ACF, and Crocoblock and design makes her capable of delivering creative and high-quality web solutions.",
    skills: "Figma Adobe XD Sketch InVision User Research ",
  },
  ];

  const filteredTeam =
  activeTab === "all"
    ? teamData.filter(
        (member, index, self) =>
          index === self.findIndex((m) => m.name === member.name)
      )
    : teamData.filter((member) => member.category === activeTab);

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

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-8">
        {["all", "Founders", "Web developer", "App developer", "UI UX Designer", "AI", "Marketing" , "Project Manager" , "Wordpress Developer" , "Graphic Designer" ].map(
          (category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2 rounded-full border border-black font-semibold transition-colors duration-200
                ${
                  activeTab === category
                    ? "bg-blue-800 text-white"
                    : "bg-white text-black hover:bg-blue-800 hover:text-white"
                }`}
            >
              {category === "all" ? "View All" : category}
            </button>
          )
        )}
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredTeam.map((member) => (
          <div key={member.id} className="group [perspective:1000px]">
            <div className="relative w-full h-80 duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front */}
              <div className="absolute w-full h-full rounded-xl overflow-hidden [backface-visibility:hidden] border border-gray-400">
                <OptimizedImage
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  style={member.imageStyle
                    ? {
                        objectPosition: member.imageStyle.includes(":")
                          ? member.imageStyle.split(":")[1].trim()
                          : member.imageStyle,
                      }
                    : {}
                  }
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
                {/* Fixed image container with perfect circle and custom positioning */}
                <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-gray-200 shadow-lg flex-shrink-0">
                  <OptimizedImage
  src={selectedMember.image}
  alt={selectedMember.name}
  className="w-full h-full object-cover"
  style={selectedMember.imageStyle
    ? {
        objectPosition: selectedMember.imageStyle.includes(":")
          ? selectedMember.imageStyle.split(":")[1].trim()
          : selectedMember.imageStyle,
      }
    : {}
  }
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
                    <p><strong>Description:</strong> {selectedMember.Description}</p>
                  </div>
                  <div className="text-sm text-gray-500 space-y-1 pt-3">
                    <p><strong>Skills:</strong> {selectedMember.skills}</p>
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