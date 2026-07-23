import * as React from "react";
import { motion, Variants } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { contactData, ContactInfo } from "@/data/contact";

export function Contact() {
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <SectionContainer id="contact" enableAnimation={true} className="border-border/50 border-t">
      <SectionHeader
        badge="Contact"
        title="Get in Touch"
        subtitle="Feel free to reach out via any of the channels below or send a quick message."
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2"
      >
        {/* Contact Cards */}
        <motion.div variants={cardVariants} className="space-y-4">
          {contactData.map((info: ContactInfo, idx) => (
            <Card key={idx} className="border-border/60 bg-card/45 hover:border-brand-primary/20 hover:shadow-brand-primary/5 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-3">
                <IconWrapper icon={info.icon} size="sm" className="bg-brand-primary/10 text-brand-primary rounded-full p-2" />
                <CardTitle className="text-base font-bold tracking-tight">{info.label}</CardTitle>
              </CardHeader>
              <CardContent className="pt-2 text-sm">
                {info.type === "email" ? (
                  <a href={`mailto:${info.value}`} className="text-brand-primary underline">
                    {info.value}
                  </a>
                ) : info.type === "resume" ? (
                  <a href={info.value} className="text-brand-primary underline" download>
                    Download Resume
                  </a>
                ) : (
                  <a href={info.value} target="_blank" rel="noopener noreferrer" className="text-brand-primary underline">
                    {info.value}
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </motion.div>
        {/* Contact Form */}
        <motion.div variants={cardVariants} className="space-y-4">
          <Card className="border-border/60 bg-card/45 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Name" />
              <Input placeholder="Email" type="email" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Your message..." rows={5} />
              <Button type="submit" className="mt-2 w-full" variant="brand">
                Submit
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
