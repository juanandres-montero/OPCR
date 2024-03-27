import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  // used to generate images
  site: process.env.VERCEL_ENV === 'production' ? 'https://juanandres-montero.github.io' : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/` : 'https://localhost:3000/',
  base: 'OPCR',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({
    injectReset: true
  })],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js']
    }
  },
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});