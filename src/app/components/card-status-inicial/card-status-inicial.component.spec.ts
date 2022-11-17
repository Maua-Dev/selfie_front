import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStatusInicialComponent } from './card-status-inicial.component';

describe('CardStatusInicialComponent', () => {
  let component: CardStatusInicialComponent;
  let fixture: ComponentFixture<CardStatusInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardStatusInicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardStatusInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
