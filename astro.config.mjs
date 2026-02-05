// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://clay-hub.pages.dev', // Update this with your actual domain
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), sitemap()]
});