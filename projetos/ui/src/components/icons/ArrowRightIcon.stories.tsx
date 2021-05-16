import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ArrowRightIcon } from './ArrowRightIcon'

export default {
  component: ArrowRightIcon,
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#999', display: 'inline-block' }}>
        <Story />
      </div>
    ),
  ],
  title: 'Icons/ArrowRightIcon',
} as Meta

const Template: Story = (args) => <ArrowRightIcon {...args} />

export const Primary = Template.bind({})
Primary.args = {}
