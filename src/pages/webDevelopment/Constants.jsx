
import discoveryImage from "../../../public/images/discoveryImage.webp";
import discovery from "../../../public/images/discovery.svg";
import planingImage from "../../../public/images/planingImage.webp";
import strategyImage from "../../../public/images/planingStrategy.png";
import developmentImage from "../../../public/images/developmentImage.webp";
import development from "../../../public/images/development.svg";
import testingImage from "../../../public/images/testing.webp";
import testing from "../../../public/images/testing.png";
import deployment from "../../../public/images/deployment.svg";
import deploymentImage from "../../../public/images/deployment.webp";
import launchSupportImage from "../../../public/images/launchSupport.webp";
import launchSupport from "../../../public/images/launchSupport.svg";
export const webTechnologies = [
  { src: "/images/Technology27.png", alt: "Technology 1" },
  { src: "/images/Technology30.png", alt: "Technology 2" },
  { src: "/images/Technology31.png", alt: "Technology 3" },
  { src: "/images/Technology26.png", alt: "Technology 4" },
  { src: "/images/Technology25.png", alt: "Technology 5" },
  { src: "/images/angular.png", alt: "angular" },
  { src: "/images/nest.png", alt: "nest" },
  { src: "/images/express.png", alt: "express" },
];

export const breadcrumbPaths = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Web Development", href: "/web-development" },
];
export const WebDevelopmentDynamicHeading = {
  mainText: ["Build An", "Web App To"],
  highlightedParts: [{ text: "Innovative" }, { text: "Grow Your Business" }],
};
export const websteps = [
  {
    title: "Discovery",
    description: [
      "Understand Business Goals & Requirements.",
      "Conduct Research & Gather Essential Insights.",
      "Identify Key Opportunities & Challenges.",
    ],
    image: discoveryImage,
    icon: discovery,
  },
  {
    title: "Planning & Strategy",
    description: [
      "Define Project Scope, Objectives & Deliverables.",
      "Develop Strategic Roadmap For Development.",
      "Determine Optimal Technology Stack & Frameworks.",
    ],
    image: planingImage,
    icon: strategyImage,
  },
  {
    title: "Development",
    description: [
      "Develop The Front-End & Back-End Components.",
      "Implement Necessary Features, Functionality & Integrations.",
    ],
    image: developmentImage,
    icon: development,
  },
  {
    title: "Testing and Quality Assurance",
    description: [
      "Conduct Rigorous Testing & Ensure Performance.",
      "Identify And Fix Bugs, Errors, Or Inconsistencies.",
      "Perform Compatibility Testing (Multiple Devices, Browsers And Platforms).",
    ],
    image: testingImage,
    icon: testing,
  },
  {
    title: "Deployment",
    description: [
      "  Prepare Web Application For Deployment.",
      "  Configure Servers, Databases & Hosting Environments.",
      "  Ensure Seamless Deployment & Proper Functioning.",
    ],
    image: deploymentImage,
    icon: deployment,
  },
  {
    title: "Launch and Post-Launch Support",
    description: [
      " Deploy Web Application To Live Environment.",
      " Monitor Application's Performance & Address Issues.",
      "  Provide Support, Maintenance & Updates As Needed.",
    ],
    image: launchSupportImage,
    icon: launchSupport,
  },
];