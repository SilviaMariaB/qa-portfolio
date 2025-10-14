describe('Suita Login', () => {

    //Check if the login works when the user enters the correct credentials.
    it('Login with correct credentials', ()=> {
        cy.visit('https://www.saucedemo.com/');

        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="inventory-container"]').should('exist');
    });

    //Check if the login works when the user enters invalid credentials.
    it('Invalid login', ()=> {
        cy.visit('https://www.saucedemo.com/');

        cy.get('[data-test="username"]').type('aaaaa');
        cy.get('[data-test="password"]').type('aaaaa');
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('exist');
    });

    //Check if the login works when the user is locked out.
    it('Locked out user', ()=> {
        cy.visit('https://www.saucedemo.com/');

        cy.get('[data-test="username"]').type('locked_out_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('exist');
    });

});