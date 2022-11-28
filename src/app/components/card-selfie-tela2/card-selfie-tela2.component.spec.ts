import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSelfieTela2Component } from './card-selfie-tela2.component';

describe('CardSelfieTela2Component', () => {
  let component: CardSelfieTela2Component;
  let fixture: ComponentFixture<CardSelfieTela2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSelfieTela2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSelfieTela2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
