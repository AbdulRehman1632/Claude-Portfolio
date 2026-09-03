// imports - top of file me
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaPhoneVolume,
} from "react-icons/fa";

import {
  SiExpress,
  SiFirebase,
  SiMui,
  SiElevenlabs,
  SiN8N,
  SiMongodb,
} from "react-icons/si";

// ─── LOGO ─────────────────────────────────────────────────────────────────────
export const namelogo = {
  logo1: "fa-solid fa-less-than",
  logo2: "fa-solid fa-greater-than",
  color1: "yellow",
  color2: "aqua",
};

// ─── HERO ─────────────────────────────────────────────────────────────────────
export const info = {
  Heading: "Hi, I'm Abdul Rehman!",
  SubHeading: "Front-End Developer",
  Paragraph:
    "I am a dedicated Front-End Developer specializing in creating clean, responsive, and high-performance web applications. With expertise in JavaScript, Material UI, React, and modern front-end libraries, I focus on delivering seamless user experiences and efficient solutions. My goal is to transform ideas into professional digital products that align with both user needs and business objectives.",
};

// ─── ABOUT ────────────────────────────────────────────────────────────────────
export const about = {
  Heading: "About Me!",
  SubHeading:
    "Creative Front-End Developer with MERN expertise, passionate about building modern, intelligent, and user-centric digital solutions.",
  list: [
    "Experienced in crafting responsive, accessible, and high-performing interfaces using React, JavaScript, Bootstrap, and other cutting-edge front-end technologies.",
    "Proficient in the MERN stack (MongoDB, Express.js, React, Node.js), enabling me to work across the full development cycle — from database design to interactive UI — while keeping a strong focus on the front-end experience.",
    "Hands-on with AI-powered applications, including custom chatbots, voice-enabled calling bots using ElevenLabs, and automated scheduling agents that post directly to LinkedIn.",
    "Comfortable with modern development workflows, version control (Git/GitHub), API integration, and deploying projects on platforms like Firebase, Netlify, and Hostinger.",
    "Always eager to explore emerging technologies, sharpen problem-solving skills, and deliver solutions that combine functionality, performance, and creativity.",
  ],
};

// ─── SOCIAL ───────────────────────────────────────────────────────────────────
export const social = [
  { logo: "fa-brands fa-github",   path: "https://github.com/AbdulRehman1632" },
  { logo: "fa-brands fa-facebook", path: "https://www.facebook.com/share/14g49LX1RR/" },
  { logo: "fa-brands fa-linkedin", path: "https://www.linkedin.com/in/abdul-rehman-5617b8283/" },
  { logo: "fa-brands fa-twitter",  path: "https://x.com/abdulrehman1632?s=09" },
];

// ─── SKILLS ───────────────────────────────────────────────────────────────────
export const skillscontent = {
  para: "The skills, tools and technologies I am Really good at",
};

export const skills = [
  { icon: FaHtml5, name: "HTML5" },
  { icon: FaCss3Alt, name: "CSS3" },
  { icon: FaBootstrap, name: "Bootstrap" },
  { icon: FaJs, name: "JavaScript" },
  { icon: FaReact, name: "React" },
  { icon: FaGitAlt, name: "Git" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiExpress, name: "Express.js" },
  { icon: SiFirebase, name: "Firebase" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiMui, name: "Material UI" },
  { icon: FaFigma, name: "Figma" },
  { icon: SiElevenlabs, name: "ElevenLabs" },
  { icon: FaGithub, name: "GitHub" },
  { icon: SiN8N, name: "n8n" },
  { icon: FaPhoneVolume, name: "Retell AI" },
];
// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    name: "Design By Shopify",
    description:
      "Empower your brand with complete Shopify solutions — from store setup to custom design and seamless eCommerce growth 🛍️.",
    emoji: "🛍️",
    path: "https://designbyshopify.com/",
    credentials: null,
  },
  {
    name: "Attendance System",
    description:
      "Track attendance seamlessly with real-time logs and smart records credentials uploaded on LinkedIn.",
    emoji: "📋",
    path: "https://attendancesystem-4e598.web.app/Login",
    credentials:
      "https://www.linkedin.com/posts/abdul-rehman-5617b8283_project-title-smart-attendance-workforce-activity-7353031598524510208-dhv2",
  },
  {
    name: "Mushk Taj Perfumes",
    description:
      "Perfume eCommerce on MERN — manage products with CRUD, shop with add-to-cart, and enjoy a fluid checkout ✨.",
    emoji: "🌸",
    path: "https://perfumes-frontend-one.vercel.app/",
    credentials: null,
  },
    {
    name: "AI Calling Bot (CRM Integrated)",
    description:
      "A confidential AI voice calling bot built with Retell AI, integrated with CRM to automatically resolve customer queries in real-time 📞.",
    emoji: "📞",
    path: null,
    credentials: null,
  },
  {
    name: "Kindle Publishers",
    description:
      "One-stop book services — from writing to publishing, editing, and printing, we bring your stories to life 📚.",
    emoji: "📚",
    path: "https://kindlepublishersusa.com/",
    credentials: null,
  },
  // {
  //   name: "Honor",
  //   description:
  //     "Explore pristine shores, golden sands, and crystal-clear waters that beckon you to unwind and indulge in thrilling activities 🏄.",
  //   emoji: "🏄",
  //   path: "https://watertour.netlify.app/",
  //   credentials: null,
  // },
  {
    name: "Rihla Travel & Tour",
    description:
      "A modern travel agency website offering curated tour packages, seamless booking, and unforgettable journey experiences ✈️.",
    emoji: "✈️",
    path: "https://rihlatravelandtours.com/",
    credentials: null,
  },
  // {
  //   name: "Weather App",
  //   description:
  //     "A sleek and responsive weather app providing real-time updates, including temperature, conditions, humidity, and wind speed 🌦️.",
  //   emoji: "🌦️",
  //   path: "https://weather-app1632.netlify.app/",
  //   credentials: null,
  // },
  {
    name: "The Productist",
    description:
      "A responsive platform with product browsing, cart, and checkout features, built with React.js and Redux for functionality 🛒.",
    emoji: "🛒",
    path: "https://theproductist.netlify.app/",
    credentials: null,
  },
  {
    name: "Simulated API",
    description:
      "A platform offering various APIs, including products, users, etc. built with Node.js and Express for seamless integration 👨‍💻.",
    emoji: "🔌",
    path: "https://simulated-api.netlify.app/",
    credentials: null,
  },
  {
    name: "Screen Sizer",
    description:
      "Introducing Screen Sizer — a simple yet effective tool designed to display your screen's dimensions instantly 📱.",
    emoji: "📱",
    path: "https://ssizer.vercel.app/",
    credentials: null,
  },
];

// ─── CONTACT ──────────────────────────────────────────────────────────────────
export const contactContent = {
  heading: "Reach Out to Me!",
  para: [
    "I am always open to discussing",
    " new projects, opportunities in tech world, partnerships",
    " and more so ",
    "mentorship.",
  ],
};

export const contact = [
  { name: "Phone:", content: "+923032565894",       icon: "fa-solid fa-phone" },
  { name: "Email:", content: "a.rehman1632@gmail.com", icon: "fa-solid fa-envelope" },
];
