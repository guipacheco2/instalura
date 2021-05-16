import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ProfileAvatar } from './ProfileAvatar'

export default {
  component: ProfileAvatar,
  title: 'Commons/ProfileAvatar',
} as Meta

const Template: Story = (args) => <ProfileAvatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
  src: 'https://source.unsplash.com/TbEqd-GNC5w',
}
