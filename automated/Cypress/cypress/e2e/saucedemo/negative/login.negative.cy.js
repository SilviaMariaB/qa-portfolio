//tests done before adding commands
// describe('Login Negative Tests', () => {
//     beforeEach(() => cy.visit('https://www.saucedemo.com/'));

//     it('Invalid login', () => {
//         cy.fixture('users').then((users) => {
//         cy.get('[data-test="username"]').type(users.invalid_user.username);
//         cy.get('[data-test="password"]').type(users.invalid_user.password);
//         cy.get('[data-test="login-button"]').click();
//         });
//         cy.get('[data-test="error"]').should('be.visible');
//     });
//     });

describe('Login Negative', () => {
    it('Invalid login', () => {
        cy.login('invalid_user');
        cy.get('[data-test="error"]').should('be.visible');
    });

    it('Locked out user', () => {
        cy.login('locked_out_user');
        cy.get('[data-test="error"]').should('be.visible');
    });
});