# Portfolio Site — Contact & Website Deployment

A single-page, static developer portfolio styled as a code editor, with an
**About**, **Projects**, and **Contact** section. No build tools or
frameworks required — it's plain HTML/CSS/JS, so it can be deployed as-is
to GitHub Pages, Netlify, or Vercel.

```
portfolio/
├── index.html
├── style.css
├── script.js
├── .nojekyll                    # tells GitHub Pages not to run Jekyll
├── netlify.toml                 # Netlify build/publish config
├── vercel.json                  # Vercel static build config
├── package.json                 # optional local preview script
└── .github/workflows/deploy.yml # auto-deploy to GitHub Pages on push
```

## 1. Before you deploy — fill in your real contact info

Open `index.html`, find the `<section id="contact">` block, and replace
the three placeholder links:

```html
<a class="contact-row" href="https://github.com/your-username" ...>
<a class="contact-row" href="https://linkedin.com/in/your-username" ...>
<a class="contact-row" href="mailto:you@example.com">
```

Replace `your-username` and `you@example.com` with your real GitHub
profile, LinkedIn profile, and email address. You can also edit the name,
bio, and project cards in the **About** and **Projects** sections.

## 2. Test it locally first

You only need a static file server — any of these work:

```bash
# Option A: Node's `serve` package (no install needed, via npx)
npx serve .

# Option B: Python's built-in server
python3 -m http.server 8000

# Option C: the npm script included in this project
npm run dev
```

Then open the printed URL (e.g. `http://localhost:3000` or
`http://localhost:8000`) in your browser.

## 3. Deploy — pick one

### Option A: GitHub Pages

```bash
# from inside the portfolio/ folder
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

Then in your GitHub repo: **Settings → Pages → Build and deployment →
Source → GitHub Actions**. The included workflow at
`.github/workflows/deploy.yml` will build and publish the site
automatically on every push to `main`. Your live URL will be:

```
https://your-username.github.io/your-repo/
```

*(Alternatively, without Actions: Settings → Pages → Source → “Deploy from
a branch” → `main` / `/ (root)`.)*

### Option B: Netlify

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

When prompted for the publish directory, enter `.` (the project root).
Netlify will give you a live URL like `https://your-site-name.netlify.app`.
You can also just drag-and-drop the project folder onto
[app.netlify.com/drop](https://app.netlify.com/drop) for a one-off deploy
with no CLI at all.

### Option C: Vercel

```bash
npm install -g vercel
vercel login
vercel --prod
```

Accept the defaults (framework: "Other", no build command, output
directory: `.`). Vercel will give you a live URL like
`https://your-site-name.vercel.app`.

## 4. Test the live site on different devices

Once deployed, check the live URL works well everywhere:

```bash
# Quick automated check that the page returns 200 OK
curl -I https://your-live-url-here

# Lighthouse audit (performance / accessibility / best practices) via CLI
npm install -g lighthouse
lighthouse https://your-live-url-here --view
```

Manual checks:
- **Desktop browser** — resize the window from wide to narrow and confirm
  the layout reflows (the sidebar nav collapses into the ☰ menu below
  680px width).
- **Chrome DevTools device toolbar** — `Cmd/Ctrl + Shift + M`, then test
  iPhone SE, iPhone 14 Pro, iPad Air, and a generic Android profile.
- **Real phone/tablet** — open the live URL directly on your own devices
  over Wi-Fi (not just localhost) and confirm:
  - all three contact links open correctly (GitHub, LinkedIn, and the
    email link should open your mail app),
  - text is readable without zooming,
  - tap targets (tabs, project links) are easy to hit,
  - the mobile menu (☰ icon) opens and closes correctly.
- **Cross-browser** — check Chrome, Firefox, and Safari at least once.

## Notes

- The site respects `prefers-reduced-motion` and has visible keyboard
  focus states for accessibility.
- All contact links use `target="_blank" rel="noopener noreferrer"` where
  appropriate for safe external navigation.
- No API keys, backend, or database — 100% static, so it works on every
  platform above with zero configuration beyond what's included here.
