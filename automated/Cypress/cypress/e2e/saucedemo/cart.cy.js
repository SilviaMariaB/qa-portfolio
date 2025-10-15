describe('Suita Cart', () => {
    //login with valid account
    beforeEach(()=>{
        cy.fixture('users').then((data)=>{
            cy.login(data.standardUser.username, data.standardUser.password);
        })
    })

    //Check if the right product is added into the cart.
    it('should add a product to the cart', ()=> {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible');
    });

    //Check if the remove button works and products are remove from cart.
    it('should remove a product from the cart', ()=> {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('not.exist');
    });

    //Check if the Continue Shopping button from cart page works.
    it('should return to shopping when clicking Continue Shopping', ()=> {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="continue-shopping"]').click();
        cy.get('[data-test="inventory-container"]').should('exist');
    });

});