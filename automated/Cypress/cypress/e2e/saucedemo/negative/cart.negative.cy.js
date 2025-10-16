//tests done before adding commands
// describe('Cart Negative Tests', () => {
//     beforeEach(() => {
//         cy.visit('https://www.saucedemo.com/');
//         cy.fixture('users').then((users) => {
//         cy.get('[data-test="username"]').type(users.standard_user.username);
//         cy.get('[data-test="password"]').type(users.standard_user.password);
//         cy.get('[data-test="login-button"]').click();
//         });
//     });

//     it('Remove product from empty cart', () => {
//         cy.get('[data-test="shopping-cart-link"]').click();
//         cy.get('[data-test="remove-sauce-labs-backpack"]').should('not.exist');
//     });
// });

describe('Cart Negative', () => {
    beforeEach(() => cy.login());

    it('Remove product from empty cart', () => {
        cy.goToCart();
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('not.exist');
    });
});