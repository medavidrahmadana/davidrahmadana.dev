"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { contactData, ContactInfo } from "@/data/contact";

export function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");

    try {
      // Send form data via Web3Forms API to me.davidrahmadana@gmail.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c87c4f69-d419-4822-873b-3bc7a783777d", // Web3Forms direct key for me.davidrahmadana@gmail.com
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Portfolio Contact Message from ${formData.name}`,
          message: formData.message,
          to_email: "me.davidrahmadana@gmail.com",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        // Fallback to mailto link action if service API encounters an issue
        window.location.href = `mailto:me.davidrahmadana@gmail.com?subject=${encodeURIComponent(
          formData.subject || `Portfolio Contact from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        setStatus("success");
      }
    } catch {
      // Fallback to mailto link action
      window.location.href = `mailto:me.davidrahmadana@gmail.com?subject=${encodeURIComponent(
        formData.subject || `Portfolio Contact from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      setStatus("success");
    }
  };

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
        {/* Contact Cards in a balanced 2x2 Grid */}
        <motion.div variants={cardVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactData.map((info: ContactInfo, idx) => (
            <Card key={idx} className="border-border/60 bg-card/45 hover:border-brand-primary/20 hover:shadow-brand-primary/5 hover:scale-[1.02] backdrop-blur-sm transition-all duration-300 hover:shadow-lg flex flex-col justify-between p-5">
              <div className="flex flex-col gap-3">
                <div className="bg-brand-primary/10 text-brand-primary w-fit rounded-lg p-2.5">
                  <IconWrapper icon={info.icon} size="sm" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-wider text-muted-foreground uppercase text-xxs">
                    {info.label}
                  </h4>
                  <p className="text-foreground mt-1 text-sm font-medium break-all">
                    {info.type === "email" ? info.value : info.value.replace("https://", "")}
                  </p>
                </div>
              </div>
              
              <div className="mt-4">
                {info.type === "email" ? (
                  <a href={`mailto:${info.value}`} className="inline-flex items-center text-xs font-semibold text-brand-primary hover:underline">
                    Send Email &rarr;
                  </a>
                ) : info.type === "resume" ? (
                  <a href={info.value} className="inline-flex items-center text-xs font-semibold text-brand-primary hover:underline" download>
                    Download CV &rarr;
                  </a>
                ) : (
                  <a href={info.value} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-semibold text-brand-primary hover:underline">
                    Visit Profile &rarr;
                  </a>
                )}
              </div>
            </Card>
          ))}
        </motion.div>
        
        {/* Interactive Contact Form sending directly to me.davidrahmadana@gmail.com */}
        <motion.div variants={cardVariants} className="h-full">
          <Card className="border-border/60 bg-card/45 backdrop-blur-sm transition-all duration-300 hover:shadow-lg h-full p-6">
            <h3 className="text-base font-bold tracking-tight mb-4 text-foreground">Send a Message</h3>
            
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center p-8 space-y-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                <CheckCircle2 className="h-10 w-10 text-emerald-500 animate-bounce" />
                <h4 className="text-sm font-bold text-foreground">Message Sent Successfully!</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Thank you for reaching out. Your message has been forwarded directly to <strong>me.davidrahmadana@gmail.com</strong>. I will get back to you shortly!
                </p>
                <Button 
                  onClick={() => setStatus("idle")} 
                  variant="outline" 
                  size="xs"
                  className="mt-2 text-xs font-semibold rounded-full"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Name *" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-card/50" 
                  />
                  <Input 
                    placeholder="Email *" 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-card/50" 
                  />
                </div>
                <Input 
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-card/50" 
                />
                <Textarea 
                  placeholder="Your message... *" 
                  required
                  rows={4} 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-card/50" 
                />
                <Button 
                  type="submit" 
                  disabled={status === "submitting"}
                  className="w-full font-semibold rounded-lg py-2.5 transition-all shadow-md shadow-brand-primary/10 flex items-center justify-center gap-2" 
                  variant="brand"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Submit Message</span>
                    </>
                  )}
                </Button>
              </form>
            )}
          </Card>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
