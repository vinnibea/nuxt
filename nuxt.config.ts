// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false,
    extractCSS: true,
  },
  image: {
    dir: 'pages/templates/default/images'
  },
  css: [
    '~/assets/main.scss',
  ],
})
