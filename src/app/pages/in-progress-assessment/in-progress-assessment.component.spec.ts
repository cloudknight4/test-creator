import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressAssessmentComponent } from './in-progress-assessment.component';

describe('InProgressAssessmentComponent', () => {
  let component: InProgressAssessmentComponent;
  let fixture: ComponentFixture<InProgressAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InProgressAssessmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InProgressAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
