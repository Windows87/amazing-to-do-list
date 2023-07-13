import Background from '../../components/Background'
import AddForm from './components/AddForm'
import TasksList from './components/TasksList'
import TodoTitle from './components/TodoTitle'

const App = () => {
  return (
    <Background>
      <TodoTitle />
      <AddForm />
      <TasksList />
    </Background>
  )
}

export default App
