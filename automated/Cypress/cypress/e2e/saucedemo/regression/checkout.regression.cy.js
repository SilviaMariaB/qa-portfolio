//tests done before adding commands
// describe('Checkout Regression Tests', () => {
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

//     it('Cancel checkout', () => {
//         cy.get('[data-test="checkout"]').click();
//         cy.get('[data-test="cancel"]').click();
//         cy.get('[data-test="inventory-container"]').should('be.visible');
//     });
//     });

describe('Checkout Regression', () => {
    beforeEach(() => {
        cy.login();
        cy.addToCart('sauce-labs-backpack');
        cy.goToCart();
    });

    it('Cancel checkout', () => {
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="cancel"]').click();
        cy.get('[data-test="inventory-item"]').should('be.visible');
    });
});    