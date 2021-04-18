/// <reference types="cypress" />

import { LoginScreenPageObject } from '../../../../src/components/screens/LoginScreenPageObject'
import { BASE_URL } from '../../../../src/services/constants'

describe('/pages/app/login/', () => {
  // it === test que estamos fazendo
  describe('when fill and submit a form login request', () => {
    it('go to the feed page', () => {
      // Pré Teste
      cy.intercept(`${BASE_URL}/api/login`).as('userLogin')

      // Cenário
      LoginScreenPageObject(cy)
        .fillLoginForm({
          password: 'senhasegura',
          user: 'omariosouto',
        })
        .submitLoginForm()

      // Asserções
      cy.url().should('include', '/app/feed')

      cy.wait('@userLogin').then((intercept) => {
        const { token } = intercept.response.body.data

        cy.getCookie('LOGIN_COOKIE_APP_TOKEN')
          .should('exist')
          // token do cookie é igual ao do server?
          .should('have.property', 'value', token)
      })
    })
  })
})
