import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaTirarSelfieComponent } from './tela-tirar-selfie.component';

describe('TelaTirarSelfieComponent', () => {
  let component: TelaTirarSelfieComponent;
  let fixture: ComponentFixture<TelaTirarSelfieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaTirarSelfieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaTirarSelfieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
