import { Meta, Story } from '@storybook/react'
import React from 'react'
import { PostCardMedia, PostCardMediaProps } from './PostCardMedia'

export default {
  component: PostCardMedia,
  title: 'Commons/PostCardMedia',
} as Meta

const Template: Story<PostCardMediaProps> = (args) => (
  <PostCardMedia {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  filter: 'none',
  imageSrc: 'https://source.unsplash.com/TbEqd-GNC5w',
}
