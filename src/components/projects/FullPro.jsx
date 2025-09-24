// CaseStudies.jsx
import React, { useState } from "react";
import ProjectCards from "../../pages/webDevelopment/ProjectCards";
import { frame, motion } from "framer-motion";
import Rains from "../../assets/images/rains.png";
import RideZoid from "../../assets/images/RideZoid.png";
import Twala from "../../assets/images/TwalaMeals.png";
import HoreCaffe from "../../assets/images/HoreCaffe.png";
import TravelNorie from "../../assets/images/TravelNorie.png";
import SastaTicket from "../../assets/images/SastaTicker.png";
import DVCSales from "../../assets/images/DVCSales.png";
import JeepSafari from "../../assets/images/JeepSafari.png";
import Fitness from "../../assets/images/5-best-fitness-apps.jpg";
import Savo from "../../assets/images/WhatsApp Image 2025-08-16 at 01.56.38 (1).jpeg.jpg";
import frame2 from "../../assets/images/Frame 2.png";
import frame4 from "../../assets/images/Frame 4.png";
import Cerbro from "../../assets/images/fitness app dashbored.webp";
import Herbal from "../../assets/images/Herbal-App.png";
import Hotal from "../../assets/images/Hotel-Booking-Web.png";
import Makeup from "../../assets/images/Makeup-App.png";
import Mor from "../../assets/images/MOR-APP.png";
import Pet from "../../assets/images/Pet-App.png";
import Tushifa from "../../assets/images/Tushifa-website.png";
import Wallet from "../../assets/images/Wallet-App.png";
import Wedding from "../../assets/images/Wedding-App.png";
import Zikr from "../../assets/images/Zikr-App.png";

