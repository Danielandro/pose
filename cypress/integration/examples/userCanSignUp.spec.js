describe('Signing up', () => {
  describe('Add a new user', () => {
    // const newUser = {
    //   "firstName": "Bram",
    //   "lastName": "Stoker",
    //   "email": "myemail@mail.com",
    //   "password": "1234"
    // }
    it('user fills in form & signs up', () => {
      cy.visit('http://localhost:3000')
      cy.get('.signup-form')
        .find('[value="firstName"]')
        .type('Bram').should('have.value', 'Bram')

      cy.get('.signup-form')
        .find('[value="lastName"]')
        .type('Stoker').should('have.value', 'Stoker')

      cy.get('.signup-form')
        .find('[value="email"]')
        .type('myemail@mail.com').should('have.value', 'myemail@mail.com')

      cy.get('.signup-form')
        .find('[value="password"]')
        .type('123456').should('have.value', '123456')
    })

  })
})