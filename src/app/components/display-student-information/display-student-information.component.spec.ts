import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStudentInformationComponent } from './display-student-information.component';

describe('DisplayStudentInformationComponent', () => {
  let component: DisplayStudentInformationComponent;
  let fixture: ComponentFixture<DisplayStudentInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayStudentInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayStudentInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
