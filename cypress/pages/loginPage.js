///<reference types="cypress"/>

export class LoginPage {
    inputs = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password')
    }

    buttons = {
        loginButton: () => cy.get('#login-button')
    }

    elements = {
        errorMessage: () => cy.get('[data-test="error"]')
    }

    typeUsername(username) {
        this.inputs.usernameInput()
            .type(username)
    }

    typePassword(password) {
        this.inputs.passwordInput()
            .type(password)
    }

    clickLoginButton() {
        this.buttons.loginButton()
            .click()
    }
}