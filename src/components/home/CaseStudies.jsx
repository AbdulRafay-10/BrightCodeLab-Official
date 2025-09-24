import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import ProjectCards from "../../pages/webDevelopment/ProjectCards";
import Cerbro from "../../assets/images/fitness app dashbored.webp";
import Twala from "../../assets/images/TwalaMeals.png";
import Hotal from "../../assets/images/Hotel-Booking-Web.png";
import Pet from "../../assets/images/Pet-App.png";
import Fitness from "../../assets/images/5-best-fitness-apps.jpg";
import Savo from "../../assets/images/WhatsApp Image 2025-08-16 at 01.56.38 (1).jpeg.jpg";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const [showAll, setShowAll] = useState(false);
  const videoRefs = useRef([]);

  const projects = [
    {
             title: "Fitness App",
             description: "Fitness App to Track Workouts, Monitor Progress, and Achieve Your Health Goals with Personalized Plans and Real-Time Analytics.",
             img: Fitness,
             // link: "https://www.jeep-safaris.com/",
             techStack: [
               { name: "Dart", url: "https://dart.dev/" },
               { name: "Node.js", url: "https://nodejs.org/" },
               { name: "MySQL", url: "https://www.mysql.com/" },
               { name: "Firebase", url: "https://firebase.google.com/" },
             ],
           },
     {
       title: "Fitness Dashboard",
       description:
         "A comprehensive fitness dashboard that tracks workouts, monitors progress, and provides personalized health insights.",
       img: Cerbro,
       category: "Web Development",
       techStack: [
         { name: "React", url: "https://react.dev/" },
         { name: "Node.js", url: "https://nodejs.org/" },
         { name: "MongoDB", url: "https://www.mongodb.com/" },
         { name: "Figma", url: "https://www.figma.com/" },
       ],
     },
     {
       title: "SAVO",
       description:
         "Entertainment App for Reels and Videos. Watch, Create, and Share Short Videos with Friends and the World.",
       img: Savo,
       // link: "https://www.jeep-safaris.com/",
       category: "App Development",
       techStack: [
         { name: "Flutter", url: "https://flutter.dev/" },
         { name: "Dart", url: "https://dart.dev/" },
         { name: "Firebase", url: "https://firebase.google.com/" },
         { name: "Figma", url: "https://www.figma.com/" },
       ],
     },
     {
       title: "TwalaMeals – Your Go-To Food Delivery App",
       description:
         " TwalaMeals brings your favorite meals to your doorstep with just a few taps! Order from top restaurants, enjoy fast delivery, and experience hassle-free online food ordering. Fresh, delicious, and always on time! 🍔🍕🍣",
       img: Twala,
       // link: "https://www.twalameals.com/welcome",
       category: "Web Development",
       techStack: [
         { name: "React", url: "https://react.dev/" },
         { name: "Node.js", url: "https://nodejs.org/" },
         { name: "MongoDB", url: "https://www.mongodb.com/" },
         { name: "Figma", url: "https://www.figma.com/" },
       ],
     },
       {
       title: "Hotel-Booking-Website",
       description:
         "Hotel Booking Website. Find and Book Hotels Worldwide with Ease. Compare Prices, Read Reviews, and Secure Your Stay Today.",
       img: Hotal,
       // link: "https://www.jeep-safaris.com/",
       category: "Web Development",
       techStack: [
         { name: "React", url: "https://react.dev/" },
         { name: "Node.js", url: "https://nodejs.org/" },
         { name: "MongoDB", url: "https://www.mongodb.com/" },
         { name: "Figma", url: "https://www.figma.com/" },
       ],
     },
       {
       title: "PET-App",
       description:
         "PET App for Pet Care. Find Tips, Products, and Services to Keep Your Pets Healthy and Happy.",
       img: Pet,
       // link: "https://www.jeep-safaris.com/",
       category: "App Development",
       techStack: [
         { name: "Flutter", url: "https://flutter.dev/" },
         { name: "Dart", url: "https://dart.dev/" },
         { name: "Firebase", url: "https://firebase.google.com/" },
         { name: "Figma", url: "https://www.figma.com/" },
       ],
     },
    
  ];

  const displayedCaseStudies = showAll ? projects : projects.slice(0, 6);


  return (
    <div className="w-full bg-white px-6 ">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-4xl font-bold text-black">
          Our Custom Software{" "}
          <span className="text-primaryBlue">
            <br /> Projects
          </span>
        </p>
      </motion.div>

      <div className=" w-full flex flex-wrap mx-auto">
        {displayedCaseStudies.map((card, index) => {
          if (!videoRefs.current[index]) {
            videoRefs.current[index] = React.createRef();
          }

          return (
            <motion.div
              key={index}
              className="rounded-md m-3 pb-6 lg:w-[48%] md:w-[46%] w-full"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <ProjectCards
                key={index}
                imageSrc={card.img}
                title={card.title}
                description={card.description}
                link={card.link} 
                className="!h-[400px] rounded-md text-black"
                techStack={card.techStack}
                showVisitButton={true}
              />
            </motion.div>
          );
        })}
      </div>

      <div className="text-center py-14">
        <Link
          to="/projects"
          className="px-6 py-3 bg-white border border-primaryBlue hover:text-white text-primaryBlue font-bold rounded-md hover:bg-blue-700 transition-all duration-300"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
};

export default CaseStudies;
