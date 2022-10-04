import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarFotoAlunoComponent } from './visualizar-foto-aluno.component';

describe('VisualizarFotoAlunoComponent', () => {
  let component: VisualizarFotoAlunoComponent;
  let fixture: ComponentFixture<VisualizarFotoAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarFotoAlunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarFotoAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
