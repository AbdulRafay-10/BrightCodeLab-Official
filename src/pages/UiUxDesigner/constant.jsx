import discoveryImage from "../../../public/images/discoveryImage.webp";
import discovery from "../../../public/images/discovery.svg";
import planingImage from "../../../public/images/planingImage.webp";
import userFlow from "../../../public/images/userflow.svg";
import developmentImage from "../../../public/images/developmentImage.webp";
import wireFrames from "../../../public/images/wireframes.svg";
import testingImage from "../../../public/images/testing.webp";
import muckups from "../../../public/images/muckups.svg";
import deploymentImage from "../../../public/images/deployment.webp";
import protoType from "../../../public/images/prototyping.svg";
import launchSupportImage from "../../../public/images/launchSupport.webp";
import usability from "../../../public/images/usability.svg";
export const uiUxTechnologies = [
    { src: "/images/pigma.png", alt: "pigma" },
    { src: "/images/photoshop.png", alt: "photoshop" },
    { src: "/images/illustrator.png", alt: "illustrator" },
    { src: "/images/xd.png", alt: "XD" },
    { src: "/images/invision.png", alt: "invision" },
    { src: "/images/webflow.png", alt: "webflow" },
  ];
  
  export const UiUxBreadcrumbPaths = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "UI UX Design", href: "/services/ui-ux-design" },
  ];
  export const UiUxDynamicHeading = {
    mainText: ["Redefine ", " ", "with", "Driven And", "UI UX"],
    highlightedParts: [
      { text: "", className: "" },
      { text: "Experiences" },
      { text: "Data" },
      {
        text: "User-Centered ",
        className: "text-primaryBlue lg:leading-[45px] leading-7",
      },
      { text: "" },
    ],
  };
  
  export const uiuxSteps = [
    {
      title: "Discovery (UX Research)",
      description: [
        " Research the business, audience & market.",
        " Conduct interviews, surveys & competitor analysis.",
        " Identify pain points, challenges & opportunities.",
      ],
      image: discoveryImage,
      icon: discovery,
    },
    {
      title: "User Flow",
      description: [
        " Map Out User Journeys & Interactions.",
        "Define Optimal Path & Guide Users.",
        "Create User Flows.",
      ],
      image: planingImage,
      icon: userFlow,
    },
    {
      title: "Wireframes",
      description: [
        "  Develop Low Fidelity Layouts.",
        "Outline Information Architecture & Content Placement.",
        "Iterate & Refine.",
      ],
      image: developmentImage,
      icon: wireFrames,
    },
    {
      title: "Mockups",
      description: [
        " Develop High Fidelity Visual Representations.",
        "  Select Color Schemes, Branding Elements, & Visual Hierarchy.",
        "  Realistic Preview Of Final Design.",
      ],
      image: testingImage,
      icon: muckups,
    },
    {
      title: "Prototyping",
      description: [
        " Build Interactive & Dynamic Prototypes.",
        "Test & Validate The Functionality.",
        "  Gather Feedback From Stakeholders & Users.",
      ],
      image: deploymentImage,
      icon: protoType,
    },
    {
      title: "Usability Testing",
      description: [
        "  Conduct Testing Sessions With Representative Users.",
        " Identify Usability Issues, Pain Points & Areas of Improvement.",
        "Implement Necessary Adjustments Based On User Feedback.",
      ],
      image: launchSupportImage,
      icon: usability,
    },
  ];
  