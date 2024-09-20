// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@sidebase/nuxt-auth'],
  auth: {
    origin: 'http://localhost:3000', // Cambia l'URL se necessario
    // globalAppMiddleware: true
  }
})
