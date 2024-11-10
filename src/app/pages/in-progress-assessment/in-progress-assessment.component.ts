import { Component, computed, inject, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import {
  AssessmentInProgressBannerComponent
} from '../../components/assessment-in-progress-banner/assessment-in-progress-banner.component';
import { TaskPanelComponent } from '../../components/task-panel/task-panel.component';
import { AssessmentService } from '../../services/assessment.service';
import { Assessment } from '../../model/assessment.model';
import { Task, TaskType } from '../../model/assessment.model';
import { AssessmentInProgressStateService } from '../../services/assessment-in-progress-state.service';

@Component({
  selector: 'app-in-progress-assessment',
  standalone: true,
  imports: [
    AssessmentInProgressBannerComponent,
    TaskPanelComponent
  ],
  templateUrl: './in-progress-assessment.component.html',
  styleUrl: './in-progress-assessment.component.css'
})
export class InProgressAssessmentComponent implements OnInit {
  private inProgressState = inject(AssessmentInProgressStateService);

  constructor() {

  }

  ngOnInit() {

  }



}
