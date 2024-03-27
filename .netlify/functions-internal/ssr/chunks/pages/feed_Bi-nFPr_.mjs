import rss from '@astrojs/rss';
import { g as getCollection } from './404_CjakqvGJ.mjs';

async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Brutal Blog',
    description: 'Brutal is a theme for Astro',
    stylesheet: false,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: '<language>es-cr</language>',
    canonicalUrl: 'https://juanandres-montero.github.io/opcr/',
  });
}

export { GET };