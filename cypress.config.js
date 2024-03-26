const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1024,
  viewportHeight: 768,
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 60000,
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
