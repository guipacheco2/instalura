import { Meta, Story } from '@storybook/react'
import React, { Fragment } from 'react'
import { PostCard } from './PostCard'
import { PostCardContent } from './PostCardContent'
import * as PostCardContentPropsStories from './PostCardContentProps.stories'
import { PostCardHeader } from './PostCardHeader'
import * as PostCardHeaderStories from './PostCardHeader.stories'
import { PostCardMedia } from './PostCardMedia'
import * as PostCardMediaStories from './PostCardMedia.stories'

export default {
  component: PostCard,
  subcomponents: { PostCardContent, PostCardHeader, PostCardMedia },
  title: 'Commons/PostCard',
} as Meta

const Template: Story = (args) => <PostCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: (
    <Fragment>
      <PostCardHeaderStories.Primary {...PostCardHeaderStories.Primary.args} />
      <PostCardMediaStories.Primary {...PostCardMediaStories.Primary.args} />
      <PostCardContentPropsStories.Primary
        {...PostCardMediaStories.Primary.args}
      />
    </Fragment>
  ),
}
