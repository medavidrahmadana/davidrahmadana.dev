"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-border/60 bg-card/60 w-full border-t backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row sm:px-8 lg:px-12">
        {/* Left: Brand DGR Landscape in Light Mode & Clean Text in Dark Mode */}
        <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
          {/* Light Mode: DGR Landscape Image with mix-blend-multiply */}
          <div className="block dark:hidden">
            <Image
              src="/DGR Landscape Transparan.png"
              alt="DGR - David Gholi Rahmadana"
              width={260}
              height={70}
              className="h-12 sm:h-14 w-auto object-contain transition-all duration-300"
            />
          </div>

          {/* Dark Mode: Clean Text "David Gholi Rahmadana • Software Engineer" */}
          <div className="hidden dark:flex items-center gap-2">
            <span className="text-foreground font-bold tracking-tight text-sm">
              David Gholi Rahmadana
            </span>
            <span className="text-muted-foreground text-xs">•</span>
            <span className="text-brand-primary text-xs font-semibold">
              Software Engineer
            </span>
          </div>

          <p className="text-muted-foreground text-xs font-light">
            © {new Date().getFullYear()} David Gholi Rahmadana. All rights reserved.
          </p>
        </div>

        {/* Center: Tech Stack Badge */}
        <div className="text-muted-foreground flex items-center gap-1.5 text-xs font-medium bg-muted/40 border border-border/40 rounded-full px-3 py-1">
          <span>Built with Next.js, React & Tailwind</span>
          <Heart className="h-3 w-3 text-rose-500 fill-rose-500 inline" />
        </div>

        {/* Right: Social Links & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/medavidrahmadana"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-muted-foreground hover:text-foreground hover:bg-muted/60 flex h-8 w-8 items-center justify-center rounded-full transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/davidrahmadana"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-muted-foreground hover:text-foreground hover:bg-muted/60 flex h-8 w-8 items-center justify-center rounded-full transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:me.davidrahmadana@gmail.com"
            aria-label="Send Email"
            className="text-muted-foreground hover:text-foreground hover:bg-muted/60 flex h-8 w-8 items-center justify-center rounded-full transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="border-border/60 hover:bg-muted hover:border-brand-primary/40 flex h-8 w-8 items-center justify-center rounded-full border transition-all"
          >
            <ArrowUp className="h-4 w-4 text-brand-primary" />
          </button>
        </div>
      </div>
    </footer>
  );
}
