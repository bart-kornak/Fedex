///<reference types="cypress"/>

export class MainPage {
    buttons = {
        addToCartButton: (name) => cy.get(`[id^=add-to-cart-${name}]`),
        cartButton: () => cy.get('.shopping_cart_link')
    }

    elements = {
        logo: () => cy.get('.app_logo'),
        priceOfItem: () => cy.get('.inventory_item_price')
    }

    dropdowns = {
        sortingDropdown: () => cy.get('[data-test="product_sort_container"]')
    }

    clickAddToCartButton(name) {
        this.buttons.addToCartButton(name)
            .click()
    }

    clickCartButton() {
        this.buttons.cartButton()
            .click()
    }

    selectSortingTypeFromDropdown(value) {
        this.dropdowns.sortingDropdown()
            .select(value)
    }
}