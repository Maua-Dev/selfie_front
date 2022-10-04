import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPhotoComponent } from './display-photo.component';

describe('DisplayPhotoComponent', () => {
  let component: DisplayPhotoComponent;
  let fixture: ComponentFixture<DisplayPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayPhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
