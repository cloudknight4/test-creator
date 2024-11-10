import { ChangeDetectionStrategy, Component, computed, inject, input, InputSignal, Signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AssessmentInProgressStateService } from '../../services/assessment-in-progress-state.service';

@Component({
  selector: 'app-assessment-in-progress-banner',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './assessment-in-progress-banner.component.html',
  styleUrl: './assessment-in-progress-banner.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssessmentInProgressBannerComponent {
  private inProgressState = inject(AssessmentInProgressStateService);

  taskNumber = this.inProgressState.currentTaskNumber;
  totalTasks = this.inProgressState.totalTasks;

  timeTaken = input();
  timeRemaining = input();
  totalAssessmentTime = input();

  areAllTasksCompleted = this.inProgressState.areAllTasksCompleted;
  constructor() {
  }

  handlePreviousClick() {
    this.taskNumber.update((value) => value - 1);
  }

  handleNextClick() {
    this.taskNumber.update((value) => value + 1);
  }


}
