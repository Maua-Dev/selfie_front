import { FetchStudentService } from './../../services/fetch-student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/entities/student';

@Component({
  selector: 'app-visualizar-foto-aluno',
  templateUrl: './visualizar-foto-aluno.component.html',
  styleUrls: ['./visualizar-foto-aluno.component.css']
})
export class VisualizarFotoAlunoComponent implements OnInit {
  student : Student

  constructor(private fetchStudentService : FetchStudentService) {
    this.student = this.fetchStudentService.FetchStudent("21.00123-8")
   }

  ngOnInit(): void {
  }

}
