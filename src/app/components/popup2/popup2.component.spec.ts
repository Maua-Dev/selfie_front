import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupComponent2 } from './popup2.component';

describe('PopupComponent2', () => {
  let component: PopupComponent2;
  let fixture: ComponentFixture<PopupComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupComponent2 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
