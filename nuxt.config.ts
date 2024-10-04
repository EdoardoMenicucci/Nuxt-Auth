// import { defineNuxtConfig } from "nuxt/config";
require('dotenv').config()
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // css: ['~/assets/css/tailwind.css'],
  modules: ['@sidebase/nuxt-auth'],
  auth: {
    origin: 'http://localhost:3000', // Cambia l'URL se necessario
    // globalAppMiddleware: true
  }
})
