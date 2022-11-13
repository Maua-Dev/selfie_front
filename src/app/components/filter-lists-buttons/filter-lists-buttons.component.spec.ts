import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterListsButtonsComponent } from './filter-lists-buttons.component';

describe('FilterListsButtonsComponent', () => {
  let component: FilterListsButtonsComponent;
  let fixture: ComponentFixture<FilterListsButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterListsButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterListsButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
