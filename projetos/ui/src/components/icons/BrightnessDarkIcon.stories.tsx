import { Meta, Story } from '@storybook/react'
import React from 'react'
import { BrightnessDarkIcon } from './BrightnessDarkIcon'

export default {
  component: BrightnessDarkIcon,
  title: 'Icons/BrightnessDarkIcon',
} as Meta

const Template: Story = (args) => <BrightnessDarkIcon {...args} />

export const Primary = Template.bind({})
Primary.args = {}
