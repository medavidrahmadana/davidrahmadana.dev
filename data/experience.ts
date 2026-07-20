export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
  isCurrent: boolean;
  isPrivate: boolean;
  businessImpact?: string;
}

export const experiencesData: Experience[] = [
  {
    company: "PT Cubiconia Kanaya Pratama",
    position: "Software Engineer",
    period: "Mar 2026 - Present",
    isCurrent: true,
    isPrivate: true,
    description:
      "Contributing to the development and maintenance of 16+ client projects across web, backend, frontend, and mobile applications in a professional team environment.",
    achievements: [
      "Awarded Employee of the Month (May 2026) after three months of service for outstanding project contributions.",
      "Developed and maintained applications using Laravel, Vue.js, Nuxt.js, Flutter, MySQL, and CodeIgniter.",
      "Built RESTful APIs and implemented business logic for internal and external systems.",
      "Developed mobile applications integrated with existing web platforms.",
      "Collaborated with cross-functional teams in a remote Agile development environment.",
    ],
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
      "VS Code",
      "AI Agent (Codex, Antigravity)",
    ],
    businessImpact:
      "Ensured product delivery and system stability across 16+ active client projects through clean architecture and proactive Agile collaboration.",
  },
  {
    company: "Freelance / Project-Based",
    position: "Backend Developer",
    period: "Jan 2023 - Aug 2025",
    isCurrent: false,
    isPrivate: false,
    description:
      "Building and deploying production-ready applications, specializing in RESTful API development, database architecture, and integration solutions.",
    achievements: [
      "Built 5+ production-ready applications and assisted in deployment and maintenance.",
      "Designed RESTful APIs and database schemas to support marketplace, reporting, and patient-monitoring features.",
      "Improved endpoint performance by optimizing Eloquent queries, database relationships, and pagination, resulting in faster response times.",
      "Assisted in deploying web applications to hosting environments on selected projects.",
      "Collaborated with clients to gather requirements and deliver high-quality solutions within deadlines.",
    ],
    technologies: [
      "Laravel",
      "MySQL",
      "PHP",
      "CodeIgniter 3",
      "Git",
      "Postman",
      "VS Code",
    ],
  },
];
