// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
// Import cypress-mochawesome-reporter
import 'cypress-mochawesome-reporter/register';

afterEach(function() {
  if (this.currentTest && this.currentTest.state === 'passed') {
    // Generate a safe name for the screenshot
    const specName = Cypress.spec.name.replace('.feature', '');
    const testName = this.currentTest.title.replace(/\s+/g, '-');
    cy.screenshot(`${specName}-${testName}-pass`);
  }
});