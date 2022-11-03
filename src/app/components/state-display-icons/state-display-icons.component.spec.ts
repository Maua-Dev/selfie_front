import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDisplayIconsComponent } from './state-display-icons.component';

describe('StateDisplayIconsComponent', () => {
  let component: StateDisplayIconsComponent;
  let fixture: ComponentFixture<StateDisplayIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateDisplayIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateDisplayIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
