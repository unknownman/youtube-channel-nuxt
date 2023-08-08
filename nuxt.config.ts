// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxthq/ui'
  ],
  runtimeConfig: {
    // The private keys which are only available within server-side
    // Keys within public, will be also exposed to the client-side
    public: {
      apiKey: process.env.API_KEY,
      channelId: process.env.CHANNEL_ID,
    }
  }
})
