import { TestBed } from '@angular/core/testing';

import { AssessmentInProgressStateService } from './assessment-in-progress-state.service';

describe('AssessmentInProgressStateService', () => {
  let service: AssessmentInProgressStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssessmentInProgressStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
