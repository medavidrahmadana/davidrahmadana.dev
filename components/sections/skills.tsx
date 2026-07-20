"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";
import { Server, Laptop, Smartphone, Database, Cpu } from "lucide-react";
import { skillsData, Skill } from "@/data/skills";
import { Card, CardContent } from "@/components/ui/card";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";

const categoryIcons = {
  Backend: Server,
  Frontend: Laptop,
  Mobile: Smartphone,
  Database: Database,
  Tools: Cpu,
};

export function Skills() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
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

  // Group skills by category
  const categories = React.useMemo(() => {
    const groups: Record<Skill["category"], string[]> = {
      Backend: [],
      Frontend: [],
      Mobile: [],
      Database: [],
      Tools: [],
    };
    skillsData.forEach((skill) => {
      groups[skill.category].push(skill.name);
    });
    return Object.entries(groups) as [Skill["category"], string[]][];
  }, []);

  return (
    <SectionContainer
      id="skills"
      enableAnimation={true}
      className="border-border/50 border-t"
    >
      <SectionHeader
        badge="Skills"
        title="Technical Expertise"
        subtitle="Daftar tumpukan teknologi dan perkakas pengembangan yang saya kuasai dan gunakan dalam membangun solusi perangkat lunak."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-12 grid grid-cols-1 gap-6 px-1 py-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {categories.map(([category, skills]) => {
          const Icon = categoryIcons[category];
          return (
            <motion.div key={category} variants={cardVariants}>
              <Card className="border-border/60 bg-card/45 hover:border-brand-primary/20 hover:shadow-brand-primary/5 h-full backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
                <CardContent className="space-y-4 p-6">
                  {/* Category Header */}
                  <div className="border-border/40 flex items-center gap-3 border-b pb-3">
                    <div className="bg-brand-primary/10 text-brand-primary flex h-9 w-9 items-center justify-center rounded-full">
                      <IconWrapper icon={Icon} size="sm" />
                    </div>
                    <h3 className="text-foreground text-base font-bold tracking-tight">
                      {category}
                    </h3>
                  </div>

                  {/* Skills Tag List */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-muted/40 hover:bg-brand-primary/10 hover:text-brand-primary border-border/60 text-muted-foreground cursor-default rounded-full border px-3 py-1 text-xs font-medium transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionContainer>
  );
}
