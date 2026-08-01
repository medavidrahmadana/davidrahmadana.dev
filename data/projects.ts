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
  isDemoActive?: boolean;
  coverImage?: string; // Main screenshot image
  galleryImages?: string[]; // Multiple screenshot images for carousels / multi-device mockups
}

export const projectsData: Project[] = [
  {
    title: "External and Internal Project",
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
      "Vite",
      "React.js",
      "Flutter",
      "MySQL",
      "CodeIgniter 3",
      "RESTful API",
      "GitLab",
      "Postman",
      "AI Agents",
    ],
    coverImage: "/projects/cubiconia/pupr-ticketing.png",
    galleryImages: [
      "/projects/cubiconia/pupr-ticketing.png",
      "/projects/cubiconia/djps-sadayana.png",
      "/projects/cubiconia/4arah.png",
      "/projects/cubiconia/ayamu.png",
      "/projects/cubiconia/lspv2.png",
      "/projects/cubiconia/hexamaya.png",
      "/projects/cubiconia/cubiconia-absensi.png",
      "/projects/cubiconia/scpv2.png",
      "/projects/cubiconia/kkp-samudra.png",
      "/projects/cubiconia/kkp-lautan.png",
    ],
  },
  {
    title: "Empowr",
    subtitle: "Task Outsourcing Platform",
    category: "Academic",
    isPrivate: false,
    description:
      "A comprehensive task marketplace connecting clients and freelancers, featuring secure escrow-based payment flows and interactive admin dashboard analytics.",
    contribution:
      "Developed marketplace core modules (job posting, bidding, work reviews), engineered escrow financial workflow, and built admin dashboard.",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "Outsystems"],
    demoUrl: "https://empowr.site",
    githubUrl: "https://github.com/Iqius/Empowr",
    isDemoActive: false,
    coverImage: "/projects/empowr/empwor-landing.png",
    galleryImages: [
      "/projects/empowr/empwor-landing.png",
      "/projects/empowr/empowr-dash.png",
    ],
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
    demoUrl: "https://bmsuntan.my.id",
    isDemoActive: false,
    coverImage: "/projects/bms-untan/bms-untan.png",
    galleryImages: [
      "/projects/bms-untan/bms-untan.png",
      "/projects/bms-untan/bms-untan-dash.png",
    ],
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
    demoUrl: "https://respiracare.humicprototyping.com/",
    isDemoActive: false,
    coverImage: "/projects/respira/respira-login.png",
    galleryImages: [
      "/projects/respira/respira-login.png",
      "/projects/respira/respira-dashboard.png",
    ],
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
    githubUrl: "https://github.com/medavidrahmadana/TelU-Adventure-Mobile",
    coverImage: "/projects/adventure/telu-adventure-landing.png",
    galleryImages: [
      "/projects/adventure/telu-adventure-landing.png",
      "/projects/adventure/telu-adventure-beranda.jpg",
      "/projects/adventure/telu-adventure-map.jpg",
      "/projects/adventure/telu-adventure-forum.jpg",
    ],
  },
];
