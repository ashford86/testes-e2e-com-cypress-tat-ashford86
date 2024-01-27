const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: 'sfqgm9',
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    requestTimeout: 15000,
    env: {
      viewportWidthBreakpoint: 768,
    },
  },
})

// module.exports = defineConfig({
//   env: {
//     MAILOSAUR_API_KEY: '767vyLNnWX583PMKHiH3NwAehxdGUkEc',
//   },
//   // ...
// })
