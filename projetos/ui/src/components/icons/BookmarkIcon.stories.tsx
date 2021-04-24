import { Meta, Story } from '@storybook/react'
import React from 'react'
import { BookmarkIcon } from './BookmarkIcon'

export default {
  component: BookmarkIcon,
  title: 'Icons/BookmarkIcon',
} as Meta

const Template: Story = (args) => <BookmarkIcon {...args} />

export const Primary = Template.bind({})
Primary.args = {}
