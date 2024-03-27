import { defineConfig } from 'astro/config';

export default defineConfig({
  // used to generate images
  site: 'https://juanandres-montero.github.io',
  base: 'OPCR',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});