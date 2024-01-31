//Sem a implementação de comandos customizados
// describe('Login', () => {

//   it('successfully logs in', () => {
//     cy.intercept('GET', '**/notes').as('getNotes')

//     cy.visit('/login')
//     cy.get('#email').type(Cypress.env('USER_EMAIL'))
//     cy.get('#password').type(Cypress.env('USER_PASSWORD'), { log: false })
//     cy.contains('button', 'Login').click()
//     cy.wait('@getNotes')

//     cy.contains('h1', 'Your Notes').should('be.visible')
//     cy.contains('a', 'Create a new note').should('be.visible')
//   })
// })

//Com comandos customizados - lógica criada por mim
// describe('Login', () => {
//   const username = Cypress.env('USER_EMAIL')
//   const password = Cypress.env('USER_PASSWORD')

//   it('successfully performs login', () => {
//     cy.login(username, password)

//     cy.contains('h1', 'Your Notes').should('be.visible')
//     cy.contains('a', 'Create a new note').should('be.visible')
//   })
// })
/// <reference path="../support/commands.d.ts" />

describe('guiLogin', () => {

  it('successfully performs login', () => {
    cy.guiLogin()

    cy.contains('a', 'Create a new note').should('be.visible')
  })
})


