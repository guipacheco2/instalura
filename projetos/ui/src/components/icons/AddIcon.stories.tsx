import { Meta, Story } from '@storybook/react'
import React from 'react'
import { AddIcon } from './AddIcon'

export default {
  component: AddIcon,
  title: 'Icons/AddIcon',
} as Meta

const Template: Story = (args) => <AddIcon {...args} />

export const Primary = Template.bind({})
Primary.args = {}
