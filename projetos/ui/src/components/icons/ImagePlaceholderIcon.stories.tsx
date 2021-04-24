import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ImagePlaceholderIcon } from './ImagePlaceholderIcon'

export default {
  component: ImagePlaceholderIcon,
  title: 'Icons/ImagePlaceholderIcon',
} as Meta

const Template: Story = (args) => <ImagePlaceholderIcon {...args} />

export const Primary = Template.bind({})
Primary.args = {}
