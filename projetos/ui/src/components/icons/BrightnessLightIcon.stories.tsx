import { Meta, Story } from '@storybook/react'
import React from 'react'
import { BrightnessLightIcon } from './BrightnessLightIcon'

export default {
  component: BrightnessLightIcon,
  title: 'Icons/BrightnessLightIcon',
} as Meta

const Template: Story = (args) => <BrightnessLightIcon {...args} />

export const Primary = Template.bind({})
Primary.args = {}
