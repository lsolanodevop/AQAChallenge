// cypress/pages/ChatRoomPage.js
class ChatRoomPage {
    get title() {
        return cy.get('#chat-title');
    }
    
    get messagesContainer() {
        return cy.get('#chat-messages-container');
    }
    
    get messageInput() {
        return cy.get('#message-input');
    }
    
    get sendButton() {
        return cy.get('#send-button');
    }
    
    get logoutButton() {
        return cy.get('#logout-button');
    }
    
    get messageText() {
        return this.messagesContainer.find('.message-text');
    }
    
    enterMessage(message) {
        this.messageInput.type(message);
    }
    
    clickSendButton() {
        this.sendButton.click();
    }
    
    clickLogoutButton() {
        this.logoutButton.click();
    }
    
    setupAlertStub() {
        return cy.window().then((win) => {
            return cy.stub(win, 'alert').as('alertStub');
        });
    }
    
    verifyAlertWithMessage(message) {
        return cy.get('@alertStub').should('have.been.calledWithMatch', new RegExp(message));
    }
}

export default new ChatRoomPage();