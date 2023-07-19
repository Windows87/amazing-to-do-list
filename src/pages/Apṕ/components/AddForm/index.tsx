import { ChangeEvent, FormEvent, useState } from 'react'
import Button from '../../../../components/Button'
import { Card } from '../../../../components/Card'
import Input from '../../../../components/Input'
import { useTasks } from '../../../../contexts/TasksContext'
import Form from './Form'

const AddForm = () => {
  const [description, setDescription] = useState('')
  const { handleTask } = useTasks()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    handleTask({ description })
    clearForm()
  }

  const verifyFields = () => {
    const isDescriptionEmpty = !description
    return isDescriptionEmpty
  }

  const clearForm = () => [
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    setDescription(''),
  ]

  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <Input placeholder='Tarefa' value={description} onChange={handleInputChange} data-test='new-task-input' />
        <Button disabled={verifyFields()}>Adicionar</Button>
      </Form>
    </Card>
  )
}

export default AddForm
