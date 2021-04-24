import { Meta, Story } from '@storybook/react'
import React from 'react'
import { HeartIcon } from './HeartIcon'

export default {
  component: HeartIcon,
  title: 'Icons/HeartIcon',
} as Meta

const Template: Story = (args) => <HeartIcon {...args} />

export const Primary = Template.bind({})
Primary.args = {}
