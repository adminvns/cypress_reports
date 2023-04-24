const { defineConfig } = require("cypress");
 require('cypress-mochawesome-reporter/plugin')
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video:false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
        screenshotOnRunFailure= true;
        require('cypress-mochawesome-reporter/plugin')(on);
       
    },
  },
});