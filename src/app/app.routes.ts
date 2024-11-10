import { Routes } from '@angular/router';
import { TaskPanelComponent } from './components/task-panel/task-panel.component';
import {
  AssessmentInProgressBannerComponent
} from './components/assessment-in-progress-banner/assessment-in-progress-banner.component';
import { InProgressAssessmentComponent } from './pages/in-progress-assessment/in-progress-assessment.component';

export const routes: Routes = [
  { path: 'in-progress-assessment', component: InProgressAssessmentComponent }
];
