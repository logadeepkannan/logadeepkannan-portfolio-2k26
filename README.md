# Logadeep Kannan — Portfolio

Personal portfolio site for Logadeep Kannan, built with React, TypeScript, and Vite.

## Tech Stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — dev server and build tool
- [React Router](https://reactrouter.com/) — client-side routing (`/`, `/blogs`)
- [EmailJS](https://www.emailjs.com/) — contact form submission, no backend required
- Plain CSS (no framework) — all styles in `src/index.css`

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Scripts

| Command           | Description                              |
| ------------------ | ----------------------------------------- |
| `npm run dev`     | Start the Vite dev server                 |
| `npm run build`   | Type-check and build for production       |
| `npm run preview` | Preview the production build locally      |

## Project Structure

```
src/
  components/   # Section components (Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer, Cursor)
  pages/        # Route pages (Home, Blogs)
  hooks/        # useScrollReveal — IntersectionObserver-based reveal-on-scroll
  emailjsConfig.ts
  App.tsx
  main.tsx
  index.css
public/
  favicon.png   # browser tab icon
  logo-l.png    # header / footer logo
```

## Contact Form Setup

The contact form sends messages via [EmailJS](https://www.emailjs.com/). Update the keys in
`src/emailjsConfig.ts` with your own EmailJS account's public key, service ID, and template ID.

## Deployment

```bash
npm run build
```

Outputs a static site to `dist/`, deployable to any static host (Vercel, Netlify, GitHub Pages,
etc.). Since routing uses `BrowserRouter`, configure your host to fall back to `index.html` for
unknown paths (SPA fallback) so `/blogs` resolves correctly on a direct load or refresh.
