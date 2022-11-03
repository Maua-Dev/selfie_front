import { FetchStudent } from './../../services/fetch-student';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/entities/student';
import { Selfie } from 'src/entities/selfie';

@Component({
  selector: 'app-visualizar-foto-aluno',
  templateUrl: './visualizar-foto-aluno.component.html',
  styleUrls: ['./visualizar-foto-aluno.component.css'],
})
export class VisualizarFotoAlunoComponent implements OnInit {
  private studentsList!: Student[];
  studentsListFiltered!: Student[];

  constructor(private fetchStudentService: FetchStudent) {}

  ngOnInit() {
    this.GetSelfiesList();
  }

  GetSelfiesList(): void {
    this.fetchStudentService.FetchStudentsList().subscribe((resp: any) => {
      let studentsJson = resp['student'];
      let selfiesListJson = resp['selfies'];

      let studentToReturn = Student.FactoryStudentFromJsonAndSelfieJson(studentsJson, selfiesListJson);
      this.studentsList = [studentToReturn, studentToReturn];
      this.studentsListFiltered = this.studentsList.slice();
    });
  }

  GetSelfiesListByState(state: string): void {
    this.studentsListFiltered = this.studentsList.slice();
    let newStudentList: Student[] = [];

    if (state == '') {
      return;
    }

    this.studentsListFiltered.forEach((student) => {
      let selfieListFiltered: Selfie[] = [];

      student.GetUploadedSelfiesList().forEach((selfie) => {
        if (selfie.state == state) {
          selfieListFiltered.push(selfie);
        }
      });

      newStudentList.push(
        new Student(student.GetName(), student.GetRA(), selfieListFiltered)
      );
    });

    this.studentsListFiltered = newStudentList;
  }

  k(){
    console.log("Eu te amo")
  }

}
