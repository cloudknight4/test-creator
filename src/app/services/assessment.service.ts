import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assessment } from '../model/assessment.model';
import { assessment1} from '../../dummy-data/assessments-data';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  private assessments$: Observable<Assessment[]> = of([assessment1]);

  constructor() { }

  getAllAssessments() {

  }

  getAssessment(assessmentId: string) {

  }

}
