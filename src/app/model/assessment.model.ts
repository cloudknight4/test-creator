export interface AssessmentSummary {
  assessmentName: string,
  assessmentId: string,
  description: string,
  numberOfTasks: number,
  timeToTake: string,
  numberOfAttempts: string,
}

export interface Assessment {
  assessmentName: string,
  assessmentId: string,
  description: string,
  tasks: Task[],
  order: TaskOrdering,
  weightedTaskScoring?: any[],
  isTimed?: boolean, //if null then false
  canSubmitUnfinished?: boolean, //if null then true
  numberOfAttempts?: number, // if null only one
}

export interface Task {
  taskId: string,
  taskType: TaskType,
  directions?: string,
  question: string,
  options?: Option[],
  taskResponse?: TaskResponse,
  previousTaskResponsesCount?: number
}

//possibly don't need
// export interface InProgressAssessment { //holds user answers
//   assessment: Assessment
//   userId: string,
//   taskIdToTaskResponseMap: Map<string, TaskResponse>,
//   numberOfAttempts?: number, // null is zero
// }

export interface TaskResponse {
  taskId: string,
  selectedOptionIds?: string[],
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
  SelectSpecificNumber,
  UserInput
}
