//tests done before adding commands
// describe('Checkout Smoke Tests', () => {
//     beforeEach(() => {
//         cy.visit('https://www.saucedemo.com/');
//         cy.fixture('users').then((users) => {
//             cy.get('[data-test="username"]').type(users.standard_user.username);
//             cy.get('[data-test="password"]').type(users.standard_user.password);
//             cy.get('[data-test="login-button"]').click();
//         });
//         cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//         cy.get('[data-test="shopping-cart-link"]').click();
//     });

//     it('Complete checkout with valid data', () => {
//         cy.get('[data-test="checkout"]').click();
//         cy.fixture('checkoutData').then((data) => {
//             cy.get('[data-test="firstName"]').type(data.valid.firstName);
//             cy.get('[data-test="lastName"]').type(data.valid.lastName);
//             cy.get('[data-test="postalCode"]').type(data.valid.postalCode);
//         });
//         cy.get('[data-test="continue"]').click();
//         cy.get('[data-test="finish"]').click();
//         cy.get('[data-test="complete-header"]').should('be.visible');
//     });
// });

describe('Checkout Smoke Tests', () => {
    beforeEach(() => {
        cy.login();
        cy.addToCart('sauce-labs-backpack');
        cy.goToCart();
    });

    it('Complete checkout with valid data', () => {
        cy.checkout('valid');
        cy.finishCheckout();
    });
});