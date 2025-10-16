//tests done before adding commands
//Login smoke test done before commands
// describe('Login Smoke Tests', () => {
//     it('Login with valid credentials', () => {
//         cy.visit('https://www.saucedemo.com/');
//         cy.fixture('users').then((users) => {
//             cy.get('[data-test="username"]').type(users.standard_user.username);
//             cy.get('[data-test="password"]').type(users.standard_user.password);
//             cy.get('[data-test="login-button"]').click();
//         });

//         // check that inventory page is loaded
//         cy.get('[data-test="inventory-container"]').should('be.visible');
//     });
// });

describe('Login Smoke Tests', () => {
    it('Login with valid credentials', () => {
        cy.login('standard_user'); 
        cy.get('[data-test="inventory-container"]').should('be.visible');
    });
});