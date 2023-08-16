import type { Meta, StoryObj } from '@storybook/react'

import TaskCard from './TaskCard'
import { TasksProvider } from '../../../../contexts/TasksContext'
import Background from '../../../../components/Background'

const meta = {
  title: 'Components/TaskCard',
  component: TaskCard,
  decorators: [
    (story) => (
      <TasksProvider>
        <Background style={{ width: '1000px', height: '300px' }}>{story()}</Background>
      </TasksProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { task: { control: { type: 'object' } } },
} satisfies Meta<typeof TaskCard>

export default meta
type Story = StoryObj<typeof meta>

export const UndoneCard: Story = {
  args: {
    task: {
      id: '0',
      description: 'Task',
      concluded: false,
    },
  },
}

export const DoneCard: Story = {
  args: {
    task: {
      id: '0',
      description: 'Task',
      concluded: true,
    },
  },
}
