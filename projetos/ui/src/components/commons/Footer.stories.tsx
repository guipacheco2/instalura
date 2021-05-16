import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Footer } from './Footer'

export default {
  component: Footer,
  title: 'Commons/Footer',
} as Meta

const Template: Story = (args) => <Footer {...args} />

export const Primary = Template.bind({})
Primary.args = {}
