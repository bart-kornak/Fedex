///<reference types="cypress"/>

export class CheckoutStepOnePage {
    inputs = {
        firstNameInput: () => cy.get('#first-name'),
        lastNameInput: () => cy.get('#last-name'),
        postalCodeInput: () => cy.get('#postal-code')
    }

    buttons = {
        continueButton: () => cy.get('#continue'),
        cancelButton: () => cy.get('#cancel')
    }


    typeFirstName(firstName) {
        this.inputs.firstNameInput()
            .type(firstName)
    }

    typeLastName(lastName) {
        this.inputs.lastNameInput()
            .type(lastName)
    }

    typePostalCode(postalCode) {
        this.inputs.postalCodeInput()
            .type(postalCode)
    }

    clickContinueButton() {
        this.buttons.continueButton()
            .click()
    }
    
    clickCancelButton() {
        this.buttons.cancelButton()
            .click()
    }

}