import { createContext, useContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface Value {
  tasks: Task[]
  addNewTask: ({ description }: { description: string }) => void
}

interface ProviderProps {
  children: React.ReactNode[] | React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const TasksContext = createContext({} as Value)

export function TasksProvider({ children }: ProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const tasks = readTasksFromLocalStorage()
    setTasks(tasks)
  }, [])

  const addNewTask = ({ description }: { description: string }) => {
    const newTask: Task = {
      id: uuidv4(),
      description,
      concluded: false,
    }

    const newTasks = [newTask, ...tasks]

    setTasks([newTask, ...tasks])
    saveTasksOnLocalStorage(newTasks)
  }

  const readTasksFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('tasks') ?? '[]')
  }

  const saveTasksOnLocalStorage = (tasks: Task[]) => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addNewTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export const useTasks = () => useContext(TasksContext)
