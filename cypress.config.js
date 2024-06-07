const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    setupNodeEvents(on, config) {

    },
    experimentalOriginDependencies: true,
    video: true
  }
});
