# Agent notes

## Development

Start the dev server in background mode:

```
pnpm astro dev --background
```

Manage it with `pnpm astro dev stop`, `pnpm astro dev status` and `pnpm astro dev logs`. Run `pnpm astro check`, `pnpm build` and `pnpm check:links` before committing. After changing `src/content.config.ts`, restart the dev server and delete `.astro/` if it serves stale content.

Astro docs: https://docs.astro.build

## Design rules

Before changing UI, read `.agents/skills/taste-skill/SKILL.md` and apply it with these settings:

- Design read: developer portfolio and writing site for recruiters and peers, quiet editorial language, Astro + Tailwind v4 + native view transitions.
- Dials: `DESIGN_VARIANCE 6`, `MOTION_INTENSITY 5`, `VISUAL_DENSITY 3`.
- Light theme by default. Dark mode via `[data-theme='dark']` tokens in `src/styles/global.css`.
- Single accent: soft tan (`accent`, `accent-soft`, `accent-ink`). Never introduce a second accent colour, neon, or black accents.
- Syntax highlighting inside the code editor is the only allowed exception to the single-accent rule and must stay muted and desaturated (tan keywords, sage strings, warm neutrals).
- Radius system: images and panels 14px, buttons and tags fully rounded.
- Icons: Phosphor via `astro-icon` (`ph:*`) only.
- No em-dashes in visible copy.

## Content

Personal details live in `src/config.ts`. Projects, writing and experience are content collections under `src/content/`. Never ship visible placeholder copy: leave optional fields empty or set `draft: true`. Never invent metrics or claims, and never add non-public employer information.
