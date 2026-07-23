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
      <Divider variant="gradient" />

      {/* Grid of Custom Components */}
      <SectionContainer delay={0.2}>
        <SectionHeader
          badge="Komponen Utama"
          title="Showcase Komponen UI"
          subtitle="Daftar komponen dasar yang siap digunakan untuk membangun halaman utama portofolio."
          align="center"
        />

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <Card className="border-border/60 bg-card/60 hover:border-brand-primary/30 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-brand-primary/10 rounded-lg p-2">
                  <IconWrapper icon={Code} variant="brand" size="md" />
                </div>
                <CardTitle className="text-lg">Clean Architecture</CardTitle>
              </div>
              <CardDescription className="pt-2">
                Struktur proyek terorganisir dengan modularitas yang tinggi.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm font-light">
              Mendukung routing Next.js 15, path alias kustom, formatting
              terpadu dengan Prettier, dan linter statis ESLint yang super
              ketat.
            </CardContent>
            <CardFooter className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Tech: Next.js + TS</span>
              <Badge variant="outline" className="rounded-full text-[10px]">
                Active
              </Badge>
            </CardFooter>
          </Card>

          {/* Card 2 */}
          <Card className="border-border/60 bg-card/60 hover:border-brand-secondary/30 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-brand-secondary/10 rounded-lg p-2">
                  <IconWrapper icon={Laptop} variant="accent" size="md" />
                </div>
                <CardTitle className="text-lg">Design System</CardTitle>
              </div>
              <CardDescription className="pt-2">
                Warna, tipografi, dan animasi terpusat secara konsisten.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm font-light">
              Didesain menggunakan skema variabel CSS Tailwind CSS v4 dengan
              gamut warna OKLCH yang kaya dan smooth di layar modern.
            </CardContent>
            <CardFooter className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">
                Styling: Tailwind v4
              </span>
              <Badge
                variant="secondary"
                className="bg-brand-secondary/15 text-brand-secondary border-brand-secondary/20 rounded-full text-[10px]"
              >
                Stable
              </Badge>
            </CardFooter>
          </Card>

          {/* Card 3 */}
          <Card className="border-border/60 bg-card/60 hover:border-brand-accent/30 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="bg-brand-accent/10 rounded-lg p-2">
                  <IconWrapper
                    icon={Sparkles}
                    size="md"
                    className="text-brand-accent"
                  />
                </div>
                <CardTitle className="text-lg">Micro-Animations</CardTitle>
              </div>
              <CardDescription className="pt-2">
                Animasi transisi halus bertenaga Framer Motion.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm font-light">
              Semua konten pembungkus seperti SectionContainer dan SectionHeader
              mendukung efek visual entrance fade/slide yang sangat ramah
              performa.
            </CardContent>
            <CardFooter className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Anim: Framer Motion</span>
              <Badge variant="outline" className="rounded-full text-[10px]">
                Interactive
              </Badge>
            </CardFooter>
          </Card>
        </div>
      </SectionContainer>

      <Divider variant="gradient" />

      {/* Spacing & Badges Showcase */}
      <SectionContainer delay={0.3}>
        <div className="border-border bg-card/40 mx-auto max-w-3xl rounded-2xl border p-6 md:p-8">
          <div className="mb-4 flex items-center gap-2">
            <IconWrapper icon={Terminal} variant="muted" size="sm" />
            <h3 className="text-base font-semibold tracking-tight">
              System Info
            </h3>
          </div>
          <p className="text-muted-foreground mb-6 text-sm leading-relaxed font-light">
            Di bawah ini adalah variasi Badge yang dapat kamu gunakan sebagai
            penanda teknologi (Tags) pada detail portofolio atau pengalaman
            kerjamu.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-brand-primary border-brand-primary/20 rounded-full px-3 text-white">
              Next.js 15
            </Badge>
            <Badge className="bg-brand-secondary border-brand-secondary/20 rounded-full px-3 text-white">
              Tailwind CSS v4
            </Badge>
            <Badge className="bg-brand-accent border-brand-accent/20 rounded-full px-3 text-white">
              TypeScript
            </Badge>
            <Badge variant="secondary" className="rounded-full px-3">
              Framer Motion
            </Badge>
            <Badge variant="outline" className="rounded-full px-3">
              Lucide Icons
            </Badge>
            <Badge variant="destructive" className="rounded-full px-3">
              Strict Quality
            </Badge>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
