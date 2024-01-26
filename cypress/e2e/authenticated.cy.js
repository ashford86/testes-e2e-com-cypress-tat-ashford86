// // Sem comandos customizados
// import { faker } from '@faker-js/faker/locale/en'

// describe('CRUD', {retry: 2}, () => {
//   it('CRUDs a note', () => {
//     const noteDescription = faker.lorem.words(4)
//     let attachFile = false

//     cy.intercept('GET', '**/notes').as('getNotes')
//     cy.intercept('GET', '**/notes/**').as('getNote')
//     cy.sessionLogin()

//     cy.visit('/notes/new')
//     cy.get('#content').type(noteDescription)

//     if (attachFile) {
//       cy.get('#file').selectFile('cypress/fixtures/example.json')
//     }

//     cy.contains('button', 'Create').click()

//     cy.wait('@getNotes')
//     cy.contains('.list-group-item', noteDescription)
//       .should('be.visible')
//       .click()
//     cy.wait('@getNote')

//     const updatedNoteDescription = faker.lorem.words(4)

//     cy.get('#content')
//       .as('contentField')
//       .clear()
//     cy.get('@contentField')
//       .type(updatedNoteDescription)

//     attachFile = true

//     if (attachFile) {
//       cy.get('#file').selectFile('cypress/fixtures/example.json')
//     }

//     cy.contains('button', 'Save').click()
//     cy.wait('@getNotes')

//     cy.contains('.list-group-item', noteDescription).should('not.exist')
//     cy.contains('.list-group-item', updatedNoteDescription)
//       .should('be.visible')
//       .click()
//     cy.wait('@getNote')
//     cy.contains('button', 'Delete').click()
// //     cy.wait('@getNotes')

// //     cy.get('.list-group-item')
// //       .its('length')
// //       .should('be.at.least', 1)
// //     cy.contains('.list-group-item', updatedNoteDescription)
// //       .should('not.exist')
// //   })
// // })

// //Com comandos customizados -- nome da spec ainda era crud.cy.js
// import { faker } from '@faker-js/faker/locale/en'

// describe('CRUD', () => {
//   it('CRUDs a note', () => {
//     const noteDescription = faker.lorem.words(4)

//     cy.intercept('GET', '**/notes').as('getNotes')
//     cy.sessionLogin()

//     cy.createNote(noteDescription)
//     cy.wait('@getNotes')

//     const updatedNoteDescription = faker.lorem.words(4)
//     const attachFile = true

//     cy.editNote(noteDescription, updatedNoteDescription, attachFile)
//     cy.wait('@getNotes')

//     cy.deleteNote(updatedNoteDescription)
//     cy.wait('@getNotes')
//   })
// })

import { faker } from '@faker-js/faker/locale/en'

describe('Scenarios where authentication is a pre-condition', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/notes').as('getNotes')
    cy.sessionLogin()
  })

  it('CRUDs a note', () => {
    const noteDescription = faker.lorem.words(4)

    cy.createNote(noteDescription)
    cy.wait('@getNotes')

    const updatedNoteDescription = faker.lorem.words(4)
    const attachFile = true

    cy.editNote(noteDescription, updatedNoteDescription, attachFile)
    cy.wait('@getNotes')

    cy.deleteNote(updatedNoteDescription)
    cy.wait('@getNotes')
  })

  it('successfully submits the settings form', () => {
    cy.intercept('POST', '**/prod/billing').as('paymentRequest')

    cy.fillSettingsFormAndSubmit()

    cy.wait('@getNotes')
    cy.wait('@paymentRequest')
      .its('state')
      .should('be.equal', 'Complete')
  })

  it('logs out', () => {
    cy.visit('/')
    cy.wait('@getNotes')

    if (Cypress.config('viewportWidth') < Cypress.env('viewportWidthBreakpoint')) {
      cy.get('.navbar-toggle.collapsed')
        .should('be.visible')
        .click()
    }

    cy.contains('.nav a', 'Logout').click()

    cy.get('#email').should('be.visible')
  })
})
