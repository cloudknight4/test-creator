export interface Assessment {
  assessmentName: string,
  assessmentId: string,
  tasks: Task[],
  order: TaskOrdering
}

export interface Task {
  taskId: string,
  taskType: TaskType,
  directions?: string,
  question: string,
  solution?: string,
  options?: Option[],
  selection?: string,
  userInput?: string
}

export interface Option {
  optionId: string,
  statement: string
}

export enum TaskOrdering {
  Random,
  OrderOfEntry
}

export enum TaskType {
  SingleSelection,
  SelectAllThatApply,
  UserInput
}
