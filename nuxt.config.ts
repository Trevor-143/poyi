// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/image',
    'nuxt-icon'
  ],
  app: {
    head: {
      title: 'Poyi Cleaners Uganda',
      meta: [
        { name: 'description', content: 'Get access to the best cleaning services in Uganda with poyi cleaners' }
      ],
      link: [
        {rel: 'icon', type: 'image/jpg', href: '/assets/polyProfile.jpg' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  }
})

