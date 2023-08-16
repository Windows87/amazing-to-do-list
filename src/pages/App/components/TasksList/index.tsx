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
    <>
      <Wrapper data-test='task-list'>
        {tasks.map((task: Task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </Wrapper>
      {tasks && (
        <Button onClick={finishTasks} data-test='remove-done-tasks-button'>
          Remover Tarefas Concluídas
        </Button>
      )}
    </>
  )
}

export default TasksList
