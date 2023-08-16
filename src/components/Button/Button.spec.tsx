import { render, screen, waitFor } from '@testing-library/react'
import user from '@testing-library/user-event'
import Button from '.'

test('should call onClick', async () => {
  const onClick = jest.fn()

  render(<Button onClick={onClick} />)

  user.click(screen.getByRole('button'))

  await waitFor(() => {
    expect(onClick).toHaveBeenCalled()
  })
})
