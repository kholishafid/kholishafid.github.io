// @ts-check
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'astro/config';

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["https://source.unsplash.com",],
    remotePatterns: [{ protocol: "https" }],
  },
  site: 'https://kholishafid.com',
  integrations: [vue(), sitemap(), markdoc()],
  vite: { plugins: [tailwindcss()], },
});
