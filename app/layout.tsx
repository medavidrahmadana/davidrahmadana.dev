import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "David Rahmadana | Software Engineer Portfolio",
    template: "%s | David Rahmadana",
  },
  description:
    "Personal portfolio of David Rahmadana, a professional Software Engineer specializing in modern web applications, Next.js, React, and TypeScript.",
  keywords: [
    "David Rahmadana",
    "Portfolio",
    "Software Engineer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "David Rahmadana" }],
  creator: "David Rahmadana",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://davidrahmadana.dev",
    title: "David Rahmadana | Software Engineer Portfolio",
    description:
      "Personal portfolio of David Rahmadana, a professional Software Engineer specializing in modern web applications, Next.js, React, and TypeScript.",
    siteName: "David Rahmadana Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Rahmadana | Software Engineer Portfolio",
    description:
      "Personal portfolio of David Rahmadana, a professional Software Engineer specializing in modern web applications, Next.js, React, and TypeScript.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground flex min-h-screen flex-col font-sans antialiased transition-colors duration-300`}
      >
        {/* Placeholder: Navigation Header */}
        <header className="border-border bg-background/95 sticky top-0 z-50 w-full border-b backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Nav UI goes here in future task */}
            <div className="text-muted-foreground text-sm font-semibold tracking-tight">
              [Header Navigation Placeholder]
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>

        {/* Placeholder: Footer */}
        <footer className="border-border bg-muted/40 w-full border-t">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
            <span className="text-muted-foreground text-xs">
              © {new Date().getFullYear()} David Rahmadana. All rights reserved.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
