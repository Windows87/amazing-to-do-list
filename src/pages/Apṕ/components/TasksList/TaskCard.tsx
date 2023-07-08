import Card from '../../../../components/Card'

interface Props {
  task: Task
}

const TaskCard: React.FC<Props> = ({ task }: Props) => {
  return (
    <Card>
      <p>{task.description}</p>
    </Card>
  )
}

export default TaskCard
