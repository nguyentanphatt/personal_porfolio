import {
  animationLottie,
  expressIcon,
  framerIcon,
  javascriptIcon,
  Moon,
  nextIcon,
  nodeIcon,
  performanceLottie,
  reactIcon,
  responsiveLottie,
  Rocket,
  Sparkle,
  springIcon,
  StarFive,
  StarFour,
} from "./image";
import { Project01, Project02, Project03 } from "@/components/ProjectCard";

export const tech01 = [
  {
    id: 1,
    name: "Reactjs",
    image: reactIcon,
  },
  {
    id: 2,
    name: "React Native",
    image: reactIcon,
  },
  {
    id: 3,
    name: "Nextjs",
    image: nextIcon,
  },
  {
    id: 4,
    name: "Framer Motion",
    image: framerIcon,
  },
];

export const tech02 = [
  {
    id: 1,
    name: "Spring Boot",
    image: springIcon,
  },
  {
    id: 2,
    name: "Nodejs",
    image: nodeIcon,
  },
  {
    id: 3,
    name: "Javascript",
    image: javascriptIcon,
  },
  {
    id: 4,
    name: "Expressjs",
    image: expressIcon,
  },
];

export const techCardData = [
  {
    id: 1,
    bgColor: "bg-[#4580CC]",
    title: "Responsive",
    content:
      "I build websites that look great on any device. A responsive design ensures your website adapts to all screen sizes, providing the best user experience across desktops, tablets, and mobile phones",
    lottie: responsiveLottie,
  },
  {
    id: 2,
    bgColor: "bg-[#386CB0]",
    title: "Animation",
    content:
      "I create smooth and engaging animations to enhance user interactions. From subtle hover effects to complex motion graphics, animations make your website more dynamic and interactive.",
    lottie: animationLottie,
  },
  {
    id: 3,
    bgColor: "bg-[#2D4F80]",
    title: "Performance Optimization",
    content:
      "I optimize websites for speed and efficiency. Fast-loading pages improve user experience and SEO rankings, ensuring visitors stay engaged and conversions increase.",
    lottie: performanceLottie,
  },
];

export const tapeData = [
  {
    id: 1,
    content: "Responsive",
    icon: Rocket,
  },
  {
    id: 2,
    content: "Animation",
    icon: Sparkle,
  },
  {
    id: 3,
    content: "Optimized",
    icon: StarFive,
  },
  {
    id: 4,
    content: "Performance",
    icon: StarFour,
  },
  {
    id: 5,
    content: "Accessibility",
    icon: Moon,
  },
];

export const features = [
  {
    id: "Project01",
    project: Project01,
    title: "Valimar - Game Shop",
    description:
      "A modern and responsive e-commerce platform for purchasing video games, designed to provide a seamless shopping experience across mobile, tablet, and desktop.",
    link: "https://valimar-e-commerce-frontend.vercel.app/",
    tech: ["NextJS", "ExpressJS", "Prisma", "Mysql"],
  },
  {
    id: "Project02",
    project: Project02,
    title: "Layers - SaaS Landing Page",
    description:
      "A modern, high-performance landing page designed for Layers, a SaaS product aimed at streamlining the creative process. The page highlights the product’s value proposition with a sleek UI, engaging typography, and a strong call-to-action.",
    link: "https://layers-landing-page-one.vercel.app/",
    tech: ["NextJS", "Framer Motion"],
  },
  {
    id: "Project03",
    project: Project03,
    title: "Shopper - Clothing Shop",
    description:
      "A modern e-commerce platform that offers the latest clothing collections with a seamless shopping experience. The design is fully responsive, ensuring smooth usability across mobile, tablet, and desktop devices.",
    tech: ["ReactJS", "ExpressJS", "Mongodb"],
    link: "https://youtube.com",
  },
];
