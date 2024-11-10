import { Component, inject, input } from '@angular/core';
import { Task, TaskType } from '../../model/assessment.model';
import { OptionMarkerPipe } from '../../pipes/option-marker.pipe';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { AssessmentInProgressStateService } from '../../services/assessment-in-progress-state.service';

@Component({
  selector: 'app-task-panel',
  standalone: true,
  imports: [
    OptionMarkerPipe,
    MatRadioModule,
    FormsModule
  ],
  templateUrl: './task-panel.component.html',
  styleUrl: './task-panel.component.css'
})
export class TaskPanelComponent {
  private inProgressState = inject(AssessmentInProgressStateService);
  protected readonly TaskType = TaskType;
  currentTaskNumber = this.inProgressState.currentTaskNumber;
  task = this.inProgressState.task;

  currentTaskResponse_SingleSelect = this.inProgressState.currentTaskResponse_SingleSelect;

  selectedOptionId?: string;

  constructor() {
  }

  handleRadioButtonChange($event: any) {
    //console.log('###deleteme $event: ', $event.value);
    this.currentTaskResponse_SingleSelect.set($event.value)
  }

}
