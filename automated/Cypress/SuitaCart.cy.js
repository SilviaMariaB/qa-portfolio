describe('Suita Cart', () => {
    //login with valid account
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/');

        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');

        cy.get('[data-test="login-button"]').click();
    })

    //Check if the right product is added into the cart.
    it('Add product to cart', ()=> {
        
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();

        cy.get('[data-test="remove-sauce-labs-backpack"]').should('exist');
    });

    //Check if the remove button works and products are remove from cart.
    it('Remove product from cart', ()=> {
        
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();

        cy.get('[data-test="remove-sauce-labs-backpack"]').should('not.exist');
    });

    //Check if the Continue Shopping button from cart page works.
    it('Continue shopping from cart', ()=> {
        
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="continue-shopping"]').click();

        cy.get('[data-test="inventory-container"]').should('exist');
    });

});