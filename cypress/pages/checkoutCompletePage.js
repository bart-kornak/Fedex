///<reference types="cypress"/>

export class CheckoutCompletePage {
    buttons = {
        backHomeButton: () => cy.get('#back-to-products')
    }

    elements = {
        toastMessage: () => cy.get('.complete-header'),
        checkoutCompleteInscription: () => cy.get('.title')
    }

    clickBackHomeButton() {
        this.buttons.backHomeButton()
            .click()
    }
}