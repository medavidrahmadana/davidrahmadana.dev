import * as React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconWrapperProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: LucideIcon;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "default" | "brand" | "muted" | "accent" | "inherit";
}

export const IconWrapper = React.forwardRef<HTMLSpanElement, IconWrapperProps>(
  (
    { className, icon: Icon, size = "md", variant = "inherit", ...props },
    ref
  ) => {
    const sizeClasses = {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
      xl: "w-8 h-8",
    };

    const wrapperClasses = {
      default: "text-foreground",
      brand: "text-brand-primary",
      muted: "text-muted-foreground",
      accent: "text-brand-accent",
      inherit: "",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex shrink-0 items-center justify-center",
          wrapperClasses[variant],
          className
        )}
        {...props}
      >
        <Icon className={cn(sizeClasses[size])} strokeWidth={1.75} />
      </span>
    );
  }
);

IconWrapper.displayName = "IconWrapper";
