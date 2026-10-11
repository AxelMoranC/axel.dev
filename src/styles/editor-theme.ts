import type { Code } from 'astro:components';
import type { ComponentProps } from 'astro/types';

// Astro exposes Shiki's registration types without a direct Shiki dependency.
type ThemeRegistration = Exclude<ComponentProps<typeof Code>['theme'], string | undefined>;

export const editorTheme = {
  name: 'warm-editor',
  type: 'dark',
  colors: {
    'editor.background': '#1d1915',
    'editor.foreground': '#ece6dc',
  },
  tokenColors: [
    {
      scope: ['keyword', 'storage', 'constant.numeric', 'constant.language'],
      settings: { foreground: '#d6bc96' },
    },
    {
      scope: ['string'],
      settings: { foreground: '#b6c3a3' },
    },
    {
      scope: ['variable', 'entity', 'support'],
      settings: { foreground: '#ece6dc' },
    },
    {
      scope: ['punctuation', 'comment'],
      settings: { foreground: '#aaa094' },
    },
  ],
} satisfies ThemeRegistration;
