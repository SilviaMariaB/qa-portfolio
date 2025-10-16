//tests done before adding commands
// describe('Checkout Negative Tests', () => {
//     beforeEach(() => {
//         cy.visit('https://www.saucedemo.com/');
//         cy.fixture('users').then((users) => {
//         cy.get('[data-test="username"]').type(users.standard_user.username);
//         cy.get('[data-test="password"]').type(users.standard_user.password);
//         cy.get('[data-test="login-button"]').click();
//         });
//         cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//         cy.get('[data-test="shopping-cart-link"]').click();
//     });

//     it('Missing last name', () => {
//         cy.get('[data-test="checkout"]').click();
//         cy.fixture('checkoutData').then((data) => {
//         cy.get('[data-test="firstName"]').type(data.missingLastName.firstName);
//         cy.get('[data-test="postalCode"]').type(data.missingLastName.postalCode);
//         });
//         cy.get('[data-test="continue"]').click();
//         cy.get('[data-test="error"]').should('be.visible');
//     });
// });

describe('Checkout Negative', () => {
    beforeEach(() => {
        cy.login();
        cy.addToCart('sauce-labs-backpack');
        cy.goToCart();
    });

    it('Checkout missing lastName', () => {
        cy.checkout('missingLastName');
        cy.get('[data-test="error"]').should('be.visible');
    });
});