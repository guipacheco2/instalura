/// <reference types="cypress" />

interface LoginScreenPageObjectReturn {
  fillLoginForm: (params: {
    user: string
    password: string
  }) => LoginScreenPageObjectReturn
  submitLoginForm: () => LoginScreenPageObjectReturn
}

export function LoginScreenPageObject(
  cy: Cypress.cy,
): LoginScreenPageObjectReturn {
  cy.visit('/app/login')

  const loginScreenPageObject: LoginScreenPageObjectReturn = {
    fillLoginForm({ user, password }) {
      cy.get('#formCadastro input[name="usuario"]').type(user)
      cy.get('#formCadastro input[name="senha"]').type(password)

      return loginScreenPageObject
    },

    submitLoginForm() {
      cy.get('#formCadastro button[type="submit"]').click()

      return loginScreenPageObject
    },
  }

  return loginScreenPageObject
}
