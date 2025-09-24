import discoveryImage from "../../../public/images/discoveryImage.webp";
import discovery from "../../../public/images/discovery.svg";
import planingImage from "../../../public/images/planingImage.webp";

import testing from "../../../public/images/testing.png";
import deployment from "../../../public/images/deployment.svg";
import deploymentImage from "../../../public/images/deployment.webp";
import launchSupportImage from "../../../public/images/launchSupport.webp";
import iotConectivity from "../../../public/images/iotconnectivity.webp";
import launchSupport from "../../../public/images/launchSupport.svg";
import iotConect from "../../../public/images/iotconnectivity.svg";
import blockChain from "../../../public/images/blockchain.svg";
import blockchainImage from "../../../public/images/blockchain.webp";
import immersive from "../../../public/images/immersive.svg";
import immersiveImage from "../../../public/images/immersive.webp";
import cyberImage from "../../../public/images/cyber.webp";
import cyber from "../../../public/images/cyber.svg";
import scalableImage from "../../../public/images/scalable.webp";
import scalable from "../../../public/images/scalable.svg";
import conceptualization from "../../../public/images/conceptulization.png";
import riskassesment from "../../../public/images/riskassesment.webp";
import resourcePlanning from "../../../public/images/resourceplanning.webp";
import breakDown from "../../../public/images/breakdown.svg";
import scope from "../../../public/images/scope.svg";
import scopeControl from "../../../public/images/scopecontrol.webp";
import scopecontrol from "../../../public/images/scopecontrol.svg";
import meeting from "../../../public/images/meeting.svg";
import teamMeeting from "../../../public/images/meeting.webp";
import scopeVerification from "../../../public/images/scope.webp";
import talentImage from "../../../public/images/talentImage.webp";
import onBoard from "../../../public/images/onboard.svg";
import onBoardImage from "../../../public/images/onBoard.webp";
import project1 from "../../assets/videos/Project3.mp4";
import project2 from "../../assets/videos/Project4.mp4";
import project3 from "../../assets/videos/Project5.mp4";
import project4 from "../../assets/videos/Project6.mp4";

export const servicesItems = [
  {
    path: "/web-development",
    icon: "/images/Nav web.svg",
    title: "Web Development",
    description:
      "Achieve business objectives and build a strong online presence by our web development solutions for customers.",
  },
  {
    title: "UI/UX Design",
    path: "/ui-ux-design",
    icon: "/images/NavUI UX.svg",
    description:
      "Creating engaging Ui Ux designs that enhance use experience and satisfication",
  },
  {
    title: "Mobile Application",
    path: "/mobile-development",
    icon: "/images/Nav mobile.svg",
    description:
      "Expert mobile app development for ios and android to boost your business",
  },
  // {
  //   title: "Quality Assurance",
  //   path: "/quality-assurance",
  //   icon: "./src/assets/images/Services5.svg",
  //   description:
  //     "Providing well-tested and bug-free web and mobile apps, ensuring high-quality and the best user experience.",
  // },
  {
    title: "AI/ML Application",
    path: "/ai-embedded-applications",
    icon: "/images/Nav AI.svg",
    description:
      "Developing innovative AI applications to transform your business processes",
  },
  {
    title: "Product Scope",
    path: "/product-scope",
    icon: "/images/Nav product scope.svg",
    description:
      "Define product to clarify features and functionalities for success",
  },
  {
    title: "Dedicated Teams",
    path: "/dedicated-teams",
    icon: "/images/Nav team.svg",
    description:
      "Hire dedicated Team to bring your vision to life with expert precision",
  },
];



