"use client";

import * as React from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { navItems } from "@/constants/navigation";
import { useActiveSection } from "@/hooks/use-active-section";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Active section tracking hook
  const sectionIds = React.useMemo(() => navItems.map((item) => item.href), []);
  const activeSection = useActiveSection(sectionIds);

  // Scroll event tracking for glassmorphism effect
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled
          ? "bg-background/80 border-border/80 shadow-sm backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / Brand Name */}
        <a
          href="#home"
          className="text-foreground text-lg font-bold tracking-tight transition-opacity hover:opacity-85"
          aria-label="David Rahmadana Home"
        >
          DR<span className="text-brand-primary">.</span>
        </a>

        {/* Desktop Menu */}
        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Desktop navigation"
        >
          <ul className="flex items-center gap-6 text-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <li key={item.href} className="relative py-2">
                  <a
                    href={item.href}
                    className={cn(
                      "hover:text-foreground text-muted-foreground font-medium transition-colors",
                      isActive && "text-foreground"
                    )}
                  >
                    {item.label}
                  </a>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="bg-brand-primary absolute right-0 bottom-0 left-0 h-[2px]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="bg-border h-4 w-[1px]" />

          {/* Theme Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground rounded-full"
            aria-label="Toggle theme"
          >
            {mounted && theme === "light" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </Button>
        </nav>

        {/* Mobile Actions Header */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Theme Toggle Button (Mobile) */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground rounded-full"
            aria-label="Toggle theme"
          >
            {mounted && theme === "light" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </Button>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="border-border bg-background/50 hover:bg-muted focus:ring-brand-primary/50 text-foreground flex h-10 w-10 items-center justify-center rounded-lg border focus:ring-2 focus:outline-none"
            aria-expanded={isOpen}
            aria-label="Toggle main menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer/Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="border-border bg-background/95 w-full border-b backdrop-blur-md md:hidden"
          >
            <nav className="px-4 py-6 sm:px-6" aria-label="Mobile navigation">
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={closeMenu}
                        className={cn(
                          "hover:text-foreground text-muted-foreground hover:bg-muted/40 block rounded-lg px-3 py-2 text-base font-semibold transition-colors",
                          isActive && "text-brand-primary bg-brand-primary/5"
                        )}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
