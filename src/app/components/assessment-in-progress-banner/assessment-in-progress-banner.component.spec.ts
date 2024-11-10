import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentInProgressBannerComponent } from './assessment-in-progress-banner.component';

describe('AssessmentInProgressBannerComponent', () => {
  let component: AssessmentInProgressBannerComponent;
  let fixture: ComponentFixture<AssessmentInProgressBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssessmentInProgressBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentInProgressBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
