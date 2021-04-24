import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ImageFilters, ImageFiltersProps } from './ImageFilters'

export default {
  component: ImageFilters,
  title: 'Commons/ImageFilters',
} as Meta

const Template: Story<ImageFiltersProps> = (args) => <ImageFilters {...args} />

export const Primary = Template.bind({})
Primary.args = {
  imageURL: 'https://source.unsplash.com/TbEqd-GNC5w',
  selected: 'none',
}
