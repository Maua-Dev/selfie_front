import { FetchStudent } from './../../services/fetch-student';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/entities/student';
import { lastValueFrom } from 'rxjs';
import { Selfie } from 'src/entities/selfie';

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

  GetStudentList(): void {
    lastValueFrom(this.fetchStudentService.FetchStudentsList()).then(
      (res: any) => {
        let studentsJson = res['student'];
        let selfiesListJson = res['selfies'];

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
            new Date(a.dateUpload).getUTCMilliseconds() - new Date(b.dateUpload).getUTCMilliseconds()
        );

        let studentToReturn = new Student(
          studentsJson['name'],
          studentsJson['ra'],
          selfiesList
        );
        this.studentsList = [studentToReturn];
      }
    );
  }
}
