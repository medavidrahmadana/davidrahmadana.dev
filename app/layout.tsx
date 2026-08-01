import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { PremiumEffects } from "@/components/ui/premium-effects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://davidrahmadana-dev.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "David Gholi Rahmadana | Software Engineer Portfolio",
    template: "%s | David Gholi Rahmadana",
  },
  description:
    "Personal portfolio of David Gholi Rahmadana, Full-Stack Software Engineer specializing in web and mobile applications with Laravel, Vue.js, Flutter, Next.js, and RESTful APIs.",
  keywords: [
    "David Gholi Rahmadana",
    "David Rahmadana",
    "Software Engineer",
    "Full-Stack Developer",
    "Web Developer",
    "Laravel Developer",
    "Vue.js Developer",
    "Flutter Developer",
    "Next.js Developer",
    "PT Cubiconia Kanaya Pratama",
    "Banyuwangi Developer",
    "Indonesia Software Engineer",
  ],
  authors: [{ name: "David Gholi Rahmadana", url: siteUrl }],
  creator: "David Gholi Rahmadana",
  publisher: "David Gholi Rahmadana",
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "David Gholi Rahmadana | Software Engineer Portfolio",
    description:
      "Personal portfolio of David Gholi Rahmadana, Full-Stack Software Engineer specializing in web and mobile applications with Laravel, Vue.js, Flutter, Next.js, and RESTful APIs.",
    siteName: "David Gholi Rahmadana Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "David Gholi Rahmadana - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Gholi Rahmadana | Software Engineer Portfolio",
    description:
      "Personal portfolio of David Gholi Rahmadana, Full-Stack Software Engineer specializing in web and mobile applications with Laravel, Vue.js, Flutter, Next.js, and RESTful APIs.",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google04a2075495a313ae",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "David Gholi Rahmadana",
    alternateName: "David Rahmadana",
    url: siteUrl,
    image: `${siteUrl}/profile.jpg`,
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "PT Cubiconia Kanaya Pratama",
    },
    sameAs: [
      "https://github.com/medavidrahmadana",
      "https://linkedin.com/in/davidrahmadana",
    ],
    knowsAbout: [
      "Software Engineering",
      "Laravel",
      "Vue.js",
      "Nuxt.js",
      "Next.js",
      "React",
      "Flutter",
      "MySQL",
      "RESTful API",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground flex min-h-screen flex-col font-sans antialiased transition-colors duration-300`}
      >
        <ThemeProvider>
          <Navbar />
          <PremiumEffects />

          {/* Main Content Area */}
          <main className="mx-auto w-full max-w-[1440px] flex-1 px-4 py-8 sm:px-8 lg:px-12">
            {children}
          </main>

          {/* Footer Component */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
