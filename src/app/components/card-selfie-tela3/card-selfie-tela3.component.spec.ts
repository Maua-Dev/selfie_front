import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSelfieTela3Component } from './card-selfie-tela3.component';

describe('CardSelfieTela3Component', () => {
  let component: CardSelfieTela3Component;
  let fixture: ComponentFixture<CardSelfieTela3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSelfieTela3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSelfieTela3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
