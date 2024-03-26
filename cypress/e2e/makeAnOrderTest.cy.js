///<reference types="cypress"/>

import { MainPage } from "../pages/mainPage";
import { CartPage } from "../pages/cartPage";
import { CheckoutStepOnePage } from "../pages/checkoutStepOnePage";
import { CheckoutStepTwoPage } from "../pages/checkoutStepTwoPage";
import { CheckoutCompletePage } from "../pages/checkoutCompletePage";

const mainPage = new MainPage();
const cartPage = new CartPage();
const checkoutStepOnePage = new CheckoutStepOnePage();
const checkoutStepTwoPage = new CheckoutStepTwoPage();
const checkoutCompletePage = new CheckoutCompletePage();


const testData = {
    correctUsername: 'standard_user',
    correctPassword: 'secret_sauce',
    product: 'sauce-labs-bolt-t-shirt',
    product2: 'sauce-labs-backpack',
    firstName: 'Andrzej',
    lastName: 'Golota',
    postalCode: '50-505'
}

describe('Make an order test suite', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.login(testData.correctUsername, testData.correctPassword)
    })
  
    it('(E2E) Select item(s), provide personal data and checkout', () => {
        mainPage.clickAddToCartButton(testData.product)
        mainPage.clickAddToCartButton(testData.product2)
        mainPage.clickCartButton()
        cy.url().should('include', '/cart.html')
        cartPage.elements.cartItem()
            .should('have.length', 2)
        cartPage.clickCheckoutButton()
        cy.url().should('include', '/checkout-step-one.html')
        checkoutStepOnePage.typeFirstName(testData.firstName)
        checkoutStepOnePage.typeLastName(testData.lastName)
        checkoutStepOnePage.typePostalCode(testData.postalCode)
        checkoutStepOnePage.clickContinueButton();
        cy.url().should('include', '/checkout-step-two.html')
        checkoutStepTwoPage.clickFinishButton()
        cy.url().should('include', '/checkout-complete.html')
        checkoutCompletePage.elements.toastMessage()
            .should('be.visible')
            .and('contain', 'Thank you for your order!')
        checkoutCompletePage.elements.checkoutCompleteInscription()
            .should('be.visible')
            .and('contain', 'Checkout: Complete!')
        checkoutCompletePage.clickBackHomeButton()
        cy.url().should('include', '/inventory.html')
    })
})