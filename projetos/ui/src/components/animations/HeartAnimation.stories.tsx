import { Meta, Story } from '@storybook/react'
import React from 'react'
import { HeartAnimation, HeartAnimationProps } from './HeartAnimation'

export default {
  component: HeartAnimation,
  title: 'Animations/Heart',
} as Meta

const Template: Story<HeartAnimationProps> = (args) => (
  <HeartAnimation {...args} />
)

export const Unchecked = Template.bind({})
Unchecked.args = {
  checked: false,
}

export const Checked = Template.bind({})
Checked.args = {
  checked: true,
}
