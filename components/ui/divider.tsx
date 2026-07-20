import * as React from "react";
import { cn } from "@/lib/utils";

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "solid" | "gradient" | "dashed";
  orientation?: "horizontal" | "vertical";
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    { className, variant = "solid", orientation = "horizontal", ...props },
    ref
  ) => {
    const isHorizontal = orientation === "horizontal";

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={cn(
          "bg-border shrink-0",
          isHorizontal ? "h-[1px] w-full" : "h-full w-[1px]",
          variant === "dashed" && "border-border bg-transparent",
          variant === "dashed" &&
            (isHorizontal
              ? "border-t border-dashed"
              : "border-l border-dashed"),
          variant === "gradient" &&
            (isHorizontal
              ? "via-border bg-gradient-to-r from-transparent to-transparent"
              : "via-border bg-gradient-to-b from-transparent to-transparent"),
          className
        )}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";
