import {
  addNewTask,
  clickRemoveDoneTasksButton,
  markFirstTaskAsDone,
  markFirstTaskAsUndone,
  removeFirstTask,
  verifyIfFirstTaskIsDone,
  verifyIfFirstTaskIsUndone,
  verifyIfTaskWasAdded,
  verifyNothingHereIfEmpty,
  verifyNumberOfTasks,
  visitStartPage,
} from '../utils/tasks'

describe('Task Journey', () => {
  beforeEach(() => {
    visitStartPage()
  })

  it('should appear nothing here text if to-do is empty', () => {
    verifyNothingHereIfEmpty()
  })

  it('should be able to add task', () => {
    const taskName = 'Task'
    addNewTask(taskName)
    verifyIfTaskWasAdded(taskName)
  })

  it('should be able to mark task as done', () => {
    const taskName = 'Task'
    addNewTask(taskName)
    verifyIfTaskWasAdded(taskName)
    markFirstTaskAsDone()
    verifyIfFirstTaskIsDone()
  })

  it('should be able to mark task as undone', () => {
    const taskName = 'Task'
    addNewTask(taskName)
    verifyIfTaskWasAdded(taskName)
    markFirstTaskAsDone()
    verifyIfFirstTaskIsDone()
    markFirstTaskAsUndone()
    verifyIfFirstTaskIsUndone()
  })

  it('should be able to remove task', () => {
    const taskName = 'Task'
    addNewTask(taskName)
    verifyIfTaskWasAdded(taskName)
    removeFirstTask()
    verifyNothingHereIfEmpty()
  })

  it('should be able to remove done tasks', () => {
    const taskNames = ['Task 1', 'Task 2', 'Task 3']
    taskNames.forEach((taskName) => {
      addNewTask(taskName)
      verifyIfTaskWasAdded(taskName)
    })
    markFirstTaskAsDone()
    verifyIfFirstTaskIsDone()
    clickRemoveDoneTasksButton()
    verifyNumberOfTasks(taskNames.length - 1)
  })

  it('should be able to restore data after refresh', () => {
    const taskNames = ['Task 1', 'Task 2', 'Task 3']
    taskNames.forEach((taskName) => {
      addNewTask(taskName)
      verifyIfTaskWasAdded(taskName)
    })
    markFirstTaskAsDone()
    visitStartPage()
    verifyIfFirstTaskIsDone()
    verifyNumberOfTasks(taskNames.length)
    clickRemoveDoneTasksButton()
    visitStartPage()
    verifyNumberOfTasks(taskNames.length - 1)
  })
})
