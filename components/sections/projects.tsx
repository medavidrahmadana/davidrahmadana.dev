"use client";

import * as React from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Folder,
  Github,
  ExternalLink,
  ShieldAlert,
  Award,
  Check,
} from "lucide-react";
import { projectsData } from "@/data/projects";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

export function Projects() {
  const [activeCategory, setActiveCategory] = React.useState<
    "All" | "Professional" | "Freelance" | "Academic"
  >("All");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === "All") return projectsData;
    return projectsData.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <SectionContainer
      id="projects"
      enableAnimation={true}
      className="border-border/50 border-t"
    >
      <SectionHeader
        badge="Projects"
        title="Completed Work & Showcases"
        subtitle="Galeri proyek yang telah saya selesaikan, mencakup proyek privat profesional di lingkungan korporasi maupun proyek personal."
      />

      {/* Filter Tabs */}
      <div className="mb-10 flex items-center justify-center gap-2">
        {(["All", "Professional", "Freelance", "Academic"] as const).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all duration-300 ${
              activeCategory === category
                ? "bg-brand-primary shadow-brand-primary/10 text-white shadow-md"
                : "bg-muted/40 text-muted-foreground hover:bg-muted/70 hover:text-foreground"
            }`}
          >
            {category === "All" ? "All Work" : category}
          </button>
        ))}
      </div>

      {/* Projects Grid Grid */}
      <motion.div
        layout
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 gap-8 px-1 py-1 md:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              className="relative"
            >
              {/* Project Card */}
              <Card className="border-border/60 bg-card/45 hover:border-brand-primary/20 hover:shadow-brand-primary/5 flex h-full flex-col justify-between overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
                <div>
                  {/* Top Header Section */}
                  {!project.isPrivate && (
                    <div className="border-border/40 group/image bg-muted relative h-48 w-full overflow-hidden border-b">
                      {project.coverImage ? (
                        <Image
                          src={project.coverImage}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-center transition-transform duration-500 group-hover/image:scale-[1.03]"
                        />
                      ) : (
                        <div className="from-brand-primary/15 via-brand-secondary/5 absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br to-transparent">
                          <div className="bg-brand-primary/10 text-brand-primary flex h-12 w-12 items-center justify-center rounded-full">
                            <IconWrapper icon={Folder} size="sm" />
                          </div>
                          <span className="text-muted-foreground/80 text-[10px] font-bold tracking-widest uppercase">
                            {project.subtitle}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="space-y-4 p-6">
                    {/* Private Badge and Company Name for Corporate Projects */}
                    {project.isPrivate && (
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge className="flex items-center gap-1 rounded-full border-none bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold tracking-wider text-amber-500 uppercase">
                          <IconWrapper icon={ShieldAlert} size="xs" />
                          Private Project
                        </Badge>
                        {project.company && (
                          <span className="text-xxs text-muted-foreground/60 font-semibold tracking-wider uppercase">
                            {project.company}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Title and Subtitle */}
                    <div>
                      <h3 className="text-foreground text-lg font-extrabold tracking-tight">
                        {project.title}
                      </h3>
                      {project.isPrivate && (
                        <p className="text-brand-primary mt-1 text-xs font-semibold">
                          {project.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-xs leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Technical Contribution */}
                    <div className="space-y-2 pt-2">
                      <span className="text-foreground text-[10px] font-bold tracking-wider uppercase">
                        Tanggung Jawab & Kontribusi:
                      </span>
                      <p className="text-muted-foreground flex gap-2 text-xs leading-relaxed font-light">
                        <span className="bg-brand-primary/10 text-brand-primary mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full">
                          <IconWrapper icon={Check} size="xs" />
                        </span>
                        <span>{project.contribution}</span>
                      </p>
                    </div>

                    {/* Business Impact for Private Projects */}
                    {project.isPrivate && project.businessImpact && (
                      <div className="mt-2 flex gap-3 rounded-xl border border-amber-500/15 bg-amber-500/5 p-4">
                        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                          <IconWrapper icon={Award} size="xs" />
                        </div>
                        <div className="space-y-0.5">
                          <span className="text-[10px] font-bold tracking-wider text-amber-500 uppercase">
                            Business Impact
                          </span>
                          <p className="text-xxs text-muted-foreground leading-relaxed font-light">
                            {project.businessImpact}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Section */}
                <div className="space-y-4 p-6 pt-0">
                  {/* Technologies Badges */}
                  <div className="border-border/40 flex flex-wrap gap-1.5 border-t pt-3">
                    {project.technologies.slice(0, 6).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-muted/50 hover:bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-[9px] font-semibold tracking-wide"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 6 && (
                      <Badge
                        variant="secondary"
                        className="bg-muted/50 text-muted-foreground rounded-full px-2 py-0.5 text-[9px] font-semibold"
                      >
                        +{project.technologies.length - 6} more
                      </Badge>
                    )}
                  </div>

                  {/* Buttons/Links for Public Projects */}
                  {!project.isPrivate &&
                    (project.githubUrl || project.demoUrl) && (
                      <div className="flex gap-3 pt-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={buttonVariants({
                              variant: "outline",
                              size: "xs",
                              className: "text-xxs rounded-full font-semibold",
                            })}
                          >
                            <IconWrapper
                              icon={Github}
                              size="xs"
                              className="mr-1.5"
                            />
                            Source Code
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={buttonVariants({
                              variant: "brand",
                              size: "xs",
                              className: "text-xxs rounded-full font-semibold",
                            })}
                          >
                            <IconWrapper
                              icon={ExternalLink}
                              size="xs"
                              className="mr-1.5"
                            />
                            Live Demo
                          </a>
                        )}
                      </div>
                    )}
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionContainer>
  );
}
