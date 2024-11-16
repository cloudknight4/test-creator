import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { TaskType } from '../../model/assessment.model';
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
  styleUrl: './task-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskPanelComponent implements OnInit {
  private inProgressState = inject(AssessmentInProgressStateService);

  protected readonly TaskType = TaskType;
  currentTaskNumber = this.inProgressState.currentTaskNumber;
  task = this.inProgressState.task;

  radioButtonSelection: string | undefined = undefined;


  constructor() {}

  ngOnInit() {

  }

  handleRadioButtonChangeForSingleSelection($event: any) {
    //console.log('###deleteme $event: ', $event.value);
    const optionId = $event.value;
    const task = this.task();

    this.inProgressState.respondToTask_SingleSelect(task, optionId);
  }

}
