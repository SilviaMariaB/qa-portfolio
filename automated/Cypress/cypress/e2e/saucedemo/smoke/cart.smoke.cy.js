//tests done before adding commands
// describe('Cart Smoke Test', () => {
//     beforeEach(() => {
//         cy.visit('https://www.saucedemo.com/');
//         cy.fixture('users').then((users) => {
//             cy.get('[data-test="username"]').type(users.standard_user.username);
//             cy.get('[data-test="password"]').type(users.standard_user.password);
//             cy.get('[data-test="login-button"]').click();
//         });
//     });

//     it('Add product to cart', () => {
//         cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//         cy.get('[data-test="shopping-cart-link"]').click();
//         cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible');
//     });
// });

describe('Cart Smoke Tests', () => {
    beforeEach(() => {
        cy.login();
    });

    it('Add product to cart', () => {
        cy.addToCart('sauce-labs-backpack'); 
        cy.goToCart();
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible');
    });
});