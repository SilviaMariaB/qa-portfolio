describe('Login Regression', () => {
    it('Login valid user and logout', () => {
        cy.login();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
        cy.get('[data-test="login-button"]').should('be.visible');
    })
});