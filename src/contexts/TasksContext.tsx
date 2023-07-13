import { createContext, useContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface Value {
  tasks: Task[]
  handleTask: ({ description }: { description: string }) => void
  finishTasks: () => void
  checkTask: ({ taskId }: { taskId: string }) => void
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

  const handleTask = ({ description }: { description: string }) => {
    const newTask: Task = {
      id: uuidv4(),
      description,
      concluded: false,
    }

    const newTasks = [newTask, ...tasks]

    setTasks([newTask, ...tasks])
    saveTasksOnLocalStorage(newTasks)
  }

  const finishTasks = () => {
    setTasks(tasks.filter(t => !t.concluded))
  }

  const checkTask = ({ taskId }: { taskId: string }) => {
    setTasks(tasks.map((t) => {
      if (t.id === taskId) {
        t.concluded = !t.concluded
      }
      return t
    }))
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
        handleTask,
        finishTasks,
        checkTask
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export const useTasks = () => useContext(TasksContext)