export const productScopeSteps = [
  {
    title: "Initiation",
    description: [
      "Define Project Objectives & Goals.",
      "Identify Key Stakeholders & Their Roles.",
      "Conduct Initial Project Assessment.",
    ],
    image: discoveryImage,
    icon: discovery,
  },
  {
    title: "Scope Definition",
    description: [
      "Conduct Requirements Gathering With Stakeholders.",
      "Define Project Scope, (Deliverables, Features, Functionalities, & Constraints)",
      "Document Scope Statement With Boundaries And Objectives.",
    ],
    image: planingImage,
    icon: conceptualization,
  },
  {
    title: "Risk Assessment",
    description: [
      " Identify Potential Risks & Uncertainties.",
      "Assess Risks Based On Probability & Impact.",
      " Develop Risk Mitigation Strategies.",
    ],
    image: riskassesment,
    icon: testing,
  },
  {
    title: "Resource Planning",
    description: [
      " Determine Project Resource Requirements (Human Resources, Technology, & Budget).",
      "Allocate Resources Based On Project Scope & Timeline.",
      "Establish Communication Channels & Protocols.",
    ],
    image: resourcePlanning,
    icon: testing,
  },
  {
    title: "Work Breakdown Structure (WBS)",
    description: [
      " Create Hierarchical Breakdown Of Project Tasks & Activities.",
      " Define Task Dependencies & Sequencing.",
      " Assign Responsibilities & Set Milestones.",
    ],
    image: deploymentImage,
    icon: breakDown,
  },
  {
    title: "Scope Verification",
    description: [
      " Review Project Scope With Stakeholders.",
      "Obtain Formal Approval Of The Scope Statement & Wbs.",
      "Confirm Understanding Of Project Deliverables & Objectives.",
    ],
    image: scopeVerification,
    icon: scope,
  },
  {
    title: "Scope Control",
    description: [
      "  Monitor Project Progress Against The Defined Scope.",
      "Manage Changes Through A Formal Change Control Process.",
      "Document & Communicate Deviations From The Original Scope To Stakeholders",
    ],
    image: scopeControl,
    icon: scopecontrol,
  },
];
export const dedicatedTeamSteps = [
  {
    title: "A Quick Meeting",
    description: ["Scheduling a quick meeting.", "Discuss the Project."],
    image: teamMeeting,
    icon: meeting,
  },
  {
    title: "Talent Selection",
    description: ["Get a pool of desired experts.", "Choose and interview."],
    image: talentImage,
    icon: conceptualization,
  },
  {
    title: "Onboarding and Collaboration",
    description: [
      " Onboard.",
      "Project execution.",
      " Get regular progress updates.",
    ],
    image: onBoardImage,
    icon: onBoard,
  },
];

export const projectsCrumbPaths = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
];
export const servicesCrumbPaths = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
];
export const teamCrumbPaths = [
  { label: "Home", href: "/" },
  { label: "Team", href: "/team" },
];
export const productScopebreadcrumbPaths = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Product Scope", href: "/product-scope" },
];
export const dedicatedTeamsbreadcrumbPaths = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Dedicated Teams", href: "/dedicated-teams" },
];
export const aboutUscrumbPaths = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
];

export const aboutPaths = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
];

export const productScopeHeading = {
  mainText: [
    "Lay the",
    "for your next",
    "software",
    "with our precisely defined project",
  ],
  highlightedParts: [
    { text: "groundwork" },
    { text: "groundbreaking" },
    { text: "product" },
    { text: "Scope" },
  ],
};

export const dedicatedTeamsHeading = {
  mainText: ["Unlimited ", "Unlimited", "with You,"],
  highlightedParts: [
    { text: "Support," },
    { text: "Possibilities: Partnering" },
    { text: "Day and Night" },
  ],
};

export const relatedProjects = [
  {
    videoSrc: project1,
    title: "Card Title 1",
    description: "This is a description for card 1.",
    
  },
  {
    videoSrc: project2,
    title: "Card Title 2",
    description: "This is a description for card 2.",
  },
  {
    videoSrc: project3,
    title: "Card Title 3",
    description: "This is a description for card 3.",
  },
  {
    videoSrc: project4,
    title: "Card Title 4",
    description: "This is a description for card 4.",
  },
];

export const dropdownOptions = [
  { label: "Web Development", value: "WebDevelopment" },
  { label: "UI UX Design", value: "ui/ux Design" },
  { label: "Mobile Development", value: "mpbile development" },
  { label: "AI/ML Development", value: "ai/ml development" },
];
export const budget = [
  { label: "> 10000 USD", value: "> 10000 USD" },
  { label: "10000 USD - 20000 USD", value: "10000 USD - 20000 USD" },
  { label: "20000 USD - 50000 USD", value: "20000 USD - 50000 USD" },
  { label: "50000 USD - 100000 USD", value: "50000 USD - 100000 USD" },
  { label: "< 100000 USD", value: "< 100000 USD" },
];

export const PhoneNumberRegex = /^\+?[1-9]\d{1,14}$/;

