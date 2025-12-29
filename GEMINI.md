# Arbor AI Studio Website - Project Context

## Project Overview
This repository contains the source code for the [Arbor AI Studio](https://arboraistudio.com) website. It is a modern, static web application built with **Next.js 15** and **Tailwind CSS 4**.

**Company Focus:**
Arbor AI Studio specializes in **Agentic AI** and **Large Language Models (LLMs)**. The primary focus is on building autonomous agents and advanced language-driven applications, with less emphasis on traditional Machine Learning (ML) model training or statistics.

**Tech Stack:**
*   **Framework:** Next.js 15 (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS 4, `tailwindcss-animate`, `clsx`, `tailwind-merge`
*   **UI Components:** Shadcn UI (New York style, Neutral), Lucide React (Icons)
*   **Animations:** Framer Motion, `tw-animate-css`
*   **Deployment:** GitHub Pages (Static Export)

## Building and Running

### Prerequisites
*   Node.js v20+
*   npm

### Key Commands

| Command | Description |
| :--- | :--- |
| `npm install` | Install dependencies. |
| `npm run dev` | Start the local development server (TurboPack enabled). Access at `http://localhost:3000`. |
| `npm run build` | Build the project for production. Outputs static files to `out/`. |
| `npm run deploy` | Manually build and deploy to the `gh-pages` branch. |
| `npm run lint` | Run ESLint. |

## Project Structure

*   **`app/`**: Contains the application routes, `layout.tsx` (Root Layout), and `globals.css`.
    *   `favicon.ico`: The source of truth for the favicon (Do not place a duplicate in `public/`).
*   **`components/`**: React components.
    *   `ui/`: Reusable UI primitives (Shadcn UI).
*   **`lib/`**: Utility functions (`utils.ts`) and constants.
*   **`public/`**: Static assets (images, fonts, etc.).
    *   **Note:** `CNAME` and `.nojekyll` are generated/copied here during deployment to support custom domains on GitHub Pages.
*   **`.github/workflows/`**: CI/CD configurations.
    *   `deploy.yml`: Automatically deploys to GitHub Pages on push to `main`.

## Development Conventions

*   **Styling:** Use Tailwind CSS utility classes. Use the `cn()` utility (in `lib/utils.ts`) for conditional class merging.
*   **Theming:** The site uses `next-themes` for dark/light mode support. The default theme is set to **dark** in `app/layout.tsx`.
*   **Analytics:** Google Analytics (GA4), Google Tag Manager (GTM), and Apollo Tracker are implemented via `next/script` in `app/layout.tsx`.
*   **Deployment:** The project uses `output: "export"` in `next.config.ts`. This means Image Optimization using the default Next.js Image component is limited (unless using a custom loader).

## Deployment Workflow

The site is hosted on GitHub Pages. There are two ways to deploy:

1.  **Automated (Preferred):** Push changes to the `main` branch. The GitHub Action defined in `.github/workflows/deploy.yml` will build and deploy the site.

## Tone & Style Guidelines (Service Examples)

When editing or adding new examples to `lib/service-examples.ts`, adhere to the following guidelines to maintain a consistent voice for our non-technical business audience.

**Core Principle:**
Focus on the **result** and the **interaction**, not the underlying technology. Explain *what the AI does* as if it were a digital employee.

**Guidelines:**
1.  **Target Audience:** Non-technical business owners/executives.
2.  **No Jargon:** Avoid words like "LLM," "Inference," "RAG," "ETL," "Vector Database."
    *   *Bad:* "Uses a RAG pipeline to query vector embeddings of your documents."
    *   *Good:* "Reads your 50-page handbook and gives the exact answer instantly."
3.  **Action-Oriented Verbs:** Use verbs that describe tangible actions: "Ask," "Watch," "Spot," "Predict," "Alert."
4.  **"Digital Employee" Metaphor:** Frame the AI agent as a helpful team member.
    *   *Examples:* "The Invoice Clerk," "The Data Bodyguard," "The 24/7 Watchdog."
5.  **Focus on the Interaction:** Describe how the user interacts with the tool.
    *   *Example:* "You simply ask, 'How were sales?'..." or "Field reps just speak..."

**Example Format:**
*   **Title:** [Role] or [Benefit] (e.g., "The Instant Refund Agent")
*   **Description:** [Trigger] + [AI Action] + [Result].
    *   *Example:* "When a customer asks X, the agent checks Y, and instantly does Z."
