import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGuideDetailsComponent } from './single-guide-details.component';

describe('SingleGuideDetailsComponent', () => {
  let component: SingleGuideDetailsComponent;
  let fixture: ComponentFixture<SingleGuideDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleGuideDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleGuideDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
