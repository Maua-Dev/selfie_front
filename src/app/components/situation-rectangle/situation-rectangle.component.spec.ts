import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationRectangleComponent } from './situation-rectangle.component';

describe('SituationRectangleComponent', () => {
  let component: SituationRectangleComponent;
  let fixture: ComponentFixture<SituationRectangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SituationRectangleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SituationRectangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
