"use client";

import * as React from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download,
  Award,
  Sparkles,
  CheckCircle2,
  Briefcase,
  Layers,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { profileData } from "@/data/profile";
import { buttonVariants } from "@/components/ui/button";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { SectionContainer } from "@/components/ui/section-container";
import Image from "next/image";
import { Magnetic } from "@/components/ui/magnetic";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

export function Hero() {
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
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      },
    },
  };

  return (
    <SectionContainer
      id="home"
      enableAnimation={false}
      className="relative pt-12 pb-24 md:pt-24 md:pb-36 min-h-[calc(100vh-80px)] flex flex-col justify-center"
    >
      {/* Background Ambient Glow Effect */}
      <div className="bg-brand-primary/15 pointer-events-none absolute top-1/4 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full blur-[140px] sm:h-[450px] sm:w-[450px]" />
      <div className="bg-brand-secondary/10 pointer-events-none absolute top-1/3 left-1/3 -z-10 h-72 w-72 -translate-x-1/2 rounded-full blur-[120px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8 my-auto"
      >
        {/* Left Content Side */}
        <div className="flex flex-col justify-center space-y-7 lg:col-span-7">
          <motion.div variants={itemVariants} className="space-y-4">
            {/* Pulse-Dot Hero Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-primary/40 bg-card/70 px-4 py-2 backdrop-blur-md shadow-sm">
              <span className="animate-pulse-dot inline-block h-2.5 w-2.5 rounded-full bg-brand-primary" />
              <span className="text-brand-primary text-xs sm:text-sm font-bold tracking-widest uppercase">
                {profileData.title}
              </span>
            </div>

            <h1 className="text-foreground text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[56px] leading-[1.1] whitespace-nowrap">
              {profileData.name}
            </h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-muted-foreground max-w-2xl space-y-4 text-justify text-base leading-relaxed font-light sm:text-xl"
          >
            <p className="text-foreground text-justify font-medium">
              {profileData.bio}
            </p>
            {profileData.focus && (
              <p className="text-justify">
                {profileData.location ? `${profileData.location} ` : ""}
                {profileData.focus}
              </p>
            )}
          </motion.div>

          {/* Call-to-Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-3"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -4 }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={buttonVariants({
                variant: "brand",
                size: "lg",
                className: "rounded-full px-7 py-3.5 text-base shadow-lg shadow-brand-primary/15 hover:shadow-xl hover:shadow-brand-primary/25 transition-all duration-300",
              })}
            >
              View Projects
              <IconWrapper
                icon={ArrowRight}
                size="sm"
                className="ml-2 transition-transform group-hover/button:translate-x-1"
              />
            </motion.a>
            <motion.a
              href={profileData.cvUrl}
              whileHover={{ y: -4 }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "rounded-full px-7 py-3.5 text-base border-border/80 dark:border-white/20 bg-card/60 backdrop-blur-md font-bold text-foreground hover:border-brand-primary/40 hover:shadow-md transition-all duration-300",
              })}
            >
              Download CV
              <IconWrapper icon={Download} size="sm" className="ml-2" />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3.5 pt-2 overflow-visible"
          >
            {profileData.socials.map((social) => {
              const Icon = socialIcons[social.platform];
              return (
                <motion.a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  whileTap={{ y: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="border-border/80 dark:border-white/20 bg-card/75 text-muted-foreground hover:text-brand-primary hover:border-brand-primary/40 focus:ring-brand-primary/50 flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 focus:ring-2 focus:outline-none shadow-sm hover:shadow-md"
                  aria-label={`Visit my ${social.platform}`}
                >
                  <IconWrapper icon={Icon} size="sm" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Right Content Side: Enlarged Profile Photo surrounded by 4 Spaced Orbiting Badges */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center lg:col-span-5 py-10"
        >
          <div className="relative flex h-80 w-80 items-center justify-center sm:h-96 sm:w-96 md:h-[420px] md:w-[420px] lg:h-[450px] lg:w-[450px]">
            {/* Outer Animated Dash Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="border-brand-primary/40 dark:border-brand-primary/60 absolute inset-0 rounded-full border-2 border-dashed" 
            />
            {/* Inner Ring Glow */}
            <div className="from-brand-primary/25 to-brand-secondary/20 absolute inset-4 rounded-full bg-gradient-to-tr via-transparent blur-md" />

            {/* Main Profile Photo Container */}
            <motion.div 
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="border-border dark:border-white/20 bg-card/50 shadow-brand-primary/10 absolute inset-6 flex flex-col items-center justify-center overflow-hidden rounded-full border shadow-2xl backdrop-blur-md z-10"
            >
              {profileData.photoUrl ? (
                <Image
                  src={profileData.photoUrl}
                  alt={profileData.name}
                  fill
                  priority
                  className="object-cover object-[center_15%]"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                  <IconWrapper
                    icon={Award}
                    size="xl"
                    className="text-brand-primary/80 mb-3"
                  />
                  <span className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
                    Software Engineer
                  </span>
                </div>
              )}
            </motion.div>

            {/* 4 Orbital Floating Glass Badges (Spaced Further Away from Photo) */}
            
            {/* Badge 1: Top-Right (Awarded - High Top Right) */}
            <div className="animate-float-slow absolute -top-8 -right-8 sm:-top-10 sm:-right-16 lg:-top-12 lg:-right-20 bg-card/90 dark:bg-card/95 border border-brand-primary/40 dark:border-white/20 text-foreground px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2.5 z-20 backdrop-blur-md">
              <div className="bg-amber-500/15 text-amber-500 rounded-lg p-1.5 flex items-center justify-center">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">Awarded</span>
                <span className="text-xs font-extrabold text-foreground whitespace-nowrap">1x Employee of the Month</span>
              </div>
            </div>

            {/* Badge 2: Track Record (Top-Left - Staggered Lower Down & Spaced Left) */}
            <div className="animate-float-delayed absolute top-12 -left-8 sm:top-14 sm:-left-16 lg:top-16 lg:-left-20 bg-card/90 dark:bg-card/95 border border-brand-primary/40 dark:border-white/20 text-foreground px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2.5 z-20 backdrop-blur-md">
              <div className="bg-emerald-500/15 text-emerald-500 rounded-lg p-1.5 flex items-center justify-center">
                <Briefcase className="h-4 w-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">Track Record</span>
                <span className="text-xs font-extrabold text-foreground whitespace-nowrap">3+ Years Experience</span>
              </div>
            </div>

            {/* Badge 3: Mastered (Bottom-Left - Low Bottom Left & Spaced Out) */}
            <div className="animate-float-slow absolute -bottom-8 -left-8 sm:-bottom-10 sm:-left-16 lg:-bottom-12 lg:-left-20 bg-card/90 dark:bg-card/95 border border-brand-primary/40 dark:border-white/20 text-foreground px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2.5 z-20 backdrop-blur-md">
              <div className="bg-indigo-500/15 text-indigo-500 rounded-lg p-1.5 flex items-center justify-center">
                <Layers className="h-4 w-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">Mastered</span>
                <span className="text-xs font-extrabold text-foreground whitespace-nowrap">15+ Tech Stack</span>
              </div>
            </div>

            {/* Badge 4: Delivered (Bottom-Right - Middle Right & Spaced Out) */}
            <div className="animate-float-delayed absolute top-2/3 -right-8 sm:top-2/3 sm:-right-16 lg:top-2/3 lg:-right-20 bg-card/90 dark:bg-card/95 border border-brand-primary/40 dark:border-white/20 text-foreground px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2.5 z-20 backdrop-blur-md">
              <div className="bg-brand-primary/15 text-brand-primary rounded-lg p-1.5 flex items-center justify-center">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">Delivered</span>
                <span className="text-xs font-extrabold text-foreground whitespace-nowrap">16+ Client Projects</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
