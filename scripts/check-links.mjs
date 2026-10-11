// Fails the build when a page links to a path that the static build did not
// produce, which catches renamed slugs and removed projects before deploy.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;

function* htmlFiles(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* htmlFiles(path);
    else if (name.endsWith('.html')) yield path;
  }
}

const resolves = (href) => {
  const path = decodeURIComponent(href.split(/[?#]/)[0]);
  if (path === '' || path === '/') return true;
  const target = join(dist, path);
  return existsSync(target) || existsSync(join(target, 'index.html')) || existsSync(`${target}.html`);
};

const broken = [];
for (const file of htmlFiles(dist)) {
  const html = readFileSync(file, 'utf8');
  for (const [, href] of html.matchAll(/\s(?:href|src)="(\/[^"]*)"/g)) {
    if (href.startsWith('//') || resolves(href)) continue;
    broken.push(`${file.replace(dist, '/')} -> ${href}`);
  }
}

if (broken.length) {
  console.error(`Broken internal links:\n${broken.join('\n')}`);
  process.exit(1);
}
console.log('All internal links resolve.');
