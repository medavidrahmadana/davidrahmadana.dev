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
  AlertCircle,
} from "lucide-react";
import { projectsData } from "@/data/projects";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { buttonVariants } from "@/components/ui/button";
import { GitLabActivity } from "@/components/ui/gitlab-activity";
import Image from "next/image";

export function Projects() {
  const [activeCategory, setActiveCategory] = React.useState<
    "All" | "Professional" | "Freelance" | "Academic"
  >("All");

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === "All") return projectsData;
    return projectsData.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  const [activeSlides, setActiveSlides] = React.useState<Record<string, number>>({});

  const getProjectTotalImages = React.useCallback((title: string) => {
    const proj = projectsData.find((p) => p.title === title);
    if (!proj) return 1;
    if (proj.galleryImages && proj.galleryImages.length > 0) {
      return proj.galleryImages.length;
    }
    return 1;
  }, []);

  const handleNext = (title: string) => {
    const total = getProjectTotalImages(title);
    setActiveSlides((prev) => ({
      ...prev,
      [title]: ((prev[title] || 0) + 1) % total,
    }));
  };

  const handlePrev = (title: string) => {
    const total = getProjectTotalImages(title);
    setActiveSlides((prev) => ({
      ...prev,
      [title]: ((prev[title] || 0) - 1 + total) % total,
    }));
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlides((prev) => {
        const next = { ...prev };
        filteredProjects.forEach((p) => {
          const total = p.galleryImages && p.galleryImages.length > 0 ? p.galleryImages.length : 1;
          next[p.title] = ((prev[p.title] || 0) + 1) % total;
        });
        return next;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [filteredProjects]);

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

  return (
    <SectionContainer
      id="projects"
      enableAnimation={true}
      className="border-border/50 border-t"
    >
      <SectionHeader
        badge="Projects"
        title="Completed Work & Showcases"
        subtitle="A gallery of projects I have delivered, featuring both private corporate applications and public open-source implementations."
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

      {/* Projects Grid Container (Full-width list layout) */}
      <motion.div
        layout
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 gap-8 px-1 py-1"
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
              className="relative w-full"
            >
              {/* Project Card */}
              <Card className="lautan-card-accent border-border/60 bg-card/45 hover:border-brand-primary/20 hover:shadow-brand-primary/10 hover:scale-[1.005] flex h-full flex-col justify-between overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
                {project.isPrivate ? (
                  <div className="grid grid-cols-1 xl:grid-cols-12 h-full">
                    {/* Left details & tech badges */}
                    <div className="xl:col-span-7 flex flex-col justify-between p-6 h-full space-y-6">
                      <div className="space-y-4">
                        {/* Header, private badge */}
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="warning" className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase">
                            <IconWrapper icon={ShieldAlert} size="xs" />
                            Private Project
                          </Badge>
                          {project.company && (
                            <span className="text-xxs text-muted-foreground/60 font-semibold tracking-wider uppercase">
                              {project.company}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <div>
                          <h3 className="text-foreground text-lg font-extrabold tracking-tight">
                            {project.title}
                          </h3>
                          <p className="text-brand-primary mt-1 text-xs font-semibold">
                            {project.subtitle}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground text-xs leading-relaxed font-light">
                          {project.description}
                        </p>

                        {/* Contribution */}
                        <div className="space-y-2 pt-2">
                          <span className="text-foreground text-[10px] font-bold tracking-wider uppercase">
                            Key Contribution & Responsibility:
                          </span>
                          <p className="text-muted-foreground flex gap-2 text-xs leading-relaxed font-light">
                            <span className="bg-brand-primary/10 text-brand-primary mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full">
                              <IconWrapper icon={Check} size="xs" />
                            </span>
                            <span>{project.contribution}</span>
                          </p>
                        </div>

                        {/* Business Impact */}
                        {project.businessImpact && (
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

                      {/* Tech badges */}
                      <div className="border-border/40 flex flex-wrap gap-1.5 border-t pt-3">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-muted/50 hover:bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-[9px] font-semibold tracking-wide"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Right GitLab Activity & Preview */}
                    <div className="xl:col-span-5 p-6 flex flex-col justify-center gap-4 bg-muted/10 xl:border-l border-t xl:border-t-0 border-border/20">
                      <GitLabActivity />
                      {/* Dynamic Interactive Frontend UI Carousel Showcase for Private Project */}
                      <div className="relative border border-border/60 bg-card/40 rounded-xl overflow-hidden aspect-[16/9] flex flex-col group/browser">
                        {/* Browser Header */}
                        <div className="h-6 bg-muted/90 dark:bg-neutral-900 border-b border-border/40 flex items-center px-3 gap-1.5 relative shrink-0">
                          <div className="flex gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          </div>
                          <div className="absolute left-1/2 -translate-x-1/2 w-[55%] rounded bg-card/65 dark:bg-neutral-950/75 px-2 py-0.5 text-[8px] text-muted-foreground/80 text-center border border-border/10 truncate select-none">
                            PT Cubiconia Project
                          </div>
                        </div>

                        {/* Screen Content Carousel */}
                        <div className="relative flex-1 bg-muted/5 overflow-hidden">
                          {(() => {
                            const images = project.galleryImages && project.galleryImages.length > 0
                              ? project.galleryImages
                              : [project.coverImage || ""];
                            const totalImages = images.length;
                            const activeIdx = activeSlides[project.title] || 0;

                            return (
                              <>
                                <div 
                                  className="absolute inset-0 transition-transform duration-700 ease-in-out flex flex-row h-full"
                                  style={{ 
                                    width: `${totalImages * 100}%`,
                                    transform: `translateX(-${(activeIdx * 100) / totalImages}%)` 
                                  }}
                                >
                                  {images.map((imgSrc, slideIdx) => (
                                    <div 
                                      key={slideIdx} 
                                      className="h-full relative flex items-center justify-center"
                                      style={{ width: `${100 / totalImages}%` }}
                                    >
                                      {imgSrc ? (
                                        <Image
                                          src={imgSrc}
                                          alt={`Frontend UI Preview slide ${slideIdx + 1}`}
                                          fill
                                          priority={slideIdx === 0}
                                          className="object-contain object-top p-1"
                                        />
                                      ) : null}
                                    </div>
                                  ))}
                                </div>

                                {/* Manual Clickable Navigation Controls */}
                                <button
                                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); handlePrev(project.title); }}
                                  className="absolute left-2 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-black/60 hover:bg-black/85 flex items-center justify-center text-white opacity-0 group-hover/browser:opacity-100 transition-opacity z-10 shadow-lg text-xs"
                                >
                                  &larr;
                                </button>
                                <button
                                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleNext(project.title); }}
                                  className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-black/60 hover:bg-black/85 flex items-center justify-center text-white opacity-0 group-hover/browser:opacity-100 transition-opacity z-10 shadow-lg text-xs"
                                >
                                  &rarr;
                                </button>

                                {/* Slide Dot Indicators */}
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-full max-w-[90%] overflow-x-auto">
                                  {images.map((_, idx) => (
                                    <span
                                      key={idx}
                                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveSlides(prev => ({ ...prev, [project.title]: idx })); }}
                                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer shrink-0 ${
                                        activeIdx === idx ? "bg-white w-3" : "bg-white/40 w-1.5"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </>
                            );
                          })()}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 xl:grid-cols-12 h-full">
                    {/* Left details & tech badges */}
                    <div className="xl:col-span-7 flex flex-col justify-between p-6 h-full space-y-6">
                      <div className="space-y-4">
                        {/* Tag Subtitle */}
                        <span className="text-brand-primary text-xs font-semibold uppercase tracking-wider">
                          {project.subtitle}
                        </span>

                        {/* Title */}
                        <div>
                          <h3 className="text-foreground text-lg font-extrabold tracking-tight">
                            {project.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground text-xs leading-relaxed font-light">
                          {project.description}
                        </p>

                        {/* Technical Contribution */}
                        <div className="space-y-2 pt-2">
                          <span className="text-foreground text-[10px] font-bold tracking-wider uppercase">
                            Key Contribution & Responsibility:
                          </span>
                          <p className="text-muted-foreground flex gap-2 text-xs leading-relaxed font-light">
                            <span className="bg-brand-primary/10 text-brand-primary mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full">
                              <IconWrapper icon={Check} size="xs" />
                            </span>
                            <span>{project.contribution}</span>
                          </p>
                        </div>
                      </div>

                      {/* Footer containing Tech Badges and Links */}
                      <div className="space-y-4 border-t border-border/40 pt-4">
                        {/* Technologies Badges */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-muted/50 hover:bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-[9px] font-semibold tracking-wide"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        {/* Buttons/Links for Public Projects */}
                        {(project.githubUrl || project.demoUrl) && (
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
                              project.isDemoActive !== false ? (
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
                              ) : (
                                <div className="group relative inline-block">
                                  <button
                                    type="button"
                                    disabled
                                    className={buttonVariants({
                                      variant: "outline",
                                      size: "xs",
                                      className: "text-xxs rounded-full font-semibold opacity-60 cursor-not-allowed bg-muted text-muted-foreground border-muted-foreground/20 hover:bg-muted",
                                    })}
                                  >
                                    <IconWrapper
                                      icon={AlertCircle}
                                      size="xs"
                                      className="mr-1.5 text-amber-500"
                                    />
                                    Demo Inactive
                                  </button>

                                  <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden w-48 rounded-md bg-popover p-2 text-center text-[10px] text-popover-foreground shadow-md border border-border group-hover:block z-50">
                                    The original live deployment is no longer active or has been relocated.
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Device Mockup Preview (Edge-to-Edge Showcase) */}
                    <div className="xl:col-span-5 p-0 flex flex-col justify-center bg-neutral-950/5 xl:border-l border-t xl:border-t-0 border-border/20 overflow-hidden relative min-h-[340px] sm:min-h-[375px] w-full">
                      {project.technologies.includes("Flutter") || project.title.toLowerCase().includes("mobile") || project.title.toLowerCase().includes("adventure") ? (
                        /* Horizontal Dynamic Mobile Carousel with Active Focus & Scale Transition */
                        <div className="w-full h-full bg-neutral-950/95 relative overflow-hidden flex items-center justify-center p-3 select-none group/mobile">
                          {(() => {
                            const images = project.galleryImages && project.galleryImages.length > 0
                              ? project.galleryImages
                              : [project.coverImage || ""];
                            const activeIdx = activeSlides[project.title] || 0;

                            return (
                              <>
                                <div className="w-full flex gap-2 sm:gap-2.5 justify-center items-center py-2 shrink-0 overflow-x-auto">
                                  {images.map((imgSrc, idx) => {
                                    const isActive = activeIdx === idx;

                                    return (
                                      <div
                                        key={idx}
                                        onClick={() => setActiveSlides(prev => ({ ...prev, [project.title]: idx }))}
                                        className={`relative bg-neutral-900 overflow-hidden shrink-0 cursor-pointer transition-all duration-500 ease-out ${
                                          isActive
                                            ? "w-[125px] h-[270px] sm:w-[142px] sm:h-[305px] rounded-[24px] z-20 scale-105 border-[3.5px] border-neutral-100 shadow-[0_0_28px_rgba(255,255,255,0.4)] opacity-100"
                                            : "w-[98px] h-[210px] sm:w-[110px] sm:h-[236px] rounded-[18px] z-10 opacity-55 scale-95 border-[2.5px] border-neutral-800/80 hover:opacity-85 hover:scale-100"
                                        }`}
                                      >
                                        {/* Dynamic Island / Pill Camera Notch */}
                                        <div className={`absolute top-2 left-1/2 -translate-x-1/2 bg-black rounded-full z-15 transition-all ${
                                          isActive ? "w-8 h-2.5 border border-neutral-800" : "w-6 h-1.5"
                                        }`} />
                                        <Image
                                          src={imgSrc}
                                          alt={`Mobile screen ${idx + 1}`}
                                          fill
                                          priority={idx === 0}
                                          className="object-cover object-top"
                                        />
                                      </div>
                                    );
                                  })}
                                </div>

                                {/* Manual Clickable Navigation Buttons */}
                                <button
                                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); handlePrev(project.title); }}
                                  className="absolute left-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-black/70 hover:bg-black flex items-center justify-center text-white opacity-0 group-hover/mobile:opacity-100 transition-opacity z-30 shadow-lg text-xs"
                                >
                                  &larr;
                                </button>
                                <button
                                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleNext(project.title); }}
                                  className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-black/70 hover:bg-black flex items-center justify-center text-white opacity-0 group-hover/mobile:opacity-100 transition-opacity z-30 shadow-lg text-xs"
                                >
                                  &rarr;
                                </button>

                                {/* Slide Dot Indicators */}
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-30 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-full max-w-[90%] overflow-x-auto">
                                  {images.map((_, idx) => (
                                    <span
                                      key={idx}
                                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveSlides(prev => ({ ...prev, [project.title]: idx })); }}
                                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer shrink-0 ${
                                        activeIdx === idx ? "bg-white w-3" : "bg-white/40 w-1.5"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </>
                            );
                          })()}
                        </div>
                      ) : (
                        /* Web Browser Mockup Carousel (Edge-to-Edge) */
                        <div className="w-full h-full flex flex-col">
                          {/* Browser Header */}
                          <div className="h-7 bg-muted/90 dark:bg-neutral-900 border-b border-border/40 flex items-center px-4 gap-1.5 relative shrink-0">
                            <div className="flex gap-1.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            </div>
                            {project.demoUrl && (
                              <div className="absolute left-1/2 -translate-x-1/2 w-[55%] rounded bg-card/65 dark:bg-neutral-950/75 px-2 py-0.5 text-[8px] text-muted-foreground/80 text-center border border-border/10 truncate select-none">
                                {project.demoUrl.replace("https://", "")}
                              </div>
                            )}
                          </div>
                          
                          {/* Browser Screen Content with Horizontal Auto-Slide Translation */}
                          <div className="relative flex-1 bg-muted/5 overflow-hidden group/browser">
                            {(() => {
                              const images = project.galleryImages && project.galleryImages.length > 0
                                ? project.galleryImages
                                : [project.coverImage || ""];
                              const totalImages = images.length;
                              const activeIdx = activeSlides[project.title] || 0;

                              return (
                                <>
                                  <div 
                                    className="absolute inset-0 transition-transform duration-700 ease-in-out flex flex-row h-full"
                                    style={{ 
                                      width: `${totalImages * 100}%`,
                                      transform: `translateX(-${(activeIdx * 100) / totalImages}%)` 
                                    }}
                                  >
                                    {images.map((imgSrc, slideIdx) => (
                                      <div 
                                        key={slideIdx} 
                                        className="h-full relative"
                                        style={{ width: `${100 / totalImages}%` }}
                                      >
                                        <Image
                                          src={imgSrc || ""}
                                          alt={`${project.title} slide ${slideIdx + 1}`}
                                          fill
                                          priority={slideIdx === 0}
                                          className="object-contain object-top p-1 sm:p-2"
                                        />
                                      </div>
                                    ))}
                                  </div>

                                  {/* Manual Clickable Sliders */}
                                  <button
                                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); handlePrev(project.title); }}
                                    className="absolute left-2.5 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-black/60 hover:bg-black/85 flex items-center justify-center text-white opacity-0 group-hover/browser:opacity-100 transition-opacity z-10 shadow-lg text-xs"
                                  >
                                    &larr;
                                  </button>
                                  <button
                                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleNext(project.title); }}
                                    className="absolute right-2.5 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-black/60 hover:bg-black/85 flex items-center justify-center text-white opacity-0 group-hover/browser:opacity-100 transition-opacity z-10 shadow-lg text-xs"
                                  >
                                    &rarr;
                                  </button>

                                  {/* Slide Dot Indicators */}
                                  <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/40 backdrop-blur-xs px-2 py-1 rounded-full max-w-[90%] overflow-x-auto">
                                    {images.map((_, idx) => (
                                      <span
                                        key={idx}
                                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveSlides(prev => ({ ...prev, [project.title]: idx })); }}
                                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer shrink-0 ${
                                          activeIdx === idx ? "bg-white w-3" : "bg-white/50 w-1.5"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </>
                              );
                            })()}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionContainer>
  );
}


