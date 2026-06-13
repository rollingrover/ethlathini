# Ethlathini Rest Camp — Website

React + Vite website for Ethlathini Rest Camp, Hluhluwe.

## Quick start

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/
    Navbar.jsx / .css     — sticky top nav, mobile-responsive
    Footer.jsx / .css     — footer with links & contact
    Logo.jsx              — SVG logo component (reusable, dark/light prop)
  pages/
    Home.jsx / .css       — homepage
    Book.jsx / .css       — booking & rates page (with form)
    About.jsx / .css      — our story page
    FindUs.jsx / .css     — directions & map
  index.css               — global CSS + brand tokens (CSS variables)
  main.jsx                — app entry point
  App.jsx                 — routes (react-router-dom)
index.html                — HTML shell (fonts loaded here)
```

## Brand tokens (index.css)

All colours, fonts and spacing live as CSS variables in `src/index.css`:

| Variable              | Value     | Use              |
|-----------------------|-----------|------------------|
| --color-forest        | #2C1A0E   | Dark backgrounds |
| --color-marula        | #C4915A   | Primary accent   |
| --color-fig           | #639922   | Nature / eco     |
| --color-teal          | #1D9E75   | Community        |
| --color-cream         | #F5E6C8   | Light text       |
| --color-cream-light   | #FBF6EE   | Light sections   |
| --font-display        | Cormorant Garamond | Headings |
| --font-body           | Inter     | Body copy        |

