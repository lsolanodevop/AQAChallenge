class LoginPage {
    get usernameInput() {
        return cy.get('#username');
    }
    
    get passwordInput() {
        return cy.get('#password');
    }
    
    get loginButton() {
        return cy.get('#login-button');
    }
    
    get errorMessage() {
        return cy.get('.error-message');
    }
    
    enterUsername(username) {
        this.usernameInput.type(username);
    }
    
    enterPassword(password) {
        this.passwordInput.type(password);
    }
    
    clickLoginButton() {
        this.loginButton.click();
    }
    
    getAlertText() {
        const alertTextPromise = new Cypress.Promise(resolve => {
            cy.on('window:alert', (text) => {
                resolve(text);
            });
        });
        
        return alertTextPromise;
    }
    
    verifyAlertText(expectedText) {
        cy.on('window:alert', (text) => {
            expect(text).to.contain(expectedText);
        });
    }
    
    acceptAlert() {
        cy.on('window:alert', () => true);
    }
    
    dismissAlert() {
        cy.on('window:alert', () => false);
    }
}

export default new LoginPage();