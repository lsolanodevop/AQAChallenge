// cypress/e2e/step_definitions/chatRoom.steps.js
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ChatRoomPage from '../../../pages/ChatRoomPage';
import LoginPage from '../../../pages/LoginPage';


after(function() {
    if (this.result && this.result.status === 'passed') {
      cy.screenshot(`chatroom-success-${Date.now()}`);
    }
  });

Given('I am logged in and in the chat room', () => {
    // First visit the login page
    cy.visit('http://localhost:4200/');
    
    // Use the login methods from LoginPage
    LoginPage.enterUsername('Leo');
    LoginPage.enterPassword('leo');
    LoginPage.clickLoginButton();
    
    // Verify that we're now on the chat room page
    cy.url().should('include', '/chatRoom');
});


Then('the chat room title should display {string}', (titleText) => {
    ChatRoomPage.title.should('have.text', titleText);
});

Then('the chat messages container should be visible', () => {
    ChatRoomPage.messagesContainer.should('be.visible');
});

Then('there should be at least one message in the chat area', () => {
    ChatRoomPage.messageText.should('have.length.greaterThan', 0);
});

Then('the message input field should be visible and enabled', () => {
    ChatRoomPage.messageInput.should('be.visible').and('be.enabled');
});

When('I enter a message {string}', (message) => {
    ChatRoomPage.enterMessage(message);
});

Then('the input field should contain {string}', (message) => {
    ChatRoomPage.messageInput.should('have.value', message);
});

When('I click the send button', () => {
    cy.window().then((win) => {
        cy.stub(win, 'alert').as('alertStub').callsFake((text) => {
            alertText = text;
        });
    });
    
    ChatRoomPage.clickSendButton();
});

When('I click the send button without entering a message', () => {
    // Set up the alert stub before triggering the action
    cy.window().then((win) => {
        cy.stub(win, 'alert').as('alertStub').callsFake((text) => {
            alertText = text; // Store the alert text for later assertion
        });
    });
    
    ChatRoomPage.clickSendButton();
});

Then('my message {string} should appear in the chat area', (message) => {
    ChatRoomPage.messageText.last().should('have.text', message);
});

Then('the message should show the username {string}', (username) => {
    ChatRoomPage.messageText.last().siblings('.username').should('have.text', username);
});

When('I click the logout button', () => {
    ChatRoomPage.clickLogoutButton();
});

Then('I should be redirected to the login page {string}', (url) => {
    cy.url().should('include', url);
});

Then('an alert should be displayed with message {string}', (message) => {
    // Use the alert stub to verify it was called
    cy.get('@alertStub').should('have.been.calledWithMatch', new RegExp(message));
});