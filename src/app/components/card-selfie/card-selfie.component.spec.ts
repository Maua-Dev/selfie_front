import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSelfieComponent } from './card-selfie.component';

describe('CardSelfieComponent', () => {
  let component: CardSelfieComponent;
  let fixture: ComponentFixture<CardSelfieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSelfieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSelfieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
