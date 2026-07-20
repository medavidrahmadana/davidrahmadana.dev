export interface CoreSkill {
  title: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  location: string;
}

export interface AboutData {
  summary: string;
  careerOverview: string;
  education: Education;
  skills: CoreSkill[];
}

export const aboutData: AboutData = {
  summary:
    "Software Engineer with 3+ years of freelance and professional experience developing web and mobile applications using Laravel, Vue.js, Nuxt.js, Flutter, and MySQL.",
  careerOverview:
    "Experienced in RESTful API development, database design, system integration, and business application development. Currently contributing to 16+ client projects at PT Cubiconia Kanaya Pratama and recognized as Employee of the Month within three months of joining.",
  education: {
    institution: "Telkom University",
    degree: "Bachelor of Software Engineering (S.Kom.)",
    period: "2021 - 2025",
    gpa: "GPA: 3.48 / 4.00",
    location: "Bandung, Indonesia",
  },
  skills: [
    {
      title: "Backend Development",
      description:
        "Laravel (PHP), CodeIgniter 3, MySQL, Node.js (Basic), Python",
    },
    {
      title: "Frontend Development",
      description:
        "Vue.js, Nuxt.js, React.js (Basic), JavaScript, HTML, CSS, Tailwind CSS",
    },
    {
      title: "Mobile Development",
      description: "Flutter, Dart, Firebase, Android Development",
    },
    {
      title: "Tools & Collaboration",
      description: "Git, GitHub, GitLab, Postman, VS Code",
    },
  ],
};
