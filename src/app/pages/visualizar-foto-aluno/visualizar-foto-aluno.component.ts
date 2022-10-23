import { FetchStudent } from './../../services/fetch-student';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/entities/student';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-visualizar-foto-aluno',
  templateUrl: './visualizar-foto-aluno.component.html',
  styleUrls: ['./visualizar-foto-aluno.component.css'],
})
export class VisualizarFotoAlunoComponent implements OnInit {
  studentsList!: Student[];

  constructor(private fetchStudentService: FetchStudent) {}

  ngOnInit(): void {
    this.GetStudentList();
  }

  async GetStudentList(): Promise<void> {
    this.studentsList = await lastValueFrom(
      this.fetchStudentService.FetchStudentsList()
    );
  }
}
