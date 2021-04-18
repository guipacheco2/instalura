/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

interface FeedScreenPageObjectReturn {
  confirmPost: () => FeedScreenPageObjectReturn
  expectPostByDescriptionBeVisible: (
    description: string,
  ) => FeedScreenPageObjectReturn
  fillImageURL: (description: string, url: string) => FeedScreenPageObjectReturn
  openPostModal: () => FeedScreenPageObjectReturn
}

export function FeedScreenPageObject(
  cy: Cypress.cy,
): FeedScreenPageObjectReturn {
  cy.visit('/app/feed')

  const FeedScreenPageObject: FeedScreenPageObjectReturn = {
    confirmPost() {
      cy.findByRole('button', { name: /postar/i }).click()
      return FeedScreenPageObject
    },
    expectPostByDescriptionBeVisible(description) {
      cy.findByText(description).should('be.visible')
      return FeedScreenPageObject
    },
    fillImageURL(description, url) {
      cy.findByPlaceholderText(/descrição/i).type(description)
      cy.findByPlaceholderText(/url da imagem/i).type(url)
      cy.findByRole('button', { name: /confirm filled value/i }).click()
      cy.findByRole('button', { name: /avançar/i }).click()
      return FeedScreenPageObject
    },
    openPostModal() {
      cy.findByRole('button', { name: /create post/i }).click()
      return FeedScreenPageObject
    },
  }

  return FeedScreenPageObject
}
