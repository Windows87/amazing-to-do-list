import Card from '../../../../components/Card'
import { useTasks } from '../../../../contexts/TasksContext'

interface Props {
  task: Task
}

const TaskCard: React.FC<Props> = ({ task }: Props) => {
  const { checkTask } = useTasks();

  return (
    <Card>
      <p>{task.description}</p>
      <input type='checkbox' checked={task.concluded} onClick={() => { checkTask({ taskId: task.id }) }} />
    </Card>
  )
}

export default TaskCard
