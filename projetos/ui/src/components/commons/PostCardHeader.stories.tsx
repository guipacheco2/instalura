import { Meta, Story } from '@storybook/react'
import React from 'react'
import { PostCardHeader, PostCardHeaderProps } from './PostCardHeader'

export default {
  component: PostCardHeader,
  title: 'Commons/PostCardHeader',
} as Meta

const Template: Story<PostCardHeaderProps> = (args) => (
  <PostCardHeader {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  avatarSrc: 'https://source.unsplash.com/TbEqd-GNC5w',
  username: '@someUserLogin',
}
