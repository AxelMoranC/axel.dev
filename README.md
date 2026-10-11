# axel.dev

Personal portfolio, projects and writing. Built with [Astro](https://astro.build), Tailwind CSS v4 and native view transitions.

## Develop

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static output in dist/
pnpm preview    # serve the production build
pnpm astro check
```

Requires Node 22.12+ and pnpm.

## Where things live

| What | Where |
| --- | --- |
| Name, headline, email, socials, portrait, resume link, education, skills | `src/config.ts` |
| Projects (one file each, frontmatter + case study) | `src/content/projects/*.mdx` |
| Writing (one file each) | `src/content/writing/*.md(x)` |
| Experience | `src/content/experience.json` |
| Colours, fonts, motion tokens | `src/styles/global.css` |
| Page shell, SEO tags, page transitions | `src/layouts/BaseLayout.astro` |

Frontmatter is validated by `src/content.config.ts`, so a missing field fails the build with a clear message.

## Replacing placeholders

- [ ] `src/config.ts`: greeting, headline, intro, email, portrait, `resumeUrl`
- [ ] `src/config.ts`: education years and note, skills
- [ ] `src/content/experience.json`: dates, summaries, highlights, stack (confirm role titles)
- [ ] `src/content/projects/*.mdx`: real cover images or screenshots, case study text
- [ ] `src/content/writing/`: replace or delete the placeholder posts
- [ ] Page intros in `src/pages/projects/index.astro`, `work.astro`, `writing/index.astro`
- [ ] About page bio, Now and Outside of work sections in `src/pages/about.astro`
- [ ] Add `public/resume.pdf` and an Open Graph image
- [ ] Set `SITE_URL` in the hosting environment once the domain is live

Images can go in `public/images/` and be referenced as `/images/name.jpg`.

## Design notes

- Light theme by default, manual dark mode toggle stored in `localStorage`.
- One accent: soft tan. `accent-ink` is the darker variant used for text so links pass WCAG AA.
- Fonts: Geist and Geist Mono, self-hosted via Fontsource.
- Motion: page transitions, scroll reveals and hover feedback only. All of it respects `prefers-reduced-motion`.
- Design rules for coding agents live in `.agents/skills/` ([Taste Skill](https://github.com/Leonxlnx/taste-skill), MIT).

## Deploy

Import the repository in Vercel. The framework preset is detected automatically; no extra configuration is needed. Add the `SITE_URL` environment variable once a custom domain is attached.
