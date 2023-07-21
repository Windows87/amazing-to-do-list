import type { Meta, StoryObj } from '@storybook/react'

import Input from './'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: { options: ['text', 'number'], control: { type: 'radio' }, defaultValue: 'text' },
    placeholder: { type: 'string' },
    onChange: { type: 'function', defaultValue: (_e: any) => {} },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: {
    type: 'text',
    placeholder: 'Text Input',
  },
}

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Number Input',
  },
}
