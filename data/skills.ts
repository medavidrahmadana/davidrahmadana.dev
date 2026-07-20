export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Mobile" | "Database" | "Tools";
}

export const skillsData: Skill[] = [
  // Backend
  { name: "Laravel (PHP)", category: "Backend" },
  { name: "CodeIgniter 3", category: "Backend" },
  { name: "RESTful API", category: "Backend" },
  { name: "Node.js (Basic)", category: "Backend" },
  { name: "Python (Basic)", category: "Backend" },

  // Frontend
  { name: "Vue.js", category: "Frontend" },
  { name: "Nuxt.js", category: "Frontend" },
  { name: "React.js (Basic)", category: "Frontend" },
  { name: "JavaScript / TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Bootstrap / CSS", category: "Frontend" },

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
  { name: "Git & GitHub", category: "Tools" },
  { name: "GitLab", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "AI Agent (Codex, Antigravity)", category: "Tools" },
];
