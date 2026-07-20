"use client";

import * as React from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download,
  Award,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { profileData } from "@/data/profile";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { SectionContainer } from "@/components/ui/section-container";
import Image from "next/image";

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
      className="relative overflow-hidden pt-8 pb-16 md:pt-16"
    >
      {/* Premium Background Glow Effect */}
      <div className="bg-brand-primary/10 pointer-events-none absolute top-1/4 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full blur-[120px] sm:h-96 sm:w-96" />
      <div className="bg-brand-secondary/5 pointer-events-none absolute top-1/3 left-1/3 -z-10 h-64 w-64 -translate-x-1/2 rounded-full blur-[100px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8"
      >
        {/* Left Content Side */}
        <div className="flex flex-col justify-center space-y-6 lg:col-span-7">
          <motion.div variants={itemVariants} className="space-y-2">
            <span className="text-brand-primary text-sm font-semibold tracking-widest uppercase">
              {profileData.title}
            </span>
            <h1 className="text-foreground text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {profileData.name}
            </h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-muted-foreground max-w-xl space-y-4 text-justify text-base leading-relaxed font-light sm:text-lg"
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
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#projects"
              className={buttonVariants({
                variant: "brand",
                size: "lg",
                className: "rounded-full px-6",
              })}
            >
              View Projects
              <IconWrapper
                icon={ArrowRight}
                size="sm"
                className="ml-2 transition-transform group-hover/button:translate-x-1"
              />
            </a>
            <a
              href={profileData.cvUrl}
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "rounded-full px-6",
              })}
            >
              Download CV
              <IconWrapper icon={Download} size="sm" className="ml-2" />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 pt-2"
          >
            {profileData.socials.map((social) => {
              const Icon = socialIcons[social.platform];
              return (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border bg-card/65 text-muted-foreground hover:text-brand-primary hover:border-brand-primary/30 focus:ring-brand-primary/50 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 focus:ring-2 focus:outline-none"
                  aria-label={`Visit my ${social.platform}`}
                >
                  <IconWrapper icon={Icon} size="sm" />
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Right Content Side: Profile Photo Placeholder */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center lg:col-span-5"
        >
          <div className="relative flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80 md:h-96 md:w-96">
            {/* Outer Animated Ring */}
            <div className="border-brand-primary/40 dark:border-brand-primary/60 absolute inset-0 animate-[spin_60s_linear_infinite] rounded-full border-2 border-dashed" />
            {/* Inner Ring Glow */}
            <div className="from-brand-primary/15 to-brand-secondary/10 dark:from-brand-primary/25 absolute inset-4 rounded-full bg-gradient-to-tr via-transparent blur-sm" />

            {/* Main Profile Photo Container */}
            <div className="border-border bg-card/50 absolute inset-6 flex flex-col items-center justify-center overflow-hidden rounded-full border backdrop-blur-md">
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
                  {/* Geometric Background Shapes */}
                  <div className="bg-brand-primary/10 absolute -top-12 -right-12 h-24 w-24 rounded-full blur-lg" />
                  <div className="bg-brand-secondary/10 absolute -bottom-12 -left-12 h-24 w-24 rounded-full blur-lg" />

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
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Grid of Statistics */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mt-16 grid grid-cols-2 gap-4 px-2 py-2 md:grid-cols-4"
      >
        {profileData.stats.map((stat, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="border-border/60 bg-card/40 hover:border-brand-primary/20 backdrop-blur-sm transition-all duration-300">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <span className="text-brand-primary mb-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-xs font-medium tracking-wide uppercase sm:text-sm">
                  {stat.label}
                </span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
