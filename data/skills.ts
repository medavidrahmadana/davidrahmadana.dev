export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Mobile" | "Database" | "Tools";
}

export const skillsData: Skill[] = [
  // Backend
  { name: "Laravel", category: "Backend" },
  { name: "CodeIgniter 3", category: "Backend" },
  { name: "RESTful API", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },

  // Frontend
  { name: "Vue.js", category: "Frontend" },
  { name: "Nuxt.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Vite", category: "Frontend" },
  { name: "React.js", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },

  // Mobile
  { name: "Flutter", category: "Mobile" },
  { name: "Dart", category: "Mobile" },
  { name: "Firebase", category: "Mobile" },
  { name: "Android Development", category: "Mobile" },

  // Database
  { name: "MySQL", category: "Database" },
  { name: "Database Design", category: "Database" },
  { name: "Query Optimization", category: "Database" },

  // Tools & Collab
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "GitLab", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "AI Agents", category: "Tools" },
];
