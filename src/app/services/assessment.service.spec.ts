import { TestBed } from '@angular/core/testing';

import { AssessmentService } from './assessment.service';
import { Assessment } from '../model/assessment.model';

describe('AssessmentService', () => {
  let assessmentService: AssessmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    assessmentService = TestBed.inject(AssessmentService);
  });

  it('should be created', () => {
    expect(assessmentService).toBeTruthy();
  });

  it('behavioral subject behavior', (done) => {

  })
});
