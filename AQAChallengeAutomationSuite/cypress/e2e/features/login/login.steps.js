// cypress/e2e/step_definitions/login.steps.js
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../../pages/LoginPage';

let alertText = '';

after(function() {
    if (this.result && this.result.status === 'passed') {
      cy.screenshot(`login-success-${Date.now()}`);
    }
  });
  

Given('I am on the login page', () => {
    cy.visit('http://localhost:4200/');
});

When('I enter a valid username {string} and password {string}', (username, password) => {
    LoginPage.enterUsername(username);
    LoginPage.enterPassword(password);
});

When('I enter an incorrect username {string} and a valid password {string}', (username, password) => {
    LoginPage.enterUsername(username);
    LoginPage.enterPassword(password);
});

When('I enter a valid username {string} and an incorrect password {string}', (username, password) => {
    LoginPage.enterUsername(username);
    LoginPage.enterPassword(password);
});

When('I enter a password {string}', (password) => {
    LoginPage.enterPassword(password);
});

When('I click the login button', () => {
    cy.window().then((win) => {
        cy.stub(win, 'alert').as('alertStub').callsFake((text) => {
            alertText = text; 
        });
    });
    
    LoginPage.clickLoginButton();
});

Then('I should be redirected to the dashboard {string}', (url) => {
    cy.url().should('include', url);
});

Then('the password input should be masked', () => {
    LoginPage.passwordInput.should('have.attr', 'type', 'password');
});

Then('an error message should be displayed {string}', (message) => {
    LoginPage.errorMessage.should('be.visible').and('contain', message);
});

Then('an alert should be displayed with message {string}', (message) => {
    cy.get('@alertStub').should('have.been.calledWithMatch', new RegExp(message));
});

Then('I accept the alert', () => {

});
