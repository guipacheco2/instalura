import { Meta, Story } from '@storybook/react'
import React from 'react'
import { SendIcon } from './SendIcon'

export default {
  component: SendIcon,
  title: 'Icons/SendIcon',
} as Meta

const Template: Story = (args) => <SendIcon {...args} />

export const Primary = Template.bind({})
Primary.args = {}
