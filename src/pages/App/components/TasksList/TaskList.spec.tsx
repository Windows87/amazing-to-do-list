import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import TasksList from '.'
import { TasksProvider } from '../../../../contexts/TasksContext'

test('should show nothing here if task list is empty', async () => {
  render(
    <TasksProvider>
      <TasksList />
    </TasksProvider>
  )

  const nothingHere = await screen.findByText('Não temos nada aqui ainda :(')

  expect(nothingHere).toBeVisible()
})

test('shouldnt show nothing here if task list is not empty', async () => {
  const tasks: Task[] = [
    { id: '0', description: 'Item 1', concluded: false },
    { id: '1', description: 'Item 2', concluded: false },
  ]

  render(
    <TasksProvider tasks={tasks}>
      <TasksList />
    </TasksProvider>
  )

  const nothingHere = screen.queryByText('Não temos nada aqui ainda :(')

  expect(nothingHere).toBeFalsy()
})

test('should remove all concluded items', async () => {
  const tasks: Task[] = [
    { id: '0', description: 'Item 1', concluded: true },
    { id: '1', description: 'Item 2', concluded: true },
  ]

  render(
    <TasksProvider tasks={tasks}>
      <TasksList />
    </TasksProvider>
  )

  const removeButton = await screen.findByText('Remover Tarefas Concluídas')

  user.click(removeButton)

  const nothingHere = await screen.findByText('Não temos nada aqui ainda :(')

  expect(nothingHere).toBeVisible()
})
