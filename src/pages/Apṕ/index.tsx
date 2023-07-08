import Background from '../../components/Background'
import AddForm from './components/AddForm'
import TasksList from './components/TasksList'

const App = () => {
  return (
    <Background>
      <AddForm />
      <TasksList />
    </Background>
  )
}

export default App
