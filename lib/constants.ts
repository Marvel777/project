import { Github, Code, Server, Database, PenTool, Lightbulb } from "lucide-react";

export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  email: "email@example.com",
};

export type Skill = {
  name: string;
  level: number; // 1-100
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
  
  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "GraphQL", level: 70, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "PostgreSQL", level: 70, category: "backend" },
  { name: "Firebase", level: 80, category: "backend" },
  
  // Tools
  { name: "Git", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Webpack", level: 75, category: "tools" },
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
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product catalog, cart functionality, user authentication, and payment integration using Stripe.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
    demoUrl: "https://demo-ecommerce.example.com",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    featured: true,
  },
  {
    id: "task-management",
    title: "Task Management App",
    description: "A Trello-inspired task management application with drag-and-drop functionality, team collaboration features, and real-time updates.",
    image: "https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Redux", "Node.js", "Socket.io", "PostgreSQL"],
    demoUrl: "https://demo-taskmanager.example.com",
    githubUrl: "https://github.com/yourusername/task-management",
    featured: true,
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    description: "A comprehensive fitness tracking application that allows users to log workouts, track progress, set goals, and view analytics of their fitness journey.",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React Native", "Firebase", "Redux", "D3.js"],
    demoUrl: "https://demo-fitness.example.com",
    githubUrl: "https://github.com/yourusername/fitness-tracker",
    featured: true,
  },
  {
    id: "weather-app",
    title: "Weather Dashboard",
    description: "A weather application providing current conditions and forecasts using geolocation. Features include interactive maps, hourly/daily forecasts, and severe weather alerts.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "TypeScript", "OpenWeatherAPI", "Leaflet"],
    demoUrl: "https://demo-weather.example.com",
    githubUrl: "https://github.com/yourusername/weather-app",
    featured: false,
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
    date: "2022 - Present",
    title: "Senior Frontend Developer",
    description: "Leading frontend development for a SaaS platform, implementing modern architecture and mentoring junior developers.",
    icon: Code,
  },
  {
    date: "2020 - 2022",
    title: "Frontend Developer",
    description: "Developed responsive web applications using React and Next.js, collaborated with designers to create engaging user experiences.",
    icon: PenTool,
  },
  {
    date: "2018 - 2020",
    title: "Full Stack Developer",
    description: "Built RESTful APIs, implemented database architecture, and created frontend interfaces for various client projects.",
    icon: Server,
  },
  {
    date: "2016 - 2018",
    title: "Junior Web Developer",
    description: "Started career developing HTML/CSS templates and working with jQuery. First introduction to modern JavaScript frameworks.",
    icon: Github,
  },
  {
    date: "2012 - 2016",
    title: "Computer Science Degree",
    description: "Studied algorithms, data structures, software engineering principles, and completed various programming projects.",
    icon: Database,
  },
  {
    date: "2010 - 2012",
    title: "Self-taught Programmer",
    description: "Began learning programming through online resources, building small web projects and exploring different technologies.",
    icon: Lightbulb,
  },
];