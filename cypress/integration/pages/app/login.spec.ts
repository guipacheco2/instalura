/// <reference types="cypress" />

import { LoginScreenPageObject } from '../../../../src/components/screens/LoginScreenPageObject'

describe('/pages/app/login/', () => {
  // it === test que estamos fazendo
  describe('when fill and submit a form login request', () => {
    it('go to the profile page', () => {
      // Pré Teste
      cy.intercept(
        'https://instalura-api-git-master-omariosouto.vercel.app/api/login',
      ).as('userLogin')

      // Cenário
      LoginScreenPageObject(cy)
        .fillLoginForm({
          password: 'senhasegura',
          user: 'omariosouto',
        })
        .submitLoginForm()

      // Asserções
      cy.url().should('include', '/app/profile')

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
