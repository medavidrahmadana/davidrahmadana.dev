"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface SectionHeaderProps extends Omit<HTMLMotionProps<"div">, "children"> {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
  enableAnimation?: boolean;
  children?: React.ReactNode;
}

export const SectionHeader = React.forwardRef<
  HTMLDivElement,
  SectionHeaderProps
>(
  (
    {
      className,
      title,
      subtitle,
      badge,
      align = "left",
      enableAnimation = true,
      children,
      ...props
    },
    ref
  ) => {
    const headerContent = (
      <div
        className={cn(
          "flex flex-col gap-3",
          align === "center"
            ? "items-center text-center"
            : "items-start text-left"
        )}
      >
        {badge && (
          <Badge
            variant="secondary"
            className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 hover:bg-brand-primary/15 rounded-full px-4 py-1 text-xs font-medium tracking-wide uppercase"
          >
            {badge}
          </Badge>
        )}
        <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed font-light sm:text-lg">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    );

    const containerClass = cn("mb-12 md:mb-16 w-full", className);

    if (enableAnimation) {
      return (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={containerClass}
          {...props}
        >
          {headerContent}
        </motion.div>
      );
    }

    // Clean up motion properties for regular div tag:
    const cleanProps = { ...props };
    delete cleanProps.initial;
    delete cleanProps.whileInView;
    delete cleanProps.viewport;
    delete cleanProps.transition;

    return (
      <div
        ref={ref}
        className={containerClass}
        {...(cleanProps as React.HTMLProps<HTMLDivElement>)}
      >
        {headerContent}
      </div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";
