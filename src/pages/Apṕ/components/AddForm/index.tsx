import { ChangeEvent, FormEvent, useState } from 'react'
import Button from '../../../../components/Button'
import Card from '../../../../components/Card'
import Input from '../../../../components/Input'
import { useTasks } from '../../../../contexts/TasksContext'

const AddForm = () => {
  const [description, setDescription] = useState('')
  const { addNewTask } = useTasks()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addNewTask({ description })
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
      <form onSubmit={handleSubmit}>
        <Input placeholder='Tarefa' value={description} onChange={handleInputChange} />
        <Button disabled={verifyFields()}>Continuar</Button>
      </form>
    </Card>
  )
}

export default AddForm
