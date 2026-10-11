// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import { editorTheme } from './src/styles/editor-theme.ts';

// Canonical URLs, the sitemap and the RSS feed need the real origin. SITE_URL
// wins once a custom domain is set; otherwise Vercel's production domain is
// used. Localhost is the fallback because guessing a public hostname could
// point search engines at someone else's site.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = process.env.SITE_URL ?? (vercelHost ? `https://${vercelHost}` : 'http://localhost:4321');

export default defineConfig({
  site,
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  markdown: {
    shikiConfig: {
      themes: { light: editorTheme, dark: editorTheme },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), sitemap(), icon()],
});
