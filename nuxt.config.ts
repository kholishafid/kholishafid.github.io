// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  ssr: true,
  css: ["@/assets/css/global.css"],
  colorMode: {
    classSuffix: "",
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "kholishafid",
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "icon",
          href: "/portait.png",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cardo:wght@400;700&family=Hind:wght@300;400;500;600;700&display=swap",
        },
      ],
    },
  },
  content: {
    highlight: {
      theme: "dracula",
    },
  },
});
