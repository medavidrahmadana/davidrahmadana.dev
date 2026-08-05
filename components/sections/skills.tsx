"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";
import { Server, Laptop, Smartphone, Database, Cpu, Network, Zap, Sparkles } from "lucide-react";
import {
  SiLaravel,
  SiCodeigniter,
  SiNodedotjs,
  SiPython,
  SiVuedotjs,
  SiNuxt,
  SiNextdotjs,
  SiVite,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiAndroid,
  SiMysql,
  SiGit,
  SiGithub,
  SiGitlab,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import { skillsData, Skill } from "@/data/skills";
import { Card, CardContent } from "@/components/ui/card";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";

const categoryIcons = {
  Backend: Server,
  Frontend: Laptop,
  Mobile: Smartphone,
  Database: Database,
  Tools: Cpu,
};

// Verified 100% Official Brand Icons
function OfficialTechIcon({ name }: { name: string }) {
  const iconClass = "h-5 w-5 shrink-0 transition-transform group-hover:scale-110";

  switch (name) {
    case "Laravel":
      return <SiLaravel className={iconClass} style={{ color: "#FF2D20" }} />;
    case "CodeIgniter 3":
      return <SiCodeigniter className={iconClass} style={{ color: "#EF4223" }} />;
    case "RESTful API":
      return <Network className={iconClass} style={{ color: "#3B82F6" }} />;
    case "Node.js":
      return <SiNodedotjs className={iconClass} style={{ color: "#5FA04E" }} />;
    case "Python":
      return <SiPython className={iconClass} style={{ color: "#3776AB" }} />;
    case "Vue.js":
      return <SiVuedotjs className={iconClass} style={{ color: "#4FC08D" }} />;
    case "Nuxt.js":
      return <SiNuxt className={iconClass} style={{ color: "#00DC82" }} />;
    case "Next.js":
      return <SiNextdotjs className={`${iconClass} fill-current text-foreground`} />;
    case "Vite":
      return <SiVite className={iconClass} style={{ color: "#646CFF" }} />;
    case "React.js":
      return <SiReact className={iconClass} style={{ color: "#61DAFB" }} />;
    case "JavaScript":
      return <SiJavascript className={iconClass} style={{ color: "#F7DF1E" }} />;
    case "TypeScript":
      return <SiTypescript className={iconClass} style={{ color: "#3178C6" }} />;
    case "Tailwind CSS":
      return <SiTailwindcss className={iconClass} style={{ color: "#06B6D4" }} />;
    case "Bootstrap":
      return <SiBootstrap className={iconClass} style={{ color: "#7952B3" }} />;
    case "Flutter":
      return <SiFlutter className={iconClass} style={{ color: "#02569B" }} />;
    case "Dart":
      return <SiDart className={iconClass} style={{ color: "#0175C2" }} />;
    case "Firebase":
      return <SiFirebase className={iconClass} style={{ color: "#FFCA28" }} />;
    case "Android Development":
      return <SiAndroid className={iconClass} style={{ color: "#3DDC84" }} />;
    case "MySQL":
      return <SiMysql className={iconClass} style={{ color: "#4479A1" }} />;
    case "Database Design":
      return <Database className={iconClass} style={{ color: "#6366F1" }} />;
    case "Query Optimization":
      return <Zap className={iconClass} style={{ color: "#8B5CF6" }} />;
    case "Git":
      return <SiGit className={iconClass} style={{ color: "#F05032" }} />;
    case "GitHub":
      return <SiGithub className={`${iconClass} fill-current text-foreground`} />;
    case "GitLab":
      return <SiGitlab className={iconClass} style={{ color: "#FC6D26" }} />;
    case "Postman":
      return <SiPostman className={iconClass} style={{ color: "#FF6C37" }} />;
    case "VS Code":
      return <VscVscode className={iconClass} style={{ color: "#007ACC" }} />;
    case "AI Agents":
      return <Sparkles className={iconClass} style={{ color: "#EC4899" }} />;
    default:
      return <div className="h-2.5 w-2.5 rounded-full bg-brand-primary shrink-0" />;
  }
}

// Brand Color Mapping for borders and hover effects
const techBrandColors: Record<string, { color: string; border: string }> = {
  Laravel: { color: "#FF2D20", border: "rgba(255, 45, 32, 0.25)" },
  "CodeIgniter 3": { color: "#EF4223", border: "rgba(239, 66, 35, 0.25)" },
  "RESTful API": { color: "#3B82F6", border: "rgba(59, 130, 246, 0.25)" },
  "Node.js": { color: "#5FA04E", border: "rgba(95, 160, 78, 0.25)" },
  Python: { color: "#3776AB", border: "rgba(55, 118, 171, 0.25)" },
  "Vue.js": { color: "#4FC08D", border: "rgba(79, 192, 141, 0.25)" },
  "Nuxt.js": { color: "#00DC82", border: "rgba(0, 220, 130, 0.25)" },
  "Next.js": { color: "#000000", border: "rgba(120, 120, 120, 0.25)" },
  Vite: { color: "#646CFF", border: "rgba(100, 108, 255, 0.25)" },
  "React.js": { color: "#61DAFB", border: "rgba(97, 218, 251, 0.25)" },
  JavaScript: { color: "#F7DF1E", border: "rgba(247, 223, 30, 0.25)" },
  TypeScript: { color: "#3178C6", border: "rgba(49, 120, 198, 0.25)" },
  "Tailwind CSS": { color: "#06B6D4", border: "rgba(6, 182, 212, 0.25)" },
  Bootstrap: { color: "#7952B3", border: "rgba(121, 82, 179, 0.25)" },
  Flutter: { color: "#02569B", border: "rgba(2, 86, 155, 0.25)" },
  Dart: { color: "#0175C2", border: "rgba(1, 117, 194, 0.25)" },
  Firebase: { color: "#FFCA28", border: "rgba(255, 202, 40, 0.25)" },
  "Android Development": { color: "#3DDC84", border: "rgba(61, 220, 132, 0.25)" },
  MySQL: { color: "#4479A1", border: "rgba(68, 121, 161, 0.25)" },
  "Database Design": { color: "#6366F1", border: "rgba(99, 102, 241, 0.25)" },
  "Query Optimization": { color: "#8B5CF6", border: "rgba(139, 92, 246, 0.25)" },
  Git: { color: "#F05032", border: "rgba(240, 80, 50, 0.25)" },
  GitHub: { color: "#000000", border: "rgba(140, 140, 140, 0.25)" },
  GitLab: { color: "#FC6D26", border: "rgba(252, 109, 38, 0.25)" },
  Postman: { color: "#FF6C37", border: "rgba(255, 108, 55, 0.25)" },
  "VS Code": { color: "#007ACC", border: "rgba(0, 122, 204, 0.25)" },
  "AI Agents": { color: "#EC4899", border: "rgba(236, 72, 153, 0.25)" },
};

export function Skills() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Group skills by category
  const categories = React.useMemo(() => {
    const groups: Record<Skill["category"], string[]> = {
      Backend: [],
      Frontend: [],
      Mobile: [],
      Database: [],
      Tools: [],
    };
    skillsData.forEach((skill) => {
      groups[skill.category].push(skill.name);
    });
    return Object.entries(groups) as [Skill["category"], string[]][];
  }, []);

  return (
    <SectionContainer
      id="skills"
      enableAnimation={true}
      className="border-border/50 border-t"
    >
      <SectionHeader
        badge="Skills"
        title="Technical Expertise"
        subtitle="A comprehensive overview of the programming languages, frameworks, databases, and tools I use to build robust software solutions."
      />

      {/* Symmetrical Bento Grid (3-column top, 2-column bottom) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-12 grid grid-cols-1 gap-6 xl:grid-cols-12 w-full"
      >
        {categories.map(([category, skills], index) => {
          const Icon = categoryIcons[category];
          // Grid column span configuration for perfect Bento symmetry
          // Row 1 (Backend, Frontend, Mobile): span 4 of 12 (3 equal columns)
          // Row 2 (Database, Tools): span 6 of 12 (2 equal columns)
          const colSpanClass =
            index < 3 ? "xl:col-span-4" : "xl:col-span-6";

          return (
            <motion.div key={category} variants={cardVariants} className={colSpanClass}>
              <Card className="lautan-card-accent border-border/60 bg-card/45 hover:border-brand-primary/25 hover:shadow-brand-primary/10 h-full backdrop-blur-sm transition-all duration-300 hover:shadow-lg flex flex-col justify-between overflow-hidden">
                <CardContent className="space-y-4 p-6 flex flex-col h-full justify-between">
                  <div>
                    {/* Category Header */}
                    <div className="border-border/40 flex items-center justify-between border-b pb-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-brand-primary/10 text-brand-primary flex h-9 w-9 items-center justify-center rounded-xl border border-brand-primary/20 shrink-0">
                          <IconWrapper icon={Icon} size="sm" />
                        </div>
                        <h3 className="text-foreground text-base font-extrabold tracking-tight">
                          {category}
                        </h3>
                      </div>
                      <span className="text-muted-foreground/60 text-xs font-semibold">
                        {skills.length} Stack{skills.length > 1 ? "s" : ""}
                      </span>
                    </div>

                    {/* Interactive Tech Badge List with Verified Official Brand Icons */}
                    <div className="flex flex-wrap gap-2.5">
                      {skills.map((skill) => {
                        const brand = techBrandColors[skill] || {
                          color: "#3b82f6",
                          border: "rgba(59, 130, 246, 0.2)",
                        };

                        return (
                          <div
                            key={skill}
                            className="group relative flex items-center gap-2.5 rounded-xl border bg-card/75 px-3.5 py-2 text-xs font-bold text-foreground transition-all duration-200 hover:scale-105 cursor-default shadow-2xs hover:bg-card"
                            style={{
                              borderColor: brand.border,
                            }}
                          >
                            {/* Official Tech Logo Icon */}
                            <OfficialTechIcon name={skill} />
                            <span>{skill}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionContainer>
  );
}
