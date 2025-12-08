// @ts-check
import robotsTxt from 'astro-robots-txt'
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './src/helper/remark-reading-time.mjs';

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
  image: {
    domains: ["https://source.unsplash.com",],
    remotePatterns: [{ protocol: "https" }],
  },
  site: 'https://kholishafid.github.io',
  integrations: [vue(), sitemap(), robotsTxt(), markdoc()],
  vite: { plugins: [tailwindcss()], },
});