"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionContainerProps extends Omit<
  HTMLMotionProps<"section">,
  "children"
> {
  enableAnimation?: boolean;
  delay?: number;
  children?: React.ReactNode;
}

export const SectionContainer = React.forwardRef<
  HTMLElement,
  SectionContainerProps
>(
  (
    { className, id, children, enableAnimation = true, delay = 0, ...props },
    ref
  ) => {
    const containerClass = cn(
      "py-16 md:py-24 first:pt-8 last:pb-16",
      className
    );

    if (enableAnimation) {
      return (
        <motion.section
          id={id}
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1], // easeOutExpo
            delay: delay,
          }}
          className={containerClass}
          {...props}
        >
          {children}
        </motion.section>
      );
    }

    // To prevent passing motion-specific props to regular section tag:
    const cleanProps = { ...props };
    delete cleanProps.initial;
    delete cleanProps.whileInView;
    delete cleanProps.viewport;
    delete cleanProps.transition;

    return (
      <section
        id={id}
        ref={ref}
        className={containerClass}
        {...(cleanProps as React.ComponentPropsWithoutRef<"section">)}
      >
        {children}
      </section>
    );
  }
);

SectionContainer.displayName = "SectionContainer";
