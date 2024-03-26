///<reference types="cypress"/>

import { LoginPage } from "../pages/loginPage"

const loginPage = new LoginPage();

const testData = {
  correctUsername: 'standard_user',
  correctPassword: 'secret_sauce',
  incorrectUsername: 'sauceDemoUser',
  incorrectPassword: 'SecretSauce1'
}

describe('Login test suite', () => {
  beforeEach(() => {
    cy.intercept('/service-worker.js', {
      body: undefined
    })
    cy.visit('/')
  })

  it('Login with correct username and password', () => {
    loginPage.typeUsername(testData.correctUsername)
    loginPage.typePassword(testData.correctPassword)
    loginPage.clickLoginButton()
    cy.url().should('include', '/inventory.html')
  })

  it('Login with incorrect username and password', () => {
    loginPage.typeUsername(testData.incorrectUsername)
    loginPage.typePassword(testData.incorrectPassword)
    loginPage.clickLoginButton()
    loginPage.elements.errorMessage()
      .should('be.visible')
      .and('contain', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Login with correct username and incorrect password', () => {
    loginPage.typeUsername(testData.correctUsername)
    loginPage.typePassword(testData.incorrectPassword)
    loginPage.clickLoginButton()
    loginPage.elements.errorMessage()
      .should('be.visible')
      .and('contain', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Login with incorrect username and correct password', () => {
    loginPage.typeUsername(testData.incorrectUsername)
    loginPage.typePassword(testData.correctPassword)
    loginPage.clickLoginButton()
    loginPage.elements.errorMessage()
      .should('be.visible')
      .and('contain', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Login with username and no password', () => {
    loginPage.typeUsername(testData.incorrectUsername)
    loginPage.clickLoginButton()
    loginPage.elements.errorMessage()
      .should('be.visible')
      .and('contain', 'Epic sadface: Password is required')
  })
})