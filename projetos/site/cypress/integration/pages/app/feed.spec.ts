/// <reference types="cypress" />

import faker from 'faker'
import { FeedScreenPageObject } from '../../../../src/components/screens/FeedScreenPageObject'

describe('/pages/app/feed/', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    cy.login()
  })

  describe('when fill and submit the create post', () => {
    it('the created post is visible', () => {
      const description = faker.commerce.productDescription()

      FeedScreenPageObject(cy)
        .openPostModal()
        .fillImageURL(
          description,
          'https://source.unsplash.com/BxQ4jKYB0kI/600x600',
        )
        .confirmPost()
        .expectPostByDescriptionBeVisible(description)
    })
  })
})
