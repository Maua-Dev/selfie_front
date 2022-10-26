import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaChecarSelfieComponent } from './tela-checar-selfie.component';

describe('TelaChecarSelfieComponent', () => {
  let component: TelaChecarSelfieComponent;
  let fixture: ComponentFixture<TelaChecarSelfieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaChecarSelfieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaChecarSelfieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
