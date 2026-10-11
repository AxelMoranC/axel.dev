import { existsSync } from 'node:fs';
import { join } from 'node:path';

// Single source of truth for personal details; every page reads from this
// file. Only public information belongs here: the repository is public.
export const site = {
  name: 'Axel Moran Caballero',
  role: 'Software Engineer',
  description:
    'Software engineer at Shopify in Montreal, building fast, thoughtful products for the web.',
  greeting: "Hi, I'm Axel.",
  headline: 'Software engineer building fast, thoughtful products for the web.',
  headlineAccent: 'thoughtful',
  intro:
    'Full-time Software Engineer I at Shopify. Concordia Computer Science, class of 2026. Interned at Shopify, BetterSleep, Actalent and VuWall.',
  email: 'amorancaballero@hotmail.com',
  portrait: {
    src: 'https://picsum.photos/seed/axel-portrait/960/1200?grayscale',
    alt: 'Portrait placeholder',
  },
  socials: [
    { label: 'GitHub', href: 'https://github.com/AxelMoranC', icon: 'ph:github-logo' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/axel-moran-caballero-9324ab263/',
      icon: 'ph:linkedin-logo',
    },
  ],
} as const;

export const editor = {
  filename: 'axel.ts',
  code: `const axel = {
  role: 'Full-time Software Engineer I',
  company: 'Shopify',
  based: 'Montreal, QC',
  school: 'Concordia CS, 2026',
  shipped: ['article_list @ Shopify'],
  stack: [
    'TypeScript', 'React', 'Node.js',
  ],
  speaks: ['EN', 'FR', 'ES'],
};

export default axel;`,
  summary:
    'Axel is a full-time Software Engineer I at Shopify, based in Montreal, QC. He studied Computer Science at Concordia University, class of 2026. As a Shopify intern he shipped the article_list theme setting. His stack includes TypeScript, React and Node.js, and he speaks English, French and Spanish.',
} as const;

const resumeFileName = 'Axel-Moran-Caballero-Resume.pdf';

// Download links render only when the PDF is present in public/, so the site
// never ships a broken link and the file can be withheld from the repository.
export const resume = {
  fileName: resumeFileName,
  url: existsSync(join(process.cwd(), 'public', resumeFileName)) ? `/${resumeFileName}` : '',
};

export const nav = [
  { label: 'Work', href: '/work' },
  { label: 'Projects', href: '/projects' },
  { label: 'Writing', href: '/writing' },
  { label: 'About', href: '/about' },
] as const;

export const education = [
  {
    school: 'Concordia University',
    degree: 'BS in Computer Science',
    years: 'Class of 2026',
    note: 'Coursework in data structures and algorithms, databases, operating systems and artificial intelligence.',
  },
];

export const skills = [
  {
    group: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'Ruby', 'Go', 'C', 'C++', 'SQL'],
  },
  {
    group: 'Frameworks',
    items: ['React', 'Next.js', 'Node.js', 'Redux', 'React Query', 'GraphQL', 'Spring Boot'],
  },
  {
    group: 'Data and ML',
    items: ['pandas', 'NumPy', 'PyTorch', 'TensorFlow'],
  },
  {
    group: 'Tools',
    items: ['Git', 'Docker', 'Google Cloud', 'AWS', 'Firebase', 'PostgreSQL', 'MySQL', 'Jest', 'Puppeteer'],
  },
];
