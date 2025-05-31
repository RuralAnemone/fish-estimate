// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  app: {
    keepalive: true,
    pageTransition: {
      name: "page",
      mode: "out-in"
    }
  },

  css: ["~/assets/css/main.css"],
  // ui: {
  //   theme: {
  //     colors: [
  //       "primary",
  //       "secondary",
  //       "tertiary",

  //       "info",
  //       "success",
  //       "warning",
  //       "error"
  //     ]
  //   }
  // },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    "@nuxtjs/color-mode"
  ]
})