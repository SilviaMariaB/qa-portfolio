describe('Cart Regression', () => {
    beforeEach(() => cy.login());

    it('Add & remove multiple products', () => {
        cy.addToCart('sauce-labs-backpack');
        cy.addToCart('add-to-cart-sauce-labs-bike-light');
        cy.addToCart('add-to-cart-sauce-labs-bolt-t-shirt');
        cy.goToCart(); 
        cy.get('.cart_item').should('have.length', 3);
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
        cy.get('.cart_item').should('have.length', 1);        
    });

    it('Verify sorting by price', () => {
        cy.login('standard_user');
        cy.get('[data-test="product_sort_container"]').select('Price (low to high)');
        cy.get('.inventory_item_price').first().should('contain', '$7.99');
    });
});