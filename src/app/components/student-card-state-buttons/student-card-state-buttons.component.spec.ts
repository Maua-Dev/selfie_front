import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCardStateButtonsComponent } from './student-card-state-buttons.component';

describe('StudentCardStateButtonsComponent', () => {
  let component: StudentCardStateButtonsComponent;
  let fixture: ComponentFixture<StudentCardStateButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentCardStateButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentCardStateButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
