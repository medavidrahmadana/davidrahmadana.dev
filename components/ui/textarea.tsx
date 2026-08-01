import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-border/60 bg-card/60 text-foreground placeholder:text-muted-foreground focus:border-brand-primary/40 focus:ring-brand-primary/20 flex min-h-[120px] w-full rounded-lg border px-3 py-2 text-sm backdrop-blur-sm transition-all duration-200 outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }

