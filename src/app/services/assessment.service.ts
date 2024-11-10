import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { Assessment } from '../model/assessment.model';
import { assessment1} from '../../dummy-data/assessments-data';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  private assessment$: Observable<Assessment> = of(assessment1).pipe(
    tap(() => console.log('###deleteme http called for getting assessments'))
  );

  private assessment = toSignal(this.assessment$, {rejectErrors: true});

  constructor() {
  }

  // getAssessmentSummaries(): {
  //
  // }

  getAssessment(assessmentId: string) {
    return this.assessment;
  }

}
