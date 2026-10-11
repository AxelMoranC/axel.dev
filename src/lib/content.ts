import { getCollection } from 'astro:content';

export async function getProjects() {
  const projects = await getCollection('projects', ({ data }) => !data.draft);
  return projects.sort((a, b) => a.data.order - b.data.order);
}

export async function getPosts() {
  const posts = await getCollection('writing', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
