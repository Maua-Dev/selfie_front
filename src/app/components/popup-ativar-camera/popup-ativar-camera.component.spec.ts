import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAtivarCameraComponent } from './popup-ativar-camera.component';

describe('PopupAtivarCameraComponent', () => {
  let component: PopupAtivarCameraComponent;
  let fixture: ComponentFixture<PopupAtivarCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAtivarCameraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupAtivarCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
