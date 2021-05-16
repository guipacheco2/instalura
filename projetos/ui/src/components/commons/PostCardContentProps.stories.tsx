import { Meta, Story } from '@storybook/react'
import React from 'react'
import { PostCardContent, PostCardContentProps } from './PostCardContent'

export default {
  component: PostCardContent,
  title: 'Commons/PostCardContent',
} as Meta

const Template: Story<PostCardContentProps> = (args) => (
  <PostCardContent {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  description: 'Some post description',
}
