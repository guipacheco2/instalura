/// <reference types="cypress" />

import faker from 'faker'
import { FeedScreenPageObject } from '../../../../src/components/screens/FeedScreenPageObject'

describe('/pages/app/feed/', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    cy.login()
  })

  it('go to the feed page', () => {
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
