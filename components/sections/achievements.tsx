"use client";

import * as React from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { X, Maximize2, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { achievementsData, Achievement } from "@/data/achievements";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { Badge } from "@/components/ui/badge";

export function Achievements() {
  const [selectedImage, setSelectedImage] = React.useState<Achievement | null>(null);

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
            <Card className="lautan-card-accent border-border/60 bg-card/45 hover:border-brand-primary/20 hover:shadow-brand-primary/10 hover:scale-[1.01] h-full backdrop-blur-sm transition-all duration-300 hover:shadow-lg overflow-hidden flex flex-col justify-between group">
              <div>
                {/* Certificate Image Thumbnail with Hover Zoom */}
                {item.image && (
                  <div 
                    onClick={() => setSelectedImage(item)}
                    className="relative w-full aspect-[16/10] bg-neutral-900/40 overflow-hidden cursor-pointer border-b border-border/30"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1.5 text-white text-xs font-semibold backdrop-blur-[2px]">
                      <Maximize2 className="h-4 w-4" />
                      <span>View Certificate</span>
                    </div>
                  </div>
                )}

                <CardHeader className="flex flex-row items-start gap-3 p-4 pb-2">
                  <IconWrapper icon={item.icon} size="sm" className="bg-brand-primary/10 text-brand-primary rounded-lg p-2 shrink-0 mt-0.5" />
                  <div>
                    <CardTitle className="text-sm font-bold tracking-tight text-foreground leading-snug">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-xs mt-1 font-medium">
                      {item.organization}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="px-4 pb-4 space-y-2.5 text-xs">
                  <p className="text-muted-foreground leading-relaxed font-light line-clamp-3">
                    {item.description}
                  </p>
                </CardContent>
              </div>

              {/* Card Footer Badge & Date */}
              <div className="px-4 pb-4 pt-1 flex items-center justify-between border-t border-border/20">
                <span className="text-[10px] font-semibold text-muted-foreground">
                  {item.date}
                </span>
                {item.badge && (
                  <Badge variant="secondary" className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                    {item.badge}
                  </Badge>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Certificate Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-card border border-border rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-border/50 bg-muted/30">
                <div className="flex items-center gap-2.5">
                  <div className="bg-brand-primary/10 text-brand-primary rounded-lg p-1.5">
                    <IconWrapper icon={selectedImage.icon} size="xs" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">{selectedImage.title}</h3>
                    <p className="text-xs text-muted-foreground">{selectedImage.organization} • {selectedImage.date}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="h-8 w-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center text-foreground transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Modal Image View */}
              <div className="relative flex-1 bg-black/95 p-2 min-h-[300px] sm:min-h-[450px] flex items-center justify-center overflow-auto">
                {selectedImage.image && (
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    width={1200}
                    height={800}
                    className="max-h-[70vh] w-auto object-contain rounded-lg shadow-lg"
                  />
                )}
              </div>

              {/* Modal Footer Description */}
              <div className="p-4 border-t border-border/50 bg-muted/20 text-xs text-muted-foreground flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <p className="font-light leading-relaxed">{selectedImage.description}</p>
                {selectedImage.image && (
                  <a
                    href={selectedImage.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary hover:underline shrink-0"
                  >
                    <span>Open Original</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionContainer>
  );
}
