# axel.dev

Personal portfolio, projects and writing. Built with [Astro](https://astro.build), Tailwind CSS v4 and native view transitions.

## Develop

```sh
pnpm install
pnpm dev            # http://localhost:4321
pnpm build          # static output in dist/
pnpm preview        # serve the production build
pnpm astro check    # type check
pnpm check:links    # verify internal links in dist/ (run after build)
```

Requires Node 22.12+ and pnpm 10 (pinned in `package.json`). CI runs the type check, build and link check on every push and pull request.

## Where things live

| What | Where |
| --- | --- |
| Name, headline, email, socials, portrait, education, skills, About sections, hero code snippet | `src/config.ts` |
| Projects (one file each, frontmatter + case study) | `src/content/projects/*.mdx` |
| Writing (one file each) | `src/content/writing/*.md(x)` |
| Experience | `src/content/experience.json` |
| Images (optimised to responsive WebP at build time) | `src/assets/` |
| Colours, fonts, motion tokens | `src/styles/global.css` |
| Page shell, SEO tags, structured data, page transitions | `src/layouts/BaseLayout.astro` |
| Social preview image and app icons | `public/og.png`, `public/*.png`, `public/site.webmanifest` |
| Security and cache headers | `vercel.json` |

Frontmatter is validated by `src/content.config.ts`, so a missing field fails the build with a clear message.

### Projects

Each project needs either a `cover` image (path into `src/assets/`) with `coverAlt`, or a `coverSnippet` (a short real code excerpt rendered in the editor style). Use `coverFit: contain` for UI screenshots so they are shown at native size instead of cropped. Set `draft: true` to hide a project everywhere.

### About page

`about.personal`, `about.now` and `about.outside` in `src/config.ts` render only when filled in.

### Resume

Put the PDF at `public/Axel-Moran-Caballero-Resume.pdf`. Download links in the header, Work page, About page and footer appear automatically when the file exists. Only commit a public-safe version (no phone number or internal figures).

## Still to fill in

- [ ] Public-safe resume PDF in `public/`
- [ ] `about.personal`, `about.now`, `about.outside` in `src/config.ts`
- [ ] A "What I learned" section for each project
- [ ] House Prices: make the Kaggle notebook public, add a cover, then remove `draft: true`
- [ ] More posts in `src/content/writing/`
- [ ] Optional: replace the illustrated portrait in `src/assets/portrait.jpg` with a photo

## Deploy (Vercel)

1. Import the repository at https://vercel.com/new. The Astro preset is detected automatically.
2. Canonical URLs, the sitemap, `robots.txt` and the RSS feed use Vercel's production domain automatically. When a custom domain is attached, set `SITE_URL` (for example `https://example.com`) in the project's environment variables and redeploy.
3. To turn on analytics, enable Web Analytics in the Vercel project, then set `PUBLIC_VERCEL_ANALYTICS=true` and redeploy.

## Design notes

- Light theme by default, manual dark mode toggle stored in `localStorage`.
- One accent: soft tan. `accent-ink` is the darker variant used for text so links pass WCAG AA. Syntax highlighting uses a muted warm dark theme shared by the hero editor, project snippets and blog code blocks.
- Fonts: Geist and Geist Mono, self-hosted via Fontsource, with the Latin subset preloaded.
- Motion: page transitions, reveals and hover feedback only. Above-the-fold content animates with CSS so it paints immediately. All motion respects `prefers-reduced-motion`.
- Design rules for coding agents live in `.agents/skills/` ([Taste Skill](https://github.com/Leonxlnx/taste-skill), MIT).
