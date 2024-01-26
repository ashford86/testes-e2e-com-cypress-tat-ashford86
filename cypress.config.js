const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    requestTimeout: 15000,
    env: {
      viewportWidthBreakpoint: 768,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})

// module.exports = defineConfig({
//   env: {
//     MAILOSAUR_API_KEY: '767vyLNnWX583PMKHiH3NwAehxdGUkEc',
//   },
//   // ...
// })
