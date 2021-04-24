import { Meta, Story } from '@storybook/react'
import React from 'react'
import { BookmarkIcon } from '../icons'
import { IconButton } from './IconButton'

export default {
  component: IconButton,
  title: 'Commons/IconButton',
} as Meta

const Template: Story = (args) => <IconButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: <BookmarkIcon />,
}
