# Amirtaha Nemati — Portfolio

A personal portfolio site for **Amirtaha Nemati**, a software developer focused on full‑stack development, backend systems and modern applications. Built as a fast, bilingual (English / Persian) single‑page app with a dark, minimal, motion‑driven design.

## Features

- **Bilingual, RTL‑aware UI** — English and Persian content, with automatic layout direction switching and dedicated Persian typography (Rokh / Peyda / Dana).
- **Project showcase** — featured projects with live cover images, tech tags and links to their GitHub repositories.
- **Skills overview** — grouped by Languages, Frontend, Backend, Mobile and DevOps.
- **Live GitHub stats** — pulled at runtime via a custom hook.
- **Smooth, motion‑based interactions** powered by [Motion](https://motion.dev/) (Framer Motion successor).
- **SEO‑ready** — Open Graph / Twitter cards, JSON‑LD structured data, `sitemap.xml`, `robots.txt` and `hreflang` alternates for both languages.
- **Lazy‑mounted sections** so below‑the‑fold content doesn't compete with the initial paint.

## Tech Stack

| Layer | Tools |
|---|---|
| Framework | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build tool | [Vite](https://vitejs.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animation | [Motion](https://motion.dev/) |
| Icons | [Lucide](https://lucide.dev/) |

## Featured Projects

| Project | Stack | Repository |
|---|---|---|
| 🎨 Color Palette Extractor | Electron, React, FastAPI, Python | [color-palette-app](https://github.com/amirtahanemati/color-palette-app) |
| 📱 CourseSelection Mobile | Expo, React Native, TypeScript, Zustand | [CourseSelection-Mobile](https://github.com/amirtahanemati/CourseSelection-Mobile) |
| ☕ Digital Cafe Menu | React, TypeScript, Tailwind CSS, Framer Motion | [menu-cafe-react](https://github.com/amirtahanemati/menu-cafe-react) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs the app locally at `http://localhost:3000`.

### Production Build

```bash
npm run build
```

Type‑checks the project and outputs a production build to `dist/`.

### Preview the Build

```bash
npm run preview
```

Serves the `dist/` build locally at `http://localhost:3000` for a final check before deploying.

## Project Structure

```
src/
├── components/     # UI sections (Hero, Work, Stack, Contact, TelegramBanner, ...)
├── data/           # Site content — profile, projects, skills
├── hooks/          # Custom hooks (e.g. useGitHubStats)
├── i18n.tsx        # Language context, translations and RTL/LTR handling
├── App.tsx         # Page composition
└── main.tsx        # App entry point
public/
├── fonts/          # Local Persian fonts (WOFF2)
├── projects/       # Project cover images
├── sitemap.xml
└── robots.txt
```

## Deployment

The project builds to static files in `dist/` and can be deployed to any static host (GitHub Pages, Vercel, Netlify, or a custom domain). Before deploying to a custom domain, update the canonical URL, Open Graph tags, `hreflang` alternates, `sitemap.xml` and `robots.txt` to match the final domain.

## Connect

- **GitHub:** [@amirtahanemati](https://github.com/amirtahanemati)
- **LinkedIn:** [in/amirtahanemati](https://www.linkedin.com/in/amirtahanemati/)
- **Telegram:** [@nematidev](https://t.me/nematidev)
- **X:** [@amirtahanemati](https://x.com/amirtahanemati)
- **Instagram:** [@amirtahanemati](https://instagram.com/amirtahanemati)

## License

This repository contains personal portfolio content and is not licensed for reuse.
