"use client";

import { Laptop, Code, Sparkles, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { Divider } from "@/components/ui/divider";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";
export default function ShowcasePage() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <Hero />

      <Divider variant="gradient" />

      {/* About Section */}
      <About />

      <Divider variant="gradient" />

      {/* Experience Section */}
      <Experience />

      <Divider variant="gradient" />

      {/* Skills Section */}
      <Skills />

      <Divider variant="gradient" />

      {/* Projects Section */}
      <Projects />

      <Divider variant="gradient" />
      <Achievements />
      <Divider variant="gradient" />
      <Contact />
    </div>
  );
}
