import { Code, Server, Database, PenTool, GraduationCap } from "lucide-react";

export const socialLinks = {
  github: "https://github.com/Marvel777",
  linkedin: "https://www.linkedin.com/in/marvel-maher-9b2213245",
  email: "mahermarvel@gmail.com",
};

export type Skill = {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools";
};

export const skills: Skill[] = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Redux", level: 80, category: "frontend" },
  { name: "Framer Motion", level: 75, category: "frontend" },
  { name: "MUI", level: 90, category: "frontend" },


  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Next.js", level: 90, category: "backend" },
  { name: "GraphQL", level: 70, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "PostgreSQL", level: 70, category: "backend" },


  // Tools
  { name: "Git/GitHub/GitLab", level: 90, category: "tools" },
  { name: "Webpack", level: 85, category: "tools" },
  { name: "Jest", level: 80, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "CI/CD", level: 75, category: "tools" },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "cms",
    title: "Content Management System",
    description: "A robust content management system for creating and managing website content, including blog posts, pages, and media assets.",
    image: "/cms-1.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Context", "MongoDB", "MUI", "i18n"],
    demoUrl: "https://dev.tungsten-media.com/en/dashboard",
    githubUrl: "https://github.com/Marvel777",
    featured: true,
  },
  {
    id: "Citrine Clinic",
    title: "Citrine Clinic",
    description: "A sleek, patient-focused healthcare platform designed to simplify appointments and medical records with intuitive data insights.",
    image: "/citrine.png",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "MUI"],
    demoUrl: "https://citrine-clinic.com",
    githubUrl: "https://github.com/Marvel777",
    featured: true,
  },
  {
    id: "portfolio_drsallyeladwy",
    title: "portfolio-dr-sally",
    description: "Dynamic physician portfolio with appointment integration, blog capabilities, and a modern design to enhance patient engagement.",
    image: "/dr_sally.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "CMS"],
    demoUrl: "https://drsallyeladwy.com",
    githubUrl: "https://github.com/Marvel777",
    featured: true,
  },
  {
    id: "portfolio_drsarahdohina",
    title: "portfolio-dr-sarah",
    description: "A polished medical portfolio website showcasing Dr. Sarah Dohina’s expertise, built for seamless content updates with a CMS and fast performance using Next.js.",
    image: "/dr_sara.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "CMS", "Nest.js"],
    demoUrl: "https://drsarahdohina.com",
    githubUrl: "https://github.com/Marvel777",
    featured: true,
  },
  {
    id: "portfolio_drfreehanzakarya",
    title: "portfolio-dr-freehanzakarya",
    description: "A welcoming digital space for patients to explore Dr.Freehan zakarya's practice, services, and professional background with intuitive navigation",
    image: "/dr-freehan.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "CMS",],
    demoUrl: "https://drfreehanzakarya.com",
    githubUrl: "https://github.com/Marvel777",
    featured: true,
  },
];

export type TimelineItem = {
  date: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

export const timelineItems: TimelineItem[] = [
  {
    date: "2024 - Present",
    title: "Frontend Developer",
    description: "Working on a CMS platform using Next.js, TypeScript, and Tailwind CSS. Responsible for developing scalable components, maintaining clean architecture, and mentoring junior developers on best practices.",
    icon: Code,
  },
  {
    date: "2023 - 2024",
    title: "MERN Stack Developer",
    description: "Developed responsive web applications using covering MongoDB, Express.js, React, and Node.js. , collaborated with designers to create engaging user experiences.",
    icon: PenTool,
  },
  {
    date: "2022 - 2023",
    title: "Full Stack Developer",
    description:
      "Built RESTful APIs and backend logic using Django. Designed and developed responsive frontend interfaces with HTML, CSS, and JavaScript for various client projects.",
    icon: Server,
  },
  {
    date: "2023 - 2024",
    title: "Information Technology Institute (ITI)",
    description:
      "Completed a one-month intensive MERN stack program covering MongoDB, Express.js, React, and Node.js. Built full-stack applications with RESTful APIs, user authentication, and frontend state management.",
    icon: GraduationCap,
  },
  {
    date: "2020 - 2024",
    title: "Computer Science Degree ",
    description: "Studied algorithms, data structures, software engineering principles, and completed various programming projects.",
    icon: Database,
  },
];