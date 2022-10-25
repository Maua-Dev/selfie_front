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
    this.GetSelfiesList();
  }

  GetSelfiesList(): void {
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
        this.GetSelfiesListByState("")

      }
    );
  }


  GetSelfiesListByState(state:string) : void{
    if(state == ''){
      this.GetSelfiesList()
      return
    }

    let studentListCopy :Student[] = this.studentsList.slice()
    let newStudentList : Student[] = []

    studentListCopy.forEach(student => {
      let selfieListFiltered : Selfie[] = []
      
      student.GetUploadedSelfiesList().forEach(selfie => {
        if(selfie.state == state){
          selfieListFiltered.push(selfie)
        }
      });

      newStudentList.push(new Student(student.GetName(), student.GetRA(), selfieListFiltered))
    });

    this.studentsList = newStudentList

  }

}
