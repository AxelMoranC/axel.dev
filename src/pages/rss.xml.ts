import rss from '@astrojs/rss';
import { getPosts } from '../lib/content';
import type { APIContext } from 'astro';
import { site } from '../config';

export async function GET(context: APIContext) {
  const posts = await getPosts();

  return rss({
    title: `${site.name} | Writing`,
    description: site.description,
    site: context.site ?? 'http://localhost:4321',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/writing/${post.id}/`,
    })),
  });
}
