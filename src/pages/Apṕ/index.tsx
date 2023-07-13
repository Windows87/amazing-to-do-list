import Background from '../../components/Background'
import AddForm from './components/AddForm'
import TasksList from './components/TasksList'
import TodoTitle from './components/TodoTitle'
// import { useTasks } from '../../../../contexts/TasksContext'
import { useTasks } from '../../contexts/TasksContext'

const App = () => {
  const { finishTasks } = useTasks()
  return (
    <Background>
      <TodoTitle />
      <AddForm />
      <button onClick={finishTasks}>Remove Concluded Tasks</button>
      <TasksList />
    </Background>
  )
}

export default App
