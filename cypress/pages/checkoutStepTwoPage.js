///<reference types="cypress"/>

export class CheckoutStepTwoPage {
    buttons = {
        cancelButton: () => cy.get('#cancel'),
        finishButton: () => cy.get('#finish'),
    }

    elements = {
        priceOfSingleProduct: () => cy.get('inventory_item_price')
    }

    clickCancelButton() {
        this.buttons.cancelButton()
            .click()
    }

    clickFinishButton() {
        this.buttons.finishButton()
            .click()
    }
}