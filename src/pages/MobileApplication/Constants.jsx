import developmentImage from "../../../public/images/developmentImage.webp"
import discoveryImage from "../../../public/images/discoveryImage.webp";
import development from "../../../public/images/development.svg";
import discovery from "../../../public/images/discovery.svg";
import testingImage from "../../../public/images/testing.webp";
import testing from "../../../public/images/testing.png";
import deployment from "../../../public/images/deployment.svg";
import deploymentImage from "../../../public/images/deployment.webp";
import launchSupportImage from "../../../public/images/launchSupport.webp";
import planingImage from "../../../public/images/planingImage.webp";
import conceptualization from "../../../public/images/conceptulization.png";
import launchSupport from "../../../public/images/launchSupport.svg";
export const moblieTechnologies = [
    { src: "/images/reactnative.png", alt: "react native" },
    { src: "/images/flutter.png", alt: "flutter" },
    { src: "/images/java.png", alt: "Java" },
    { src: "/images/kotlin.png", alt: "Kotlin" },
    { src: "/images/apple.png", alt: "Apple" },
    { src: "/images/swift.png", alt: "swift" },
  ];
  

  export const breadcrumbPathsMobileApp = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Mobile Development", href: "/app-development" },
  ];

  export const MobileApplicationHeading = {
    mainText: ["Delivering", "Through Custom"],
    highlightedParts: [{ text: "Excellence" }, { text: "Mobile Solutions" }],
  };
  export const mobileSteps = [
    {
      title: "Ideation",
      description: [
        "Understand Business Objectives & Specific Requirements.",
        "Conduct Market Research & Competitor Analysis.",
        "Identify Key Features & Functionalities.",
      ],
      image: discoveryImage,
      icon: discovery,
    },
    {
      title: "Conceptualization & Planning",
      description: [
        "Refine App Concept & Define Scope.",
        "Determine Development Platforms (Ios, Android, Cross-Platform).",
        "Create Project Plan, Timelines & Milestones.",
      ],
      image: planingImage,
      icon: conceptualization,
    },
    {
      title: "Development",
      description: [
        "Develop The Front-End & Back-End Components.",
        "Implement Desired Features, Integrations & APIs",
      ],
      image: developmentImage,
      icon: development,
    },
    {
      title: "Testing and Quality Assurance",
      description: [
        "Conduct Testing (Functionality, Usability, & Performance).",
        "Identify & Fix Bugs, Glitches, & Compatibility Issues.",
        "Validate App's Responsiveness On Various Devices & Screen Sizes.",
      ],
      image: testingImage,
      icon: testing,
    },
    {
      title: "Deployment",
      description: [
        "Prepare Release Strategy On Respective App Stores (App Store, Google Play, Etc.).",
        "Follow Submission Guidelines & Comply With Platform-Specific Requirements.",
        "Optimize App Listing With Relevant Keywords & Captivating Descriptions.",
      ],
      image: deploymentImage,
      icon: deployment,
    },
    {
      title: "Launch and Post-Launch Support",
      description: [
        " Monitor The App's Performance & User Feedback After The Launch.",
        "Gather Analytics Data To Gain Insights & Identify Areas For Improvement.",
        " Provide Ongoing Support, Maintenance, & Updates.",
      ],
      image: launchSupportImage,
      icon: launchSupport,
    },
  ];