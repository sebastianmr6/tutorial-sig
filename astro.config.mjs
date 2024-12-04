// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';


export default defineConfig({
  site: 'https://sebastianmr6.github.io',
  base: '/',
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})