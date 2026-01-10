## Arbor AI Studio Website

Next.js 15 + Tailwind CSS 4 site for [arboraistudio.com](https://arboraistudio.com).  
The repo keeps the editable source in `main` and publishes the static export to GitHub Pages (same flow as the previous CRA codebase).

## Tech stack

- App Router Next.js with server components + Next Fonts
- Tailwind CSS 4 (+ tw-animate-css) for styling
- `lucide-react`, `framer-motion`, `next-themes`, shadcn/ui primitives

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`. Pages live under `app/` (e.g. `app/page.tsx`).  
Global styles live in `app/globals.css`, shared UI in `components/`, and constants/utilities in `lib/`.

## Static export & GitHub Pages deployment

The site is configured with `output: "export"` so `npm run build` produces a static site in `out/`.

To deploy the latest build to `gh-pages` (the branch served by GitHub Pages for this repo):

```bash
npm run deploy
```

This script:

1. Builds the static site (`out/`)
2. Copies `CNAME` and adds `.nojekyll`
3. Pushes the contents of `out/` to the `gh-pages` branch via `gh-pages`

GitHub Pages will then serve the freshly exported build at the custom domain declared in `CNAME`.

> Tip: if you only need the static export (for manual upload, etc.), just run `npm run build` and grab the `out/` directory.
Happy coding! 🚀

## MCP Tools (SEO & Analytics)

This project is configured with **Model Context Protocol (MCP)** tools to give the AI agent advanced capabilities:
1.  **Google Search Console:** Check indexing, submit sitemaps, and analyze traffic.
2.  **Google Keyword Insight:** Research high-volume global keywords.

👉 **[Read the Setup Guide (docs/MCP_SETUP.md)](docs/MCP_SETUP.md)** to configure these tools locally.

## Planned Improvements

- **Replace Public CORS Proxy:** currently, the career page uses `corsproxy.io` to fetch jobs from Dover client-side. This should be replaced by configuring a reverse proxy on the existing **EC2 instance (via Caddy)**. This will allow secure, controlled access to the Dover API without third-party dependencies.