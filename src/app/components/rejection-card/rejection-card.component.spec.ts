import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectionCardComponent } from './rejection-card.component';

describe('RejectionCardComponent', () => {
  let component: RejectionCardComponent;
  let fixture: ComponentFixture<RejectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});