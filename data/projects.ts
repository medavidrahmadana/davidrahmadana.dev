export interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  category: "Professional" | "Academic" | "Open Source" | "Freelance";
  isPrivate: boolean;
  company?: string;
  contribution: string;
  businessImpact?: string;
  githubUrl?: string;
  demoUrl?: string;
  coverImage?: string; // We can set this to generated images or CSS styled cards
}

export const projectsData: Project[] = [
  {
    title: "Enterprise Client Portfolio",
    subtitle: "PT Cubiconia Client Projects",
    company: "PT Cubiconia Kanaya Pratama",
    category: "Professional",
    isPrivate: true,
    description:
      "Full-stack development and maintenance of 16+ active corporate client applications, ranging from enterprise web portals to high-performance mobile systems.",
    contribution:
      "Designed secure database architectures, developed high-performance RESTful APIs, built integrated mobile modules using Flutter, and synchronized Vue/Nuxt platforms.",
    businessImpact:
      "Assured stable product delivery and feature release cycles for 16+ client systems, enhancing deployment speed and client trust.",
    technologies: [
      "Laravel",
      "Vue.js",
      "Nuxt.js",
      "React (Vite)",
      "Flutter",
      "MySQL",
      "CodeIgniter",
      "GitLab",
      "Postman",
      "AI Agent",
    ],
  },
  {
    title: "Empowr",
    subtitle: "Task Outsourcing Marketplace Platform",
    category: "Academic",
    isPrivate: false,
    description:
      "A comprehensive task marketplace connecting clients and freelancers, featuring secure escrow-based payment flows and interactive admin dashboard analytics.",
    contribution:
      "Developed marketplace core modules (job posting, bidding, work reviews), engineered escrow financial workflow, and built admin dashboard.",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "Outsystems"],
    coverImage: "/projects/empowr.jpg",
  },
  {
    title: "BMS Untan",
    subtitle: "Internal Reporting",
    category: "Freelance",
    isPrivate: false,
    description:
      "An academic reporting and operations management system built to streamline operational processes and reporting modules for university academic tasks.",
    contribution:
      "Created campus academic reporting modules and designed a secure, performant database structure.",
    technologies: ["Laravel", "MySQL"],
    demoUrl: "#",
    coverImage: "/projects/bms-untan.jpg",
  },
  {
    title: "RespiraCare",
    subtitle: "Patient Monitoring Web Application",
    category: "Academic",
    isPrivate: false,
    description:
      "A specialized medical web application registered under copyright (HKI), engineered to record, trace, and monitor respiratory patient health logs.",
    contribution:
      "Developed patient monitoring dashboards, health tracking logging modules, and secured intellectual property registration.",
    technologies: ["Laravel", "MySQL", "Bootstrap"],
    demoUrl: "#",
    coverImage: "/projects/respiracare.jpg",
  },
  { 
    title: "Tel-U Adventure",
    subtitle: "Interactive Campus Exploration Mobile App",
    category: "Academic",
    isPrivate: false,
    description:
      "An interactive mobile exploration app designed to guide new university students through campus navigation and exploration challenges.",
    contribution:
      "Built navigation features, map guides, and integrated Firebase backend services for student logs.",
    technologies: ["Flutter", "Firebase", "Dart", "Android"],
    coverImage: "/projects/telu-adventure.jpg",
  },
];
