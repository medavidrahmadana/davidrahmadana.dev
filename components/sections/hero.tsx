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
import { motion, Variants, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { profileData } from "@/data/profile";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { SectionContainer } from "@/components/ui/section-container";
import { Counter } from "@/components/ui/counter";
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
            <Magnetic range={50}>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={buttonVariants({
                  variant: "brand",
                  size: "lg",
                  className: "rounded-full px-6 shadow-md shadow-brand-primary/10",
                })}
              >
                View Projects
                <IconWrapper
                  icon={ArrowRight}
                  size="sm"
                  className="ml-2 transition-transform group-hover/button:translate-x-1"
                />
              </motion.a>
            </Magnetic>
            <Magnetic range={50}>
              <motion.a
                href={profileData.cvUrl}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "rounded-full px-6",
                })}
              >
                Download CV
                <IconWrapper icon={Download} size="sm" className="ml-2" />
              </motion.a>
            </Magnetic>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 pt-2"
          >
            {profileData.socials.map((social) => {
              const Icon = socialIcons[social.platform];
              return (
                <Magnetic key={social.platform} range={40} action={0.4}>
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-border bg-card/65 text-muted-foreground hover:text-brand-primary hover:border-brand-primary/30 focus:ring-brand-primary/50 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 focus:ring-2 focus:outline-none shadow-sm"
                    aria-label={`Visit my ${social.platform}`}
                  >
                    <IconWrapper icon={Icon} size="sm" />
                  </motion.a>
                </Magnetic>
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
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="border-brand-primary/40 dark:border-brand-primary/60 absolute inset-0 rounded-full border-2 border-dashed" 
            />
            {/* Inner Ring Glow */}
            <div className="from-brand-primary/15 to-brand-secondary/10 dark:from-brand-primary/25 absolute inset-4 rounded-full bg-gradient-to-tr via-transparent blur-sm" />

            {/* Main Profile Photo Container */}
            <motion.div 
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="border-border bg-card/50 shadow-brand-primary/5 absolute inset-6 flex flex-col items-center justify-center overflow-hidden rounded-full border shadow-xl backdrop-blur-md"
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
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-16 grid grid-cols-2 gap-4 px-2 py-2 md:grid-cols-4"
      >
        {profileData.stats.map((stat, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="border-border/60 bg-card/40 hover:border-brand-primary/20 hover:shadow-brand-primary/5 hover:scale-[1.02] backdrop-blur-sm transition-all duration-300 h-full">
              <CardContent className="flex flex-col items-center justify-center p-5 sm:p-6 text-center h-full">
                <span className="text-brand-primary mb-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  <Counter value={stat.value} />
                </span>
                <span className="text-foreground text-xs font-bold tracking-wide uppercase sm:text-xs">
                  {stat.label}
                </span>
                {stat.sublabel && (
                  <span className="text-muted-foreground/75 mt-1 text-[10px] sm:text-xs font-normal">
                    {stat.sublabel}
                  </span>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Sub-note line explaining scope */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-3 text-center text-[10px] sm:text-xs text-muted-foreground/60 italic font-light"
      >
        * Based on professional, freelance, and academic experience & achievements
      </motion.p>
    </SectionContainer>
  );
}
