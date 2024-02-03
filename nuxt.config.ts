// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@nuxtjs/google-fonts', '@vuestic/nuxt', 'nuxt-gtag'],
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: [],
    rules: [],
  },
  buildModules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
      Inter: [400, 600],
    },
  },
  head: {
    link: [
      { rel: 'icon', href: '' },
    ],
  },
  gtag: {
    id: 'G-7N8SSDDB58'
  }
})
