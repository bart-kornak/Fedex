import { LoginPage } from "../pages/loginPage";

const loginPage = new LoginPage();

Cypress.Commands.add('login', (username, password) => {
    loginPage.typeUsername(username)
    loginPage.typePassword(password)
    loginPage.clickLoginButton()
    cy.url().should('include', '/inventory.html')
})


// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })