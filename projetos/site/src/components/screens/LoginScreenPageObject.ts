/// <reference types="cypress" />

interface LoginScreenPageObjectReturn {
  fillLoginForm: (params: {
    password: string
    user: string
  }) => LoginScreenPageObjectReturn
  submitLoginForm: () => LoginScreenPageObjectReturn
}

export function LoginScreenPageObject(
  cy: Cypress.cy,
): LoginScreenPageObjectReturn {
  cy.visit('/app/login')

  const loginScreenPageObject: LoginScreenPageObjectReturn = {
    fillLoginForm({ password, user }) {
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
