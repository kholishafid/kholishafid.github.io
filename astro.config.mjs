// @ts-check
import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap"
import mdx from "@astrojs/mdx";
import robotsTxt from 'astro-robots-txt'
import { remarkReadingTime } from './src/helper/remark-reading-time.mjs';
import tailwindcss from "@tailwindcss/vite";

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
  integrations: [vue(), mdx(), sitemap(), robotsTxt()],
  vite: { plugins: [tailwindcss()], },
});
