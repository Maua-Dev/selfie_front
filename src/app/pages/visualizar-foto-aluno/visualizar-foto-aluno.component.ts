import { FetchStudent } from './../../services/fetch-student';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/entities/student';
import { lastValueFrom } from 'rxjs';
import { Selfie } from 'src/entities/selfie';

declare var window: any;

@Component({
  selector: 'app-visualizar-foto-aluno',
  templateUrl: './visualizar-foto-aluno.component.html',
  styleUrls: ['./visualizar-foto-aluno.component.css'],
})
export class VisualizarFotoAlunoComponent implements OnInit {
  private studentsList!: Student[];
  studentsListFiltered!: Student[];
  form: any;

  constructor(private fetchStudentService: FetchStudent) {}

  ngOnInit() {
    this.GetSelfiesList();
    this.form = new window.bootstrap.Modal(
      document.getElementById('pop-up-modal')
    );
  }

  GetSelfiesList(): void {
    this.fetchStudentService.FetchStudentsList().subscribe((resp: any) => {
      let studentsJson = resp['student'];
      let selfiesListJson = resp['selfies'];

      let selfiesList: Selfie[] = [];

      selfiesListJson.forEach((selfie: any) => {
        selfiesList.push(
          new Selfie(
            selfie['idSelfie'],
            selfie['dateUpload'],
            selfie['url'],
            selfie['state'],
            selfie['rejectionReason'],
            selfie['rejectionDescription']
          )
        );
      });

      selfiesList = selfiesList.sort(
        (a: Selfie, b: Selfie) =>
          new Date(a.dateUpload).getUTCMilliseconds() -
          new Date(b.dateUpload).getUTCMilliseconds()
      );

      let studentToReturn = new Student(
        studentsJson['name'],
        studentsJson['ra'],
        selfiesList
      );
      this.studentsList = [studentToReturn];
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

    OpenPopUp(): void {
    this.form.show();
  }
}
