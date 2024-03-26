Test is written and executed in JavaScript with Cypress, Visual Studio was used as IDE.

Instruction how to run test

1. Clone this Repo: https://github.com/bart-kornak/Fedex
2. "npm install" command in Terminal
3. Install cypress "npm install cypress --save-dev"
4. Open Cypress "npx cypress open"


- What is happening in E2E test from customer's perspective is described in "test_case.txt" file
- Tests are automated in e2e folder
    - in "loginTest.cy.js" there are tests related to login page with various combinations of providing login & password
    - in "addToCartTest.cy.js" there are tests which covers such paths as: adding single item to cart, adding multiple items to cart, removing items from cart and verifying sorting funcionality
    - in "makeAnOrderTest.cy.js" E2E test is written which covers path since login, through adding 2 products and completing checkout process
- Pages with selectors and methods are described in "pages" folder

NOTE!!!!!!: 
There is some common issue with page https://www.saucedemo.com/ described here https://github.com/cypress-io/cypress/issues/27501
If tests fail when user visits the page execute these steps:
1. Open Cypress ($npx cypress open in terminal)
2. From top bar choose Developer Tools -> View App Data
3. Delete production folder (it is the folder where user is redirected after clicking on View App data, go to parent folder (1 back and delete))
4. Close Cypress and launch it again

When there are more than one tests ('it') in suite often the second test fails while visiting a page. Solution could be adding ".only" to "it" ("it.only([...])) so test can be executed in isolation, not one by one.
If the problem still appears try to use another browser (MS Edge, Electron, Firefox)