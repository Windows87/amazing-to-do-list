import Button from '../../../../components/Button'
import { useTasks } from '../../../../contexts/TasksContext'
import StyledNothingHere from './NothingHere'
import TaskCard from './TaskCard'
import Wrapper from './Wrapper'

const TasksList = () => {
  const { tasks, finishTasks } = useTasks()

  const isTasksEmpty = !tasks.length

  if (isTasksEmpty) return <StyledNothingHere />

  return (
    <Wrapper>
      {tasks.map((task: Task) => (
        <TaskCard key={task.id} task={task} />
      ))}
      {tasks && <Button onClick={finishTasks}>Remover Tarefas Concluídas</Button>}
    </Wrapper>
  )
}

export default TasksList
