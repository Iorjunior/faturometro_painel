// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    '@nuxtjs/tailwindcss',
  ],
  app:{
    head:{
      title: 'Faturometro FE23',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name:'language', content:'pt-BR'},
        { name: 'description', content:'Faturometro FE23'},
        { name: 'robots', content:'all'},
      ],
      link:[
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ]
    }
  }
})
