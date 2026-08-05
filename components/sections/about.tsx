"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Server,
  Layout,
  Smartphone,
  GitBranch,
  Briefcase,
  Award,
  Sparkles,
} from "lucide-react";
import { aboutData } from "@/data/about";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";

export function About() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const expertiseData = [
    {
      title: "Backend Engineering",
      icon: Server,
      color: "from-blue-500/20 to-indigo-500/10 text-blue-500 border-blue-500/20",
      skills: ["Laravel", "PHP", "CodeIgniter 3", "MySQL", "Node.js (Basic)", "Python"],
    },
    {
      title: "Frontend Development",
      icon: Layout,
      color: "from-cyan-500/20 to-teal-500/10 text-cyan-500 border-cyan-500/20",
      skills: ["Vue.js", "Nuxt.js", "React.js (Basic)", "JavaScript", "HTML/CSS", "Tailwind CSS"],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-purple-500/20 to-pink-500/10 text-purple-500 border-purple-500/20",
      skills: ["Flutter", "Dart", "Firebase", "Android Dev"],
    },
    {
      title: "Tools & Collaboration",
      icon: GitBranch,
      color: "from-amber-500/20 to-orange-500/10 text-amber-500 border-amber-500/20",
      skills: ["Git", "GitHub", "GitLab", "Postman", "VS Code", "AI Agents"],
    },
  ];

  return (
    <SectionContainer
      id="about"
      enableAnimation={false}
      className="border-border/50 border-t"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 w-full"
      >
        {/* Left Column: Header, Bio Summary, Stats & Education */}
        <div className="space-y-6 lg:col-span-7">
          <SectionHeader
            badge="About Me"
            title="Background & Career Journey"
            subtitle="A closer look at my academic background, core technical expertise, and professional career journey."
            className="mb-0 md:mb-0 text-left"
            enableAnimation={false}
          />

          {/* Main Bio Card */}
          <motion.div variants={itemVariants}>
            <Card className="lautan-card-accent border-border/60 bg-card/45 backdrop-blur-sm p-6 space-y-4 hover:border-brand-primary/20 transition-all duration-300">
              <p className="text-foreground text-base sm:text-lg leading-relaxed font-semibold">
                {aboutData.summary}
              </p>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-light">
                {aboutData.careerOverview}
              </p>

              {/* Quick Stat Highlights */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border/40">
                <div className="flex flex-col gap-0.5">
                  <span className="text-brand-primary text-xl sm:text-2xl font-extrabold tracking-tight">3+</span>
                  <span className="text-muted-foreground text-[10px] sm:text-xs font-medium">Years Experience</span>
                </div>
                <div className="flex flex-col gap-0.5 border-x border-border/40 px-3">
                  <span className="text-brand-primary text-xl sm:text-2xl font-extrabold tracking-tight">16+</span>
                  <span className="text-muted-foreground text-[10px] sm:text-xs font-medium">
                    Client Projects <span className="text-muted-foreground/60 text-[9px] font-normal block sm:inline">(at Cubiconia)</span>
                  </span>
                </div>
                <div className="flex flex-col gap-0.5 pl-1">
                  <span className="text-brand-primary text-xl sm:text-2xl font-extrabold tracking-tight">3.48</span>
                  <span className="text-muted-foreground text-[10px] sm:text-xs font-medium">Academic GPA</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Education Card */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h3 className="text-foreground flex items-center gap-2 text-base font-bold tracking-tight">
              <IconWrapper
                icon={GraduationCap}
                size="sm"
                className="text-brand-primary"
              />
              Education
            </h3>

            <Card className="border-border/60 bg-card/45 border-l-4 border-l-brand-primary backdrop-blur-sm transition-all duration-300 hover:shadow-md">
              <CardContent className="p-5">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                  <div>
                    <h4 className="text-foreground text-base font-extrabold flex items-center gap-2">
                      {aboutData.education.institution}
                    </h4>
                    <p className="text-brand-primary mt-0.5 text-xs font-semibold">
                      {aboutData.education.degree}
                    </p>
                    <div className="text-muted-foreground mt-2.5 flex flex-wrap gap-4 text-xs font-light">
                      <span className="flex items-center gap-1.5">
                        <IconWrapper icon={Calendar} size="xs" className="text-brand-primary/80" />
                        {aboutData.education.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <IconWrapper icon={MapPin} size="xs" className="text-brand-primary/80" />
                        {aboutData.education.location}
                      </span>
                    </div>
                  </div>
                  <div className="sm:text-right">
                    <Badge
                      variant="secondary"
                      className="bg-brand-primary/10 text-brand-primary border border-brand-primary/20 rounded-full px-3 py-1 text-xs font-bold shadow-xs"
                    >
                      {aboutData.education.gpa}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Right Column: Core Expertise Bento Grid */}
        <div className="space-y-4 lg:col-span-5 lg:pt-10">
          <motion.h3
            variants={itemVariants}
            className="text-foreground flex items-center gap-2 text-base font-bold tracking-tight"
          >
            <IconWrapper
              icon={Sparkles}
              size="sm"
              className="text-brand-primary"
            />
            Core Technical Expertise
          </motion.h3>

          <div className="grid grid-cols-1 gap-3.5">
            {expertiseData.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="lautan-card-accent border-border/60 bg-card/45 hover:border-brand-primary/25 hover:scale-[1.01] backdrop-blur-sm transition-all duration-300 hover:shadow-md overflow-hidden">
                  <CardContent className="p-4 sm:p-5 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl bg-gradient-to-br border ${item.color} flex items-center justify-center shrink-0`}>
                          <IconWrapper icon={item.icon} size="sm" />
                        </div>
                        <h4 className="text-foreground text-sm font-bold tracking-tight">
                          {item.title}
                        </h4>
                      </div>
                    </div>

                    {/* Skill Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-muted/50 hover:bg-brand-primary/10 hover:text-brand-primary text-muted-foreground rounded-md px-2 py-0.5 text-[10px] font-medium transition-colors border border-border/30"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
