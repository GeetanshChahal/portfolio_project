import {
  FaBook,
  FaBriefcase,
  FaDraftingCompass,
  FaHome,
  FaLaptopCode,
  FaRegUserCircle,
} from "react-icons/fa";
import { IconType } from "react-icons";

export const navItems: {
  id: number;
  name: string;
  link: string;
  icon: IconType;
}[] = [
  { id: 1, name: "", link: "", icon: FaHome },
  { id: 2, name: "About", link: "#about", icon: FaRegUserCircle },
  { id: 3, name: "Tech Stack", link: "#tech-stack", icon: FaLaptopCode },
  { id: 4, name: "Experience", link: "#work-experience", icon: FaBriefcase },
  { id: 5, name: "Blogs", link: "#blogs", icon: FaBook },
  { id: 6, name: "Projects", link: "#projects", icon: FaDraftingCompass },
];

export const gridItems = [
  {
    id: 1,
    title: "Happy exploring! Feel free to connect buddy!",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/avtar_enhanced.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "The time is always right to do what is right! 🚀",
    description: "~ Martin Luther King Jr.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Learning Now",
    description: "I constantly try to improve!",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    // spareImg: "/b4.svg",
    spareImg: "",
  },
  {
    id: 5,
    title: "Bachelor of Engineering",
    description: "CSE (9.65 CGPA)",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/chitkaraLogo-removebg-preview.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const blogs = [
  {
    id: 1,
    title: "Short-Circuit Evaluation in JS",
    des: "Short-Circuit Evaluation in JavaScript: Boost Performance and Simplify Logic!",
    img: "/short-circuit-update.png",
    iconLists: ["/javascript.svg", "/react.svg"],
    link: "https://dev.to/geetanshchahal/short-circuit-evaluation-in-javascript-boost-performance-and-simplify-logic-4m79",
  },
  {
    id: 2,
    title: "Decoding React's Name & Logo",
    des: "React: Unveiling the Story Behind Its Name and Iconic Logo!",
    img: "/react-logo-blog.png",
    iconLists: ["/javascript.svg", "/react.svg"],
    link: "https://dev.to/geetanshchahal/react-unveiling-the-story-behind-its-name-and-iconic-logo-56ho",
  },
];

export const projects = [
  {
    id: 1,
    title: "CUScholars",
    des: "A social media app for Chitkara Uni students to share memories and events.",
    img: "/cuscholars_image.png",
    iconLists: [
      "/javascript.svg",
      "/react.svg",
      "/mongodb-logo.svg",
      "/node-logo.svg",
      "npm-logo.svg",
    ],
    link: "https://github.com/GeetanshChahal/CUScholars",
  },
  {
    id: 2,
    title: "Auction Hunters",
    des: "An auction website with various functionalities and attractive GUI",
    img: "/auction_hunters.png",
    iconLists: ["/javascript.svg", "/react.svg", "firebase_logo.svg"],
    link: "https://github.com/GeetanshChahal/auction-hunters",
  },
];

export const testimonials = [
  {
    quote: "Collaborating ",
    name: "Michael Johnson",
    title: "Director",
  },
  {
    quote: "Collaborating partner.",
    name: "Michael Johnson",
    title: "Director am Technologies",
  },
  {
    quote: "out. If you're se partner.",
    name: "Michael Johnson",
    title: "Directorhnologies",
  },
  {
    quote: "s out. If you're seeking to el",
    name: "Michael Johnson",
    title: "Director of es",
  },
  {
    quote: "Colla.",
    name: "Michael Johnson",
    title: "Director nologies",
  },
];

export const companies = [
  {
    id: 1,
    img: "/react.svg",
    name: "reactjs",
  },
  {
    id: 2,
    img: "/javascript.svg",
    name: "javascript",
  },
  {
    id: 3,
    img: "/next-logo.svg",
    name: "nextjs",
  },
  {
    id: 4,
    img: "/typescript-logo.svg",
    name: "typescript",
  },
  {
    id: 5,
    img: "/redux-logo.svg",
    name: "redux",
  },
  {
    id: 7,
    img: "/node-logo.svg",
    name: "nodejs",
  },
  {
    id: 8,
    img: "/npm-logo.svg",
    name: "npm",
  },
  {
    id: 9,
    img: "/git-logo.svg",
    name: "git",
  },
  {
    id: 10,
    img: "/java-logo.svg",
    name: "java",
  },
  {
    id: 11,
    img: "/mongodb-logo.svg",
    name: "mongodb",
  },
  {
    id: 12,
    img: "/figma-logo.svg",
    name: "figma",
  },
  {
    id: 13,
    img: "/linux-logo.svg",
    name: "linux",
  },
  {
    id: 14,
    img: "/graphql-logo.svg",
    name: "graphql",
  },
  {
    id: 15,
    img: "/antd-logo.svg",
    name: "antd",
  },
  {
    id: 16,
    img: "/html-logo.svg",
    name: "html",
  },
  {
    id: 17,
    img: "/css-logo.svg",
    name: "css",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "SDE 1",
    desc: "Enhanced the Warehouse Management and Billing Systems using JS, ReactJS, NextJS, TypeScript, and AntDesign. Led the development and maintenance of the mobile app with React Native, integrating business logic.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    durationOfWork: "June/2024 - November/2024 (6 months)",
  },
  {
    id: 4,
    title: "SDE Intern",
    desc: "Worked on both frontend and backend of the Warehouse Management System using JS, ReactJS, TypeScript, React Native, Java, Spring Boot and AntDesign.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    durationOfWork: "July/2023 - May/2024 (11 months)",
  },
  // {
  //   id: 2,
  //   title: "Mobile App Dev - JSM Tech",
  //   desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp2.svg",
  // },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/GeetanshChahal",
  },
  {
    id: 2,
    img: "/devto.svg",
    url: "https://dev.to/geetanshchahal",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/geetansh-chahal-b7473b1b4/",
  },
];

export const loadingStates = [
  {
    text: "Turning ideas into code",
  },
  {
    text: "Designing responsive layouts",
  },
  {
    text: "Optimizing performance",
  },
  {
    text: "Showcasing my journey",
  },
  {
    text: "Welcome to my portfolio!",
  },
];
