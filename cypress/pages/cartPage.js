///<reference types="cypress"/>

export class CartPage {
    buttons = {
        checkoutButton: () => cy.get('#checkout'),
        continueShoppingButton: () => cy.get('#continue-shopping'),
        removeItemButton: () => cy.get('[id^="remove"]'),
    }

    elements = {
        cartItem: () => cy.get('.cart_item'),
        removedCartItem: () => cy.get('.removed_cart_item')
    }


    clickCheckoutButton() {
        this.buttons.checkoutButton()
            .click()
    }

    clickContinueShoppingButton() {
        this.buttons.continueShoppingButton()
            .click()
    }

    clickRemoveItemButton(number) {
        this.buttons.removeItemButton()
            .eq(number)
            .click()
    }
}