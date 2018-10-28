const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Hello WAKABA.WORLD :)'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Wakaba Yamaguchi, 山口若葉, ポートフォリオ, Portfolio'
      },
      { hid: 'og:title', name: 'og:title', content: 'WAKABA.WORLD' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: 'https://wakaba.world' },
      { hid: 'og:locale', name: 'og:locale', content: 'ja_JP' },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Hello WAKABA.WORLD :)'
      },
      { hid: 'og:site_name', name: 'og:site_name', content: 'WAKABA.WORLD' },
      {
        rel: 'stylesheet',
        href:
          '///maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Rubik'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/css/lib.css', '~/assets/css/app.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
