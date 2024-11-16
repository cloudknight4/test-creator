import { computed, effect, inject, Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { AssessmentService } from './assessment.service';
import { Assessment, Task, TaskResponse } from '../model/assessment.model';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class AssessmentInProgressStateService {

  private readonly assessmentService = inject(AssessmentService);

  readonly completedTasks = new Set<string>();

  readonly assessmentSig: Signal<Assessment | undefined> = signal(undefined);

  readonly currentTaskNumber = signal<number>(1);
  readonly totalTasks = signal<number>(0);
  readonly numberOfTasksCompleted = signal<number>(0);

  readonly task = computed<Task>(() =>
    this.assessmentSig()?.tasks[this.currentTaskNumber() - 1] ?? {} as Task
  );
  readonly areAllTasksCompleted = computed<boolean | undefined>(() =>
    this.totalTasks() === this.numberOfTasksCompleted()
  );

  constructor() {
    this.assessmentSig = this.assessmentService.getAssessment('in development');
    const assessment = this.assessmentSig();

    if (assessment) {
      this.totalTasks.set(assessment.tasks.length);
      assessment.tasks.forEach((task: Task) => {
        if (task?.taskResponse) {
          this.completedTasks.add(task.taskId);
          this.numberOfTasksCompleted.update(value => value + 1);
        }
      })
    }
  }

  respondToTask_SingleSelect(task: Task, selectedOptionId: string ) {
    const taskId = task.taskId;
    if (!this.completedTasks.has(taskId)) {
      this.numberOfTasksCompleted.update(value => value + 1);
      this.completedTasks.add(taskId);
    }

    if (task.taskResponse?.selectedOptionIds) {
      task.taskResponse.selectedOptionIds = [selectedOptionId];
    } else {
      task.taskResponse = {
        taskId: task.taskId,
        selectedOptionIds: [selectedOptionId]
      }
    }


  }

}
