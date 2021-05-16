import { Meta, Story } from '@storybook/react'
import React from 'react'
import { CloseIcon } from './CloseIcon'

export default {
  component: CloseIcon,
  title: 'Icons/CloseIcon',
} as Meta

const Template: Story = (args) => <CloseIcon {...args} />

export const Primary = Template.bind({})
Primary.args = {}
