import { Meta, Story } from '@storybook/react'
import React from 'react'
import { MoreIcon } from './MoreIcon'

export default {
  component: MoreIcon,
  title: 'Icons/MoreIcon',
} as Meta

const Template: Story = (args) => <MoreIcon {...args} />

export const Primary = Template.bind({})
Primary.args = {}