export const caseStudiesProjects = [
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

  // {
  //   title: "Horecaffe",
  //   description:
  //     "Modern and stylish furniture website for a seamless shopping experience.",
  //   img: HoreCaffe,
  //   // link: "https://www.horecaffe.com/",
  //   category: "Web Development",
  //   techStack: [
  //     { name: "React", url: "https://react.dev/" },
  //     { name: "Node.js", url: "https://nodejs.org/" },
  //     { name: "MongoDB", url: "https://www.mongodb.com/" },
  //     { name: "Figma", url: "https://www.figma.com/" },
  //   ],
  // },


  // {
  //   title: "Travel Norie",
  //   description:
  //     "A comprehensive travel and tourism website offering seamless trip planning and booking experiences.",
  //   img: TravelNorie,
  //   // link: "https://travelnoire.com/",
  //   category: "Web Development",
  //   techStack: [
  //     { name: "React", url: "https://react.dev/" },
  //     { name: "Node.js", url: "https://nodejs.org/" },
  //     { name: "MongoDB", url: "https://www.mongodb.com/" },
  //     { name: "Figma", url: "https://www.figma.com/" },
  //   ],
  // },


  // {
  //   title: "Sasta Ticket",
  //   description: "A funding platform focused on trading and investment...",
  //   img: SastaTicket,
  //   // link: "https://www.sastaticket.pk/",
  //   category: "Web Development",
  //   techStack: [
  //     { name: "React", url: "https://react.dev/" },
  //     { name: "Node.js", url: "https://nodejs.org/" },
  //     { name: "MongoDB", url: "https://www.mongodb.com/" },
  //     { name: "Figma", url: "https://www.figma.com/" },
  //   ],
  // },


  {
    title: "Tushifa",
    description:
      "A funding platform focused on trading and investment opportunities.",
    img: Tushifa,
    // link: "https://ridezoid.com",
    category: "Web Development",
    techStack: [
      { name: "React", url: "https://react.dev/" },
      { name: "Node.js", url: "https://nodejs.org/" },
      { name: "MongoDB", url: "https://www.mongodb.com/" },
      { name: "Figma", url: "https://www.figma.com/" },
    ],
  },

  // {
  //   title: "DVC Sales",
  //   description:
  //     "A funding platform for trading and investment, providing secure and innovative financial solutions.",
  //   img: DVCSales,
  //   // link: "https://dvcsales.com/",
  //   category: "Web Development",
  //   techStack: [
  //     { name: "React", url: "https://react.dev/" },
  //     { name: "Node.js", url: "https://nodejs.org/" },
  //     { name: "MongoDB", url: "https://www.mongodb.com/" },
  //     { name: "Figma", url: "https://www.figma.com/" },
  //   ],
  // },

  // {
  //   title: "Jeep Safari",
  //   description:
  //     "An adventurous travel and tourism website offering exciting jeep safari experiences in breathtaking destinations.",
  //   img: JeepSafari,
  //   // link: "https://www.jeep-safaris.com/",
  //   category: "Web Development",
  //   techStack: [
  //     { name: "React", url: "https://react.dev/" },
  //     { name: "Node.js", url: "https://nodejs.org/" },
  //     { name: "MongoDB", url: "https://www.mongodb.com/" },
  //     { name: "Figma", url: "https://www.figma.com/" },
  //   ],
  // },

//  {
//     title: "Premium Jackets & Brush Accessories | Ranis E-Commerce Store",
//     description:
//       "Discover high-quality jackets and premium brush accessories at Ranis. Shop the latest styles with top-notch materials for comfort and durability. Elevate your wardrobe today!",
//     img: Rains,
//     // link: "https://www.rains.com/",
//     category: "Web Development",
//     techStack: [
//       { name: "React", url: "https://react.dev/" },
//       { name: "Node.js", url: "https://nodejs.org/" },
//       { name: "MongoDB", url: "https://www.mongodb.com/" },
//       { name: "Figma", url: "https://www.figma.com/" },
//     ],
//   },

  // {
  //   title: "RideZoid – Smart & Reliable Ride-Hailing Service 🚖",
  //   description:
  //     "RideZoid connects riders and drivers seamlessly, offering a safe, affordable, and convenient transportation experience. Whether you're a passenger looking for a ride or a driver seeking earnings, RideZoid is your go-to app – fast, secure, and easy to use!",
  //   img: RideZoid,
  //   // link: "https://ridezoid.com",
  //   category: "Web Development",
  //   techStack: [
  //     { name: "React", url: "https://react.dev/" },
  //     { name: "Node.js", url: "https://nodejs.org/" },
  //     { name: "MongoDB", url: "https://www.mongodb.com/" },
  //     { name: "Figma", url: "https://www.figma.com/" },
  //   ],
  // },

  {
    title: "Herbal-App",
    description:
      "Herbal App for Herbal Products. Explore, Learn, and Shop Natural Remedies for Health and Wellness.",
    img: Herbal,
    // link: "https://www.jeep-safaris.com/",
    category: "App Development",
    techStack: [
     { name: "Flutter", url: "https://flutter.dev/" },
      { name: "Dart", url: "https://dart.dev/" },
      { name: "Firebase", url: "https://firebase.google.com/" },
      { name: "Figma", url: "https://www.figma.com/" },
    ],
  },

  // {
  //   title: "InvestME",
  //   description:
  //     "Investme offers smart insights and tools to help users make confident investment decisions.",
  //   img: Rains,
  //   // link: "https://ridezoid.com",
  //   category: "Web Development",
  //   techStack: [
  //     { name: "React", url: "https://react.dev/" },
  //     { name: "Node.js", url: "https://nodejs.org/" },
  //     { name: "MongoDB", url: "https://www.mongodb.com/" },
  //     { name: "Figma", url: "https://www.figma.com/" },
  //   ],
  // },

  {
    title: "Makeup-App",
    description:
      "Makeup App. Discover, Try, and Shop the Latest Makeup Products and Trends. Get Personalized Recommendations and Tutorials.",
    img: Makeup,
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
    title: "MOR-App",
    description:
      "MOR App for Online Shopping. Browse, Compare, and Purchase a Wide Range of Products with Secure Payment and Fast Delivery.",
    img: Mor,
    // link: "https://www.jeep-safaris.com/",
    category: "App Development",
    techStack: [
      { name: "React", url: "https://react.dev/" },
      { name: "Node.js", url: "https://nodejs.org/" },
      { name: "MongoDB", url: "https://www.mongodb.com/" },
      { name: "Figma", url: "https://www.figma.com/" },
    ],
  },

  // {
  //   title: "High-Performance Marketing Tools for Professionals",
  //   description:
  //     "Elevate your marketing game with Polar Pro's innovative and powerful tools designed to help businesses reach their full potential. From precision-targeted advertising solutions to data-driven analytics, Polar Pro offers top-notch products tailored to drive results. Whether you're looking to increase brand visibility, optimize campaigns, or analyze audience engagement, Polar Pro has everything you need to succeed. Explore our comprehensive range of marketing solutions and take your strategies to the next level today.",
  //   img: Rains,
  //   // link: "https://ridezoid.com",
  //   category: "Web Development",
  //   techStack: [
  //     { name: "React", url: "https://react.dev/" },
  //     { name: "Node.js", url: "https://nodejs.org/" },
  //     { name: "MongoDB", url: "https://www.mongodb.com/" },
  //     { name: "Figma", url: "https://www.figma.com/" },
  //   ],
  // },
  
  {
    title: "Wallet-App",
    description:
      "Wallet App for Personal Finance. Track Expenses, Set Budgets, and Manage Your Money with Ease.",
    img: Wallet,
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
    title: "Wedding-App",
    description:
      "Wedding App for Planning and Organizing Your Special Day. Manage Guest Lists, Schedules, and More.",
    img: Wedding,
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
    title: "Zikr-App",
    description:
      "Zikr App for Spiritual Growth. Access Daily Prayers, Reminders, and Inspirational Content to Enhance Your Faith Journey.",
    img: Zikr,
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

const CaseStudies = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeTab, setActiveTab] = useState("All");

  const categories = [
    "All",
    "Web Development",
    "AI Development",
    "App Development",
    "UI/UX Design",
  ];

  const filteredProjects =
    activeTab === "All"
      ? caseStudiesProjects
      : caseStudiesProjects.filter((project) => project.category === activeTab);

  const displayedCaseStudies = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <div className="w-full bg-white px-6">
      {/* Category Tabs */}
      <div className="flex justify-center flex-wrap gap-4 py-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveTab(cat);
              setShowAll(false);
            }}
            className={`px-4 py-2 rounded-full border transition duration-300 ${
              activeTab === cat
                ? "bg-[#0f51db] text-white border-[#0f51db]"
                : "bg-white text-[#0f51db] border-[#0f51db] hover:bg-[#0f51db] hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="w-full flex flex-wrap mx-auto">
        {displayedCaseStudies.map((card, index) => (
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
              className=" rounded-md"
              techStack={card.techStack}
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

export default CaseStudies;
