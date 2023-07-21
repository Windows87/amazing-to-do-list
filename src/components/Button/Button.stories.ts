import type { Meta, StoryObj } from '@storybook/react'

import Button from './'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { type: 'boolean', defaultValue: false, description: 'Desabilitado', name: 'Desabilitado' },
    children: { type: 'string', defaultValue: 'Botão', description: 'Texto do Botão', name: 'Texto' },
    onClick: { type: 'function', defaultValue: () => {}, description: 'On Click' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Botão',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Botão',
    disabled: true,
  },
}
