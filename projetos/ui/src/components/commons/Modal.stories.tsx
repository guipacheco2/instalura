import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Modal, ModalProps } from './Modal'

export default {
  component: Modal,
  title: 'Commons/Modal',
} as Meta

const Template: Story<ModalProps> = (args) => <Modal {...args} />

export const Center = Template.bind({})
Center.args = {
  children: <div>Modal content</div>,
  isOpen: true,
  position: 'center',
}

export const Right = Template.bind({})
Right.args = {
  children: <div>Modal content</div>,
  isOpen: true,
  position: 'right',
}
