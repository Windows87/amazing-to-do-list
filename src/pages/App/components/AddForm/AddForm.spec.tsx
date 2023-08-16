import { render, screen, waitFor } from '@testing-library/react'
import user from '@testing-library/user-event'
import AddForm from '.'
import { TasksProvider } from '../../../../contexts/TasksContext'

test('button should be disabled if input is empty', async () => {
  render(<AddForm />)
  const button = await screen.findByRole('button')
  expect(button).toBeDisabled()
})

test('button should be enabled if input is not empty', async () => {
  render(<AddForm />)

  const input = await screen.findByRole('textbox')
  const button = await screen.findByRole('button')

  user.type(input, 'test')

  expect(button).toBeEnabled()
})

test('input should be cleared after submit', async () => {
  render(
    <TasksProvider>
      <AddForm />
    </TasksProvider>
  )

  const input = await screen.findByRole('textbox')
  const button = await screen.findByRole('button')

  user.type(input, 'test')
  user.click(button)

  await waitFor(() => {
    expect(input).toHaveValue('')
  })
})
