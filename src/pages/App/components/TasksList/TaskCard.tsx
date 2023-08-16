import { Card, StyledButton } from '../../../../components/Card'
import { useTasks } from '../../../../contexts/TasksContext'
// @ts-expect-error
import Checkbox from 'react-custom-checkbox'

interface Props {
  task: Task
}

const TaskCard: React.FC<Props> = ({ task }: Props) => {
  const { checkTask, removeTask } = useTasks()

  const taskTextStyle = {
    textDecoration: task.concluded ? 'line-through' : 'none',
    color: task.concluded ? 'green' : 'white',
    fontFamily: 'Montserrat',
  }

  return (
    <Card>
      <Checkbox
        className='task-card-checkbox'
        checked={task.concluded}
        borderRadius={100}
        style={{
          backgroundColor: '#515151',
        }}
        borderColor={'transparent'}
        icon={
          <div
            style={{
              display: 'flex',
              flex: 1,
              backgroundColor: '#0C9200',
              alignSelf: 'stretch',
              borderRadius: 100,
            }}
          ></div>
        }
        onChange={() => {
          checkTask({ taskId: task.id })
        }}
      />
      <p style={taskTextStyle}>{task.description}</p>
      <StyledButton
        onClick={() => {
          removeTask({ taskId: task.id })
        }}
      >
        x
      </StyledButton>
    </Card>
  )
}

export default TaskCard
