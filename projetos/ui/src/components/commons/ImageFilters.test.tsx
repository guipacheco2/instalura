import user from '@testing-library/user-event'
import React from 'react'
import { render, screen } from '../../infra'
import { ImageFilters } from './ImageFilters'

describe('<ImageFilters />', () => {
  describe('when form fields are valid', () => {
    test('complete the submission', async () => {
      const onChange = jest.fn()

      render(
        <ImageFilters
          imageURL="some image url"
          onChange={onChange}
          selected="none"
        />,
      )

      const filterEls = screen.getAllByLabelText(/filter/i)
      user.click(filterEls[1])

      expect(onChange).toBeCalledTimes(1)
      expect(onChange).toBeCalledWith('1977')
    })
  })
})
