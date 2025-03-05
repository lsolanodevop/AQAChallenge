const { defineConfig } = require('cypress');
const path = require('path');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Test Automation Report',
    embeddedScreenshots: true,
    inlineAssets: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // This loads the reporter plugin
      require('cypress-mochawesome-reporter/plugin')(on);
      
      // Keep your existing preprocessor setup
      const cucumber = require('cypress-cucumber-preprocessor').default;
      on('file:preprocessor', cucumber());
      
      // Keep your screenshot handler
      on('after:screenshot', (details) => {
        const testName = path.basename(details.path, '.png');
        console.log('Screenshot saved:', details.path);
        return details;
      });
      
      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots'
  },
});