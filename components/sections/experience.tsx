"use client";

import * as React from "react";
import { motion, Variants, useScroll, useSpring } from "framer-motion";
import { Briefcase, Calendar, Check, ShieldAlert, Award, Network, Sparkles } from "lucide-react";
import {
  SiLaravel,
  SiCodeigniter,
  SiVuedotjs,
  SiNuxt,
  SiNextdotjs,
  SiVite,
  SiReact,
  SiFlutter,
  SiMysql,
  SiGit,
  SiGithub,
  SiGitlab,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import { experiencesData } from "@/data/experience";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";

function ExperienceTechIcon({ name }: { name: string }) {
  const iconClass = "h-3.5 w-3.5 shrink-0";

  switch (name) {
    case "Laravel":
      return <SiLaravel className={iconClass} style={{ color: "#FF2D20" }} />;
    case "CodeIgniter 3":
    case "CodeIgniter":
      return <SiCodeigniter className={iconClass} style={{ color: "#EF4223" }} />;
    case "Vue.js":
      return <SiVuedotjs className={iconClass} style={{ color: "#4FC08D" }} />;
    case "Nuxt.js":
      return <SiNuxt className={iconClass} style={{ color: "#00DC82" }} />;
    case "Next.js":
      return <SiNextdotjs className={`${iconClass} fill-current text-foreground`} />;
    case "Vite":
      return <SiVite className={iconClass} style={{ color: "#646CFF" }} />;
    case "React.js":
    case "React":
      return <SiReact className={iconClass} style={{ color: "#61DAFB" }} />;
    case "Flutter":
      return <SiFlutter className={iconClass} style={{ color: "#02569B" }} />;
    case "MySQL":
      return <SiMysql className={iconClass} style={{ color: "#4479A1" }} />;
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
    case "RESTful API":
      return <Network className={iconClass} style={{ color: "#3B82F6" }} />;
    case "AI Agents":
      return <Sparkles className={iconClass} style={{ color: "#EC4899" }} />;
    default:
      return null;
  }
}

export function Experience() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <SectionContainer
      id="experience"
      enableAnimation={true}
      className="border-border/50 border-t"
    >
      <SectionHeader
        badge="Experience"
        title="Work Experience & Journey"
        subtitle="A timeline of my professional career, freelance projects, and business impact."
      />

      <div ref={containerRef} className="relative mx-auto mt-12 max-w-4xl px-1 py-1">
        {/* Vertical Timeline Guide Line Base */}
        <div className="bg-border/60 absolute top-2 bottom-2 left-4 w-[2px] md:left-8" />
        
        {/* Vertical Timeline Guide Line Animated Progress */}
        <motion.div 
          className="bg-brand-primary absolute top-2 bottom-2 left-4 w-[2px] origin-top md:left-8"
          style={{ scaleY }}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {experiencesData.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative pl-10 md:pl-20"
            >
              {/* Timeline Bullet Node */}
              <div className="bg-background border-brand-primary absolute top-1.5 left-2.5 z-10 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:scale-125 md:left-[26px]">
                {exp.isCurrent && (
                  <span className="bg-brand-primary absolute inset-0 animate-ping rounded-full opacity-60" />
                )}
                <span className="bg-brand-primary h-1.5 w-1.5 rounded-full" />
              </div>

              {/* Experience Card */}
              <Card className="lautan-card-accent border-border/60 bg-card/45 hover:border-brand-primary/20 hover:shadow-brand-primary/10 hover:scale-[1.01] backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  {/* Card Header Info */}
                  <div className="border-border/40 mb-4 flex flex-col justify-between gap-4 border-b pb-4 md:flex-row md:items-start">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-foreground text-lg font-extrabold tracking-tight">
                          {exp.position}
                        </h3>
                        <div className="flex gap-2">
                          {exp.isCurrent && (
                            <Badge variant="success" className="rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase">
                              Current
                            </Badge>
                          )}
                          {exp.isPrivate && (
                            <Badge variant="warning" className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase">
                              <IconWrapper icon={ShieldAlert} size="xs" />
                              Private
                            </Badge>
                          )}
                        </div>
                      </div>

                      <p className="text-brand-primary flex items-center gap-1.5 text-sm font-semibold">
                        <IconWrapper icon={Briefcase} size="xs" />
                        {exp.company}
                      </p>
                    </div>

                    <div className="text-muted-foreground bg-muted/30 flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium md:self-start md:text-right">
                      <IconWrapper icon={Calendar} size="xs" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed font-light">
                    {exp.description}
                  </p>

                  {/* Contributions / Achievements Checklist */}
                  <div className="mb-6 space-y-3">
                    <h4 className="text-foreground text-xs font-bold tracking-wider uppercase">
                      Key Contributions & Achievements:
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.achievements.map((ach, idx) => (
                        <li
                          key={idx}
                          className="text-muted-foreground flex items-start gap-2.5 text-sm leading-relaxed font-light"
                        >
                          <span className="bg-brand-primary/10 text-brand-primary mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                            <IconWrapper icon={Check} size="xs" />
                          </span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Private Project Callout (Business Impact) */}
                  {exp.isPrivate && exp.businessImpact && (
                    <div className="mb-6 flex gap-3.5 rounded-xl border border-amber-500/15 bg-amber-500/5 p-4">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                        <IconWrapper icon={Award} size="xs" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-bold tracking-wider text-amber-500 uppercase">
                          Business Impact (Private Project)
                        </span>
                        <p className="text-muted-foreground text-xs leading-relaxed font-light">
                          {exp.businessImpact}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Tech Stack Used with Official Brand Icons */}
                  <div className="border-border/40 flex flex-wrap gap-2 border-t pt-4">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-card/80 hover:bg-card border border-border/50 text-foreground rounded-lg px-2.5 py-1 text-xs font-bold flex items-center gap-1.5 transition-all duration-200 hover:scale-105"
                      >
                        <ExperienceTechIcon name={tech} />
                        <span>{tech}</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
}
