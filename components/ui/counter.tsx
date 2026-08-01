"use client";

import * as React from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

interface CounterProps {
  value: string;
}

export function Counter({ value }: CounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract number and suffix (e.g. "16+" -> number: 16, suffix: "+")
  const numericValue = parseInt(value, 10);
  const suffix = value.replace(/[0-9]/g, "");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  React.useEffect(() => {
    if (isInView && !isNaN(numericValue)) {
      const controls = animate(count, numericValue, {
        duration: 1.5,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue, count]);

  if (isNaN(numericValue)) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
