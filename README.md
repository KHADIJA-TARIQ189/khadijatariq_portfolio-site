# Khadija Tariq — Portfolio Website

A single-page developer portfolio for Khadija Tariq — Backend Development & AI —
styled as a code editor. Built with plain HTML, CSS, and vanilla JavaScript,
no frameworks or build step.

**Live site:** https://khadijatariq-portfolio-site.vercel.app/
**Repo:** https://github.com/KHADIJA-TARIQ189/khadijatariq_portfolio-site

## Preview

`about.js` → `projects.js` → `contact.js` — the whole site is written as
three "files" in a fake code editor UI, navigated by sidebar tabs (or a
slide-out ☰ menu on mobile).

## Features

- Editor-themed UI: title bar, sidebar file tabs, syntax-highlighted text
- Scroll-spy navigation — active tab updates via `IntersectionObserver`
- Responsive layout with a collapsible mobile nav (breakpoints at 860px / 680px / 420px)
- Accessible: visible keyboard focus states, `aria-expanded` on the menu toggle, respects `prefers-reduced-motion`
- Zero dependencies, zero build step — pure static HTML/CSS/JS

## Tech stack

`HTML5` · `CSS3` (custom properties, Grid, clamp()) · `Vanilla JavaScript` · Fonts: JetBrains Mono + Inter

## Project structure

```
├── index.html                    # markup for about / projects / contact
├── style.css                     # all styling, incl. responsive rules
├── script.js                     # mobile menu + scroll-spy nav
├── favicon.svg
├── .nojekyll                     # disables Jekyll processing on GitHub Pages
├── netlify.toml                  # Netlify config + cache headers
├── vercel.json                   # Vercel config + cache headers
├── package.json                  # local dev script only
└── .github/workflows/deploy.yml  # auto-deploy to GitHub Pages on push to main
```

## Running locally

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Deployment

Already configured for all three of these — pick one:

| Platform | How |
|---|---|
| **Vercel** | `vercel --prod` (or connect the GitHub repo in the Vercel dashboard for auto-deploys on push) |
| **Netlify** | `netlify deploy --prod`, publish directory `.` |
| **GitHub Pages** | Push to `main` — `.github/workflows/deploy.yml` builds and publishes automatically. Enable it once under **Settings → Pages → Source → GitHub Actions** |

## Contact

- GitHub: [github.com/KHADIJA-TARIQ189](https://github.com/KHADIJA-TARIQ189)
- LinkedIn: [linkedin.com/in/khadija-tariq-a91ba0416](https://www.linkedin.com/in/khadija-tariq-a91ba0416)
- Email: khadijatariq717@gmail.com
