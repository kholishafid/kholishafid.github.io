// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/image-edge",
  ],
  ssr: true,
  css: ["@/assets/css/global.css"],
  colorMode: {
    classSuffix: "",
  },
  app: {
    baseURL: "/",
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
          href: "https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Open+Sans:wght@300;400;500;600;700;800&family=Roboto:wght@100;300;400;500;700;900&display=swap",
        },
      ],
    },
  },
  content: {
    highlight: {
      theme: "dracula",
    },
  },
  image: {
    domain: ["unsplash.com", "source.unsplash.com"],
  },
});
