import colors from 'vuetify/es5/util/colors'

module.exports = {
  mode: 'universal',
  server: {
    host: '0.0.0.0'
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],

    script: [
     //js files with '/'
     { src: '/js/jquery-3.3.1.min.js'},
     { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'},
     { src: '/js/particles.min.js'},
     { src: '/js/script.js'},
     { src: '/js/lightbox-plus-jquery.min.js'},
     { src: '/js/custom.js'},
     { src: '/js/owl.carousel.js'},
     {
      hid:"tawk.to",
      src:"https://embed.tawk.to/6007f35ac31c9117cb707dfb/1esfgt70l",
      defer: true
    }
    ],

   
    link: [
     // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
     { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
     { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
     { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
     //{ rel: 'manifest', href: '/favicons/site.webmanifest' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Poppins:300,400&display=swap'
      },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { 
    color: '#1382c5',
    height: '5px',
    throttle: 0,
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/style-starter.css',
    '@/assets/css/custom.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
 modules: [
  '@nuxtjs/axios',
  ['nuxt-validate', {
    lang: 'en',
    // regular vee-validate options
  }],
  '@nuxtjs/onesignal',
  '@nuxtjs/pwa',
],


// Options
oneSignal: {
  init: {
    appId: '6e8c1010-8097-4ac9-b7a9-1c4316591236',
    allowLocalhostAsSecureOrigin: true,
    welcomeNotification: {
        disable: true
    }
  }
},

axios: {
  // proxyHeaders: false
},

manifest: {
  name: "Tekbar",
  short_name: "Tekbar",
 // start_url: "/",
 // scope: "/",
 // display: "standalone",
  orientation: "portrait-primary",
 // background_color: "#ffffff",
 // theme_color: "#123c69",
  description: "Tekbar IT company in Lagos Nigeria",
  dir: "ltr",
 // lang: "en-US",
},


/*
workbox: {
    importScripts: [
        'custom-sw.js'
    ],
  },
*/

  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
