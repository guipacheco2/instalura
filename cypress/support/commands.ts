import '@testing-library/cypress/add-commands'
import { BASE_URL } from '../../src/services/constants'
import { login } from '../../src/services/loginService'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', () => {
  cy.intercept(`${BASE_URL}/api/login`).as('userLogin')

  cy.wrap(
    login({
      password: 'senhasegura',
      username: 'omariosouto',
    }),
  )

  cy.wait('@userLogin').then((intercept) => {
    const { token } = intercept.response.body.data

    cy.getCookie('LOGIN_COOKIE_APP_TOKEN')
      .should('exist')
      .should('have.property', 'value', token)
  })
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
