///<reference types="cypress"/>

import 'cypress-map'
import { MainPage } from "../pages/mainPage";
import { CartPage } from "../pages/cartPage";

const mainPage = new MainPage();
const cartPage = new CartPage();

const testData = {
    correctUsername: 'standard_user',
    correctPassword: 'secret_sauce',
    product: 'sauce-labs-bolt-t-shirt',
    product2: 'sauce-labs-backpack',
    sortOption: 'Price (high to low)'
}

const expectedPrices = ['$49.99', '$29.99', '$15.99', '$15.99', '$9.99', '$7.99']

describe('Adding to cart and modifying an order', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.login(testData.correctUsername, testData.correctPassword)
    })
  
    it('Add to cart single item', () => {
        mainPage.clickAddToCartButton(testData.product)
        mainPage.clickCartButton()
        cartPage.elements.cartItem()
            .should('have.length', 1)
    })

    it('Add to cart multiple items', () => {
        mainPage.clickAddToCartButton(testData.product)
        mainPage.clickAddToCartButton(testData.product2)
        mainPage.clickCartButton()
        cy.url().should('include', '/cart.html')
        cartPage.elements.cartItem()
            .should('have.length', 2)
    })

    it('Remove items from cart and return to main page', () => {
        mainPage.clickAddToCartButton(testData.product)
        mainPage.clickAddToCartButton(testData.product2)
        mainPage.clickCartButton()
        cy.url().should('include', '/cart.html')
        cartPage.elements.cartItem()
            .should('have.length', 2)
        cartPage.clickRemoveItemButton(1)
        cartPage.clickRemoveItemButton(0)
        cartPage.elements.removedCartItem()
            .should('exist')
        cartPage.clickContinueShoppingButton()
        cy.url().should('include', '/inventory.html')
        mainPage.elements.logo().should('be.visible')
    })

    it('Verify sorting funcionality', () => {
        mainPage.selectSortingTypeFromDropdown(testData.sortOption)
        mainPage.elements.priceOfItem().then($prices => {
            const prices = $prices.map((index, element) => Cypress.$(element).text()).get();
            const sortedPrices = prices.slice().sort(function(a, b) {
                return a - b
            });
            console.log(sortedPrices)
            expect(sortedPrices).to.deep.equal(expectedPrices);
            })
    })
})  