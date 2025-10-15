describe('Suita Checkout', () => {
    //login with valid account
    beforeEach(()=>{
        cy.fixture('users').then((data)=>{
            cy.login(data.standardUser.username, data.standardUser.password)
        })
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="inventory-item"]').should('exist');
    })

    //Check if the checkout works when the user enters valid data.
    it('should complete checkout with valid data', ()=> {
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('Ana');
        cy.get('[data-test="lastName"]').type('Maria');
        cy.get('[data-test="postalCode"]').type('123456');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();
        cy.get('[data-test="complete-header"]').should('be.visible');
        
    });
    
    //Check if the Checkout with missing required fields is displaying error message.
    it('should show error when required fields are missing', ()=> {
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('Ana');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="error"]').should('be.visible');
        
    });

    //Check if the cancel button from checkout page works.
    it('should cancel checkout successfully', ()=> {
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="cancel"]').click();
        cy.get('[data-test="inventory-item"]').should('exist');
        
    });

});