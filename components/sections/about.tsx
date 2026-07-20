"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";
import {
  BookOpen,
  Calendar,
  MapPin,
  CheckCircle,
  Terminal,
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
        staggerChildren: 0.1,
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
        className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12"
      >
        {/* Left Column: Header, Summary and Education */}
        <div className="space-y-8 lg:col-span-7">
          <SectionHeader
            badge="About Me"
            title="Background & Career Journey"
            subtitle="A closer look at my academic background, core technical expertise, and professional career journey."
            className="mb-0 md:mb-0"
            enableAnimation={false}
          />

          <motion.div
            variants={itemVariants}
            className="text-muted-foreground space-y-4 text-base leading-relaxed font-light"
          >
            <p className="text-foreground/90 text-lg leading-relaxed font-medium">
              {aboutData.summary}
            </p>
            <p>{aboutData.careerOverview}</p>
          </motion.div>

          {/* Education Card */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-foreground flex items-center gap-2 text-lg font-bold tracking-tight">
              <IconWrapper
                icon={BookOpen}
                size="sm"
                className="text-brand-primary"
              />
              Education
            </h3>

            <Card className="border-border/60 bg-card/45 hover:border-brand-primary/20 backdrop-blur-sm transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <h4 className="text-foreground text-lg font-extrabold">
                      {aboutData.education.institution}
                    </h4>
                    <p className="text-brand-primary mt-1 text-sm font-medium">
                      {aboutData.education.degree}
                    </p>
                    <div className="text-muted-foreground mt-3 flex flex-wrap gap-4 text-xs">
                      <span className="flex items-center gap-1">
                        <IconWrapper icon={Calendar} size="xs" />
                        {aboutData.education.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <IconWrapper icon={MapPin} size="xs" />
                        {aboutData.education.location}
                      </span>
                    </div>
                  </div>
                  <div className="sm:text-right">
                    <Badge
                      variant="secondary"
                      className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/15 rounded-full px-3 py-1 text-xs font-semibold"
                    >
                      {aboutData.education.gpa}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Right Column: Core Expertise Grid (Aligned with left header text) */}
        <div className="space-y-6 lg:col-span-5 lg:pt-9">
          <motion.h3
            variants={itemVariants}
            className="text-foreground flex items-center gap-2 text-lg font-bold tracking-tight"
          >
            <IconWrapper
              icon={Terminal}
              size="sm"
              className="text-brand-primary"
            />
            Core Expertise
          </motion.h3>

          <div className="grid grid-cols-1 gap-4">
            {aboutData.skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border-border/60 bg-card/35 hover:border-brand-primary/20 hover:bg-card/50 transition-all duration-300">
                  <CardContent className="flex gap-4 p-5">
                    <div className="bg-brand-primary/10 text-brand-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <IconWrapper icon={CheckCircle} size="sm" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-foreground text-sm font-bold">
                        {skill.title}
                      </h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {skill.description}
                      </p>
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
