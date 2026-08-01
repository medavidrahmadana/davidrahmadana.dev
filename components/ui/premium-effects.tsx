"use client";

import * as React from "react";
import { motion, useScroll, useSpring, useMotionValue } from "framer-motion";
import { CanvasParticles } from "@/components/ui/canvas-particles";

export function PremiumEffects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Direct update for absolute positioning or custom CSS custom properties
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="bg-brand-primary fixed top-0 right-0 left-0 z-50 h-[3px] origin-[0%]"
        style={{ scaleX }}
      />

      {/* Interactive Background Canvas Particles */}
      <CanvasParticles />

      {/* SVG Mesh Grid Background Overlay */}
      <div
        className="pointer-events-none fixed inset-0 -z-45 h-full w-full opacity-[0.06] dark:opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(var(--border) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)",
        }}
      />

      {/* Global Ambient Glow Blob */}
      <div 
        className="pointer-events-none fixed inset-0 -z-50 overflow-hidden"
        aria-hidden="true"
      >
        <div 
          className="absolute h-[450px] w-[450px] rounded-full bg-brand-primary/5 dark:bg-brand-primary/3 blur-[125px] transition-transform duration-75 ease-out"
          style={{
            left: "var(--mouse-x, -9999px)",
            top: "var(--mouse-y, -9999px)",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </>
  );
}

