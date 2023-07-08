import { useTasks } from '../../../../contexts/TasksContext'
import StyledNothingHere from './NothingHere'
import TaskCard from './TaskCard'
import Wrapper from './Wrapper'

const TasksList = () => {
  const { tasks } = useTasks()

  const isTasksEmpty = !tasks.length

  if (isTasksEmpty) return <StyledNothingHere />

  return (
    <Wrapper>
      {tasks.map((task: Task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </Wrapper>
  )
}

export default TasksList
