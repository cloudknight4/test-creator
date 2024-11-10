import { computed, inject, Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { AssessmentService } from './assessment.service';
import { Assessment, Task, TaskResponse } from '../model/assessment.model';

@Injectable({
  providedIn: 'root'
})
export class AssessmentInProgressStateService {
  private assessmentService = inject(AssessmentService);

  private finishedTasks = new Set<string>();
  private taskResponses = new Map<string, TaskResponse>();

  private _assessmentSig: Signal<Assessment | undefined> = signal(undefined);

  private _currentTaskNumber = signal<number>(1);
  private _totalTasks = signal<number>(0);

  private _task = computed<Task>(() =>
    this.assessmentSig()?.tasks[this._currentTaskNumber() - 1] ?? {} as Task
  );
  private _areAllTasksCompleted = signal<boolean>(false);

  private _currentTaskResponse_SingleSelect = signal<string | null | undefined>(null);

  constructor() {
    this._assessmentSig = this.assessmentService.getAssessment('in development');
    const assessment = this._assessmentSig();

    if (assessment) {
      this._totalTasks.set(assessment.tasks.length);
    }
  }


  get assessmentSig(): Signal<Assessment | undefined> {
    return this._assessmentSig;
  }

  get currentTaskNumber(): WritableSignal<number> {
    return this._currentTaskNumber;
  }

  get totalTasks(): WritableSignal<number> {
    return this._totalTasks;
  }

  get task(): Signal<Task> {
    return this._task;
  }

  get currentTaskResponse_SingleSelect(): WritableSignal<string | null | undefined> {
    return this._currentTaskResponse_SingleSelect;
  }

  get areAllTasksCompleted(): WritableSignal<boolean> {
    return this._areAllTasksCompleted;
  }
}
