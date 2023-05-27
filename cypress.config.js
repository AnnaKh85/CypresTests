const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3w29x4',
  env: {
    url: "https://rahulshettyacademy.com"
  },
  defaultCommandTimeout: 5000,
  retries: {
    runMode: 1
    },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
