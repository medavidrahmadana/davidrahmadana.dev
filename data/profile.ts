export interface ProfileStat {
  value: string;
  label: string;
}

export interface SocialLink {
  platform: "github" | "linkedin" | "email";
  href: string;
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  location: string;
  focus: string;
  stats: ProfileStat[];
  socials: SocialLink[];
  cvUrl: string;
  photoUrl?: string;
}

export const profileData: ProfileData = {
  name: "David Gholi Rahmadana",
  title: "Software Engineer",
  bio: "Full-Stack Software Engineer specializing in web and mobile application development with Laravel, Vue.js, Flutter, and RESTful APIs.",
  location: "",
  focus:
    "Building business solutions, scalable systems, and contributing to 16+ client projects at PT Cubiconia Kanaya Pratama.",
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "16+", label: "Projects Completed" },
    { value: "15+", label: "Technologies" },
    { value: "🏆", label: "Employee of the Month" },
  ],
  socials: [
    { platform: "github", href: "https://github.com/medavidrahmadana" },
    {
      platform: "linkedin",
      href: "https://linkedin.com/in/davidrahmadana",
    },
    { platform: "email", href: "mailto:me.davidrahmadana@gmail.com" },
  ],
  cvUrl: "/cv.pdf",
  photoUrl: "/profile.jpg",
};
