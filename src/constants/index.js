import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "../assets";
import JoustImage from "../assets/JoustImage.png";
import EduRydeImage from "../assets/EduRydeImage.png";
import paytmLogo from "../assets/paytm.png";
import grapheneLogo from "../assets/graphene-1.png";
import smallchangeLogo from "../assets/smallchange.png";
import RoseDineImage from "../assets/RoseDineImage.png"
import UnicycleImage from "../assets/UnicycleImage.webp"
import XV6Image from "../assets/XV6Image.webp"


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AWS + Azure DevOps Engineering",
    icon: web,
  },
  {
    title: "LLM Tuning + ML Pipeline Creation",
    icon: web,
  },
  {
    title: "Flutter + Full Stack Development",
    icon: mobile,
  },
  {
    title: "Android + Linux System Administration",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Machine Learning + DevOps Intern",
    company_name: "GrapheneAI",
    icon: grapheneLogo,
    iconBg: "#E6DEDD",
    date: "June 2024 - August 2024",
    points: [
      "Established an end-to-end pipeline on Microsoft Azure for generating professional legal reports via Claude's API, fine-tuning LLMs and providing unified load-balancing via LiteLLM.",
      "Refactored the voice-to-text codebase using the strategy and factory design patterns, improving extensibility while reducing code size by over 30%.",
      "Developed an evaluation framework for transcription and translation, using metrics such as WER, MER, BLEU, and CER, resulting in a 20% improvement across the board.",
      "Migrated to a centralized non-blocking logger system with email alerts, using Grafana, Loki, and Promtail, doubling log management capacity and processing speed, and enhancing microservice observability.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Paytm",
    icon: paytmLogo,
    iconBg: "#E6DEDD",
    date: "June 2023 - August 2023",
    points: [
      "Worked with Paytm's lead front-end team on their movie ticketing interface, resulting in a 30% increase in user engagement.",
      "Collaborated in Agile teams, utilizing Jira and Bitbucket for version control, employing Squidman proxies, Nginx, and Docker containers to successfully deploy the project.",
      "Improved Paytm’s usability and customer attraction, leading to a rise in transaction completion rates and a boost in movie ticket sales.",
    ],
  },
  {
    title: "Founder",
    company_name: "Small Change",
    icon: smallchangeLogo,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "Co-founded a cent-a-day donation platform that connects donors with small charities without internet access.",
      "Utilized WordPress for the frontend, presented wireframes, integrated razorpay for fluid payment management",
      "Raised over 100,000 Rupees for charities from rural eastern India via partnerships with ground level NGOs.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "RoseDine",
    description:
        "An Intelligent Cafeteria App, with Smart Recommendations, Preference Filtering and Notifications, for Eating Healthy at College.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "green-text-gradient",
      },
      {
        name: "SQL Server",
        color: "pink-text-gradient",
      },
      {
        name: "Web-Scraping",
        color: "orange-text-gradient",
      },
      {
        name: "GPT4o",
        color: "black-text-gradient",
      },
    ],
    image: RoseDineImage,
    source_code_link: "https://github.com/AgnayS",
  },
  {
    name: "Unicycle",
    description:
        "A 16-Bit Single-Cycle Processor that runs Faster than Multi-Cycle ones! It features a Hand-Crafted Instruction set, and is Optimized for Speeed!",
    tags: [
      {
        name: "Verilog",
        color: "blue-text-gradient",
      },
      {
        name: "Quartus",
        color: "green-text-gradient",
      },
      {
        name: "ModelSim",
        color: "pink-text-gradient",
      },
      {
        name: "Computer Architecture",
        color: "orange-text-gradient",
      },
    ],
    image: UnicycleImage,
    source_code_link: "https://github.com/AgnayS/Unicycle",
  },
  {
    name: "Multithreaded XV6",
    description:
        "Turning the classic xv6 OS into a multitasking marvel, giving it the ability to juggle multiple threads via kernel and user-level APIs. We aimed to make even Linus Torvalds raise his eyebrows, while keeping RISC-V on its toes!",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "RISC-V",
        color: "green-text-gradient",
      },
      {
        name: "Operating Systems",
        color: "pink-text-gradient",
      },
      {
        name: "Multithreading",
        color: "orange-text-gradient",
      },
    ],
    image: XV6Image,
    source_code_link: "https://github.com/AgnayS/xv6-riscv",
  },
  {
    name: "EduRyde",
    description:
      "An Open-Source Ride Sharing App, With Integrated Navigation, Exclusively For College Students.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "GCP",
        color: "pink-text-gradient",
      },
    ],
    image: EduRydeImage,
    source_code_link: "https://github.com/AgnayS/EduRyde",
  },
  {
    name: "Joust!",
    description:
      "A Remake of the 1980s Arcade Game, Joust! in Java.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JavaFX",
        color: "green-text-gradient",
      },
    ],
    image: JoustImage,
    source_code_link: "https://github.com/AgnayS/Joust",
  },
];

export { services, technologies, experiences, testimonials, projects };
