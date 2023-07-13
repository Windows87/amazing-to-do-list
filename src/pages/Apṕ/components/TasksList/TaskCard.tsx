import { Card, StyledButton } from '../../../../components/Card'
import { useTasks } from '../../../../contexts/TasksContext'

interface Props {
  task: Task
}

const TaskCard: React.FC<Props> = ({ task }: Props) => {
  const { checkTask, removeTask } = useTasks();

  const taskTextStyle = {
    textDecoration: task.concluded ? 'line-through' : 'none',
    color: task.concluded ? 'green' : 'inherit'
  };

  return (
    <Card>
      <input type='checkbox' checked={task.concluded} onClick={() => { checkTask({ taskId: task.id }) }} />
      <p style={taskTextStyle}>{task.description}</p>
      <StyledButton onClick={() => { removeTask({ taskId: task.id }) }}>x</StyledButton>
    </Card>
  )
}

export default TaskCard
