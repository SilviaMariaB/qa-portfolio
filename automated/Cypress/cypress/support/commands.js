// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//Generic login with standard user credentials
Cypress.Commands.add('login', (userKey = 'standard_user') => {
    cy.fixture('users').then(users =>{
        const user = users[userKey];
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type(user.username);
        cy.get('[data-test="password"]').type(user.password);
        cy.get('[data-test="login-button"]').click();
    });
});

//add product in cart
Cypress.Commands.add('addToCart', (productDataTest) => {
    cy.get(`[data-test="add-to-cart-${productDataTest}"]`).click();
});

//go to cart
Cypress.Commands.add('goToCart', () => {
    cy.get('[data-test="shopping-cart-link"]').click();
});

//checkout with data from fixture
Cypress.Commands.add('checkout', (dataKey = 'valid') => {
    cy.get('[data-test="checkout"]').click();
    cy.fixture('checkoutData').then((data) => {
        const checkout = data[dataKey];
        if (checkout.firstName) cy.get('[data-test="firstName"]').type(checkout.firstName);
        if (checkout.lastName) cy.get('[data-test="lastName"]').type(checkout.lastName);
        if (checkout.postalCode) cy.get('[data-test="postalCode"]').type(checkout.postalCode);
        cy.get('[data-test="continue"]').click();
    });
});

//finish checkout
Cypress.Commands.add('finishCheckout', () => {
    cy.get('[data-test="finish"]').click();
    cy.get('[data-test="complete-header"]').should('be.visible');
});
