describe('Suita Checkout', () => {
    //login with valid account
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/');

        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');

        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();

        cy.get('[data-test="inventory-item"]').should('exist');
    })

    //Check if the checkout works when the user enters valid data.
    it('Checkout with valid data', ()=> {
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('Ana');
        cy.get('[data-test="lastName"]').type('Maria');
        cy.get('[data-test="postalCode"]').type('123456');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();
        cy.get('[data-test="complete-header"]').should('exist');
        
    });
    
    //Check if the Checkout with missing required fields is displaying error message.
    it('Checkout with missing required fields', ()=> {
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('Ana');
        cy.get('[data-test="postalCode"]').type('123456');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="error"]').should('exist');
        
    });

    //Check if the cancel button from checkout page works.
    it('Cancel checkout', ()=> {
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="cancel"]').click();
        cy.get('[data-test="inventory-item"]').should('exist');
        
    });

});