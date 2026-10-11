// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// Set SITE_URL in the hosting provider once the custom domain is live so
// canonical URLs, the sitemap and the RSS feed point at the real origin.
const site = process.env.SITE_URL ?? 'https://axel-dev.vercel.app';

export default defineConfig({
  site,
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), sitemap(), icon()],
});
