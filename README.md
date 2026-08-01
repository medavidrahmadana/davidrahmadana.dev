# David Gholi Rahmadana - Professional Software Engineer Portfolio

Personal portfolio website of **David Gholi Rahmadana**, a Full-Stack Software Engineer specializing in modern web and mobile applications with Laravel, Vue.js, Nuxt.js, Next.js, Flutter, and RESTful APIs.

Live Website: [https://davidrahmadana-dev.vercel.app](https://davidrahmadana-dev.vercel.app)

---

## ✨ Features

- 🎨 **Modern Bento Grid Layout**: Visually captivating, symmetrical bento grid architecture for Skills & About sections.
- 💻 **Interactive Screenshot Carousels**: Auto-sliding 3D browser and 19.5:9 smartphone mockups with slide controls and dot indicators.
- 📊 **GitLab Activity Calendar**: High-contrast, interactive 6-month contribution grid with exact tooltip ranges and month separation gaps.
- 📜 **Achievements Lightbox Viewer**: Interactive modal pop-up viewer for awards and certificates in high resolution.
- ⚡ **SEO & Performance Optimized**: Full metadata, OpenGraph, Twitter Cards, canonical URL, JSON-LD Schema.org structured data, sitemap.xml, and robots.txt.
- 📱 **100% Fully Responsive**: Pixel-perfect layout optimization across Mobile, Tablet, Laptop, and Desktop screens.
- 📧 **Direct Contact Integration**: Interactive contact form submitting messages directly to `me.davidrahmadana@gmail.com`.
- 🌓 **Light & Dark Theme Switching**: Smooth theme toggling with zero layout shifts.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Simple Icons](https://simpleicons.org/) (`react-icons/si`), [VS Code Icons](https://github.com/microsoft/vscode-icons) (`react-icons/vsc`), & [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```text
davidrahmadana.dev/
├── app/                  # Route handlers, layouts, sitemap, robots, & styles
│   ├── globals.css       # Main Tailwind v4 global stylesheet
│   ├── layout.tsx        # Root layout with SEO & Schema.org JSON-LD
│   ├── page.tsx          # Main showcase page
│   ├── sitemap.ts        # Next.js Metadata Route Sitemap generator
│   └── robots.ts         # Next.js Metadata Route Robots generator
├── components/           # UI & Section components
│   ├── sections/         # Hero, About, Experience, Skills, Projects, Achievements, Contact
│   ├── ui/               # Reusable atomic UI components (Button, Card, Badge, etc.)
│   ├── footer.tsx        # Responsive Footer component
│   └── navbar.tsx        # Glassmorphism Navbar component
├── data/                 # Static data sources (skills, experience, projects, contact, etc.)
├── public/               # Static assets & screenshot image subfolders
│   ├── achievements/     # Certificate image files
│   └── projects/         # Project screenshot subfolders (cubiconia, adventure, etc.)
├── tsconfig.json         # TypeScript configuration
└── next.config.ts        # Next.js configuration
```

---

## 🚀 Development Commands

| Command                | Description                                                  |
| :--------------------- | :----------------------------------------------------------- |
| `npm run dev`          | Launch local development server with Turbopack               |
| `npm run build`        | Execute production build compilation                          |
| `npm run start`        | Run production build server locally                          |
| `npm run lint`         | Check codebase for ESLint errors                             |
| `npm run format`       | Format code with Prettier                                    |

---

## ⚙️ Deployment to Vercel

1. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "feat: production release"
   git push origin main
   ```
2. Import the repository in [Vercel Dashboard](https://vercel.com).
3. Click **Deploy**. Vercel will automatically build and deploy the Next.js application.

---

## 📄 License

Copyright © {new Date().getFullYear()} David Gholi Rahmadana. All rights reserved.
