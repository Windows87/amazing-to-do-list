export function visitStartPage() {
  cy.visit('http://localhost:3000')
}

export function verifyNothingHereIfEmpty() {
  cy.get('[data-test="nothing-here"]').should('be.visible')
}

export function addNewTask(taskName: string) {
  cy.get('[data-test="new-task-input"]').type(`${taskName}{enter}`)
}

export function verifyIfTaskWasAdded(taskName: string) {
  cy.get('[data-test="task-list"]').children().first().should('contain.text', taskName)
}

export function markFirstTaskAsDone() {
  cy.get('[data-test="task-list"]').children().first().find('[class="task-card-checkbox"]').click()
}

export function verifyIfFirstTaskIsDone() {
  cy.get('[data-test="task-list"]')
    .children()
    .first()
    .get('p')
    .should('contain.css', 'text-decoration', 'line-through solid rgb(0, 128, 0)')
}

export function verifyIfFirstTaskIsUndone() {
  cy.get('[data-test="task-list"]')
    .children()
    .first()
    .get('p')
    .should('not.contain.css', 'text-decoration', 'line-through solid rgb(0, 128, 0)')
}

export function markFirstTaskAsUndone() {
  cy.get('[data-test="task-list"]').children().first().get('[class="task-card-checkbox"]').click()
}

export function removeFirstTask() {
  cy.get('[data-test="task-list"]').children().first().contains('x').click()
}

export function clickRemoveDoneTasksButton() {
  cy.get('[data-test="remove-done-tasks-button"]').click()
}

export function verifyNumberOfTasks(numberOfTasks: number) {
  cy.get('[data-test="task-list"]').children().its('length').should('eq', numberOfTasks)
}
