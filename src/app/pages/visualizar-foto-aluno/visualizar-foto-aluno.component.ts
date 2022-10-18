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
  student!: Student
  studentsList!: Student[]

  constructor(private fetchStudentService: FetchStudent) {
  }

  ngOnInit(): void {
    this.GetStudent()
    this.GetStudentList()
  }
  async GetStudent(): Promise<void> {
      this.student = await lastValueFrom(
      this.fetchStudentService.FetchStudent('')
    );
  }
  async GetStudentList(): Promise<void> {
    this.studentsList = await lastValueFrom(
      this.fetchStudentService.FetchStudentsList()
    );
    console.log(this.studentsList)
  }
}
