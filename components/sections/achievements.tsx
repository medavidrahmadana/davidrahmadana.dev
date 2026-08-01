import * as React from "react";
import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { achievementsData } from "@/data/achievements";
import { IconWrapper } from "@/components/ui/icon-wrapper";

export function Achievements() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <SectionContainer id="achievements" enableAnimation={true} className="border-border/50 border-t">
      <SectionHeader
        badge="Achievements"
        title="Professional Milestones"
        subtitle="Awards, certifications and recognitions that demonstrate expertise and impact."
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 w-full"
      >
        {achievementsData.map((item, idx) => (
          <motion.div key={idx} variants={cardVariants}>
            <Card className="border-border/60 bg-card/45 hover:border-brand-primary/20 hover:shadow-brand-primary/5 hover:scale-[1.01] h-full backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-3">
                <IconWrapper icon={item.icon} size="sm" className="bg-brand-primary/10 text-brand-primary rounded-full p-2" />
                <CardTitle className="text-base font-bold tracking-tight">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 pt-2 text-sm">
                <CardDescription className="text-muted-foreground">{item.organization} • {item.date}</CardDescription>
                <p className="text-foreground">{item.description}</p>
                {item.badge && (
                  <div className="mt-2">
                    <span className="bg-brand-primary/10 text-brand-primary rounded-full px-2 py-0.5 text-xs font-medium">{item.badge}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
