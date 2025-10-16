//tests done before adding commands, fixtures and folder structure
// describe('Login Suite', () => {
//     beforeEach(() => {
//         cy.visit('/')
//     })

//     //Check if the login works when the user enters the correct credentials.
//     it('should login successfully with valid credentials', () => {
//         cy.fixture('users').then((data) => {
//             cy.login(data.standardUser.username, data.standardUser.password)
//             cy.get('[data-test="inventory-container"]').should('be.visible')
//         })
//     })

//     //Check if the login works when the user enters invalid credentials.
//     it('should show error for invalid credentials', ()=> {
//         cy.fixture('users').then((data) => {
//             cy.login(data.invalidUser.username, data.invalidUser.password)
//             cy.get('[data-test="error"]').should('be.visible')
//         })
        
//     });

//     //Check if the login works when the user is locked out.
//     it('should show error for locked out user', ()=> {
//         cy.fixture('users').then((data) => {
//             cy.login(data.lockedUser.username, data.lockedUser.password)
//             cy.get('[data-test="error"]').should('be.visible')
//         })
//     });

// });