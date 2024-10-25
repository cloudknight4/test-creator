import { Assessment, Task, TaskOrdering, TaskType } from '../app/model/assessment.model';


export const task_primaryColors: Task = {
  taskId: 'mockTask1',
  taskType: TaskType.SingleSelection,
  directions: 'just click on a option',
  question: 'What are the primary colors',
  options: [
    {optionId: 'primecolor1', statement: 'azure, pink, orange'},
    {optionId: 'primecolor2', statement: 'red, blue, yellow'}
  ]
}

export const task_howManyStates: Task = {
  taskId: 'mockTask2',
  taskType: TaskType.SingleSelection,
  question: 'How many states are there in the USA?',
  options: [
    {optionId: 'states1', statement: '30'},
    {optionId: 'states2', statement: '50'},
    {optionId: 'states3', statement: '51'},
    {optionId: 'states4', statement: '200'},
    {optionId: 'states5', statement: 'none'},
  ]
}

export const assessment1: Assessment = {
  assessmentName: 'Test assessment ',
  assessmentId: 'test-assessment1',
  tasks: [task_primaryColors, task_howManyStates],
  order: TaskOrdering.OrderOfEntry
}





