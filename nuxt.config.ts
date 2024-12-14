export default defineNuxtConfig({
  compatibilityDate: '2024-12-13',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  content: {
    markdown: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxt/content'],
  nitro: {
    preset: 'vercel'
  }
})