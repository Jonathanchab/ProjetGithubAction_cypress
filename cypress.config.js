const { defineConfig } = require("cypress");
// require("cypress-mochawesome-reporter/plugin")(on);
module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    experimentalOriginDependencies: true,
    video: true
  }
});
