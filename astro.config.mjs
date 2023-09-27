import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

import mdx from "@astrojs/mdx";
import { remarkReadingTime } from './src/helper/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue(), mdx()],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
  image: {
    domains: ["https://source.unsplash.com",],
    remotePatterns: [{ protocol: "https" }],  
  }
});
