import { FetchStudent } from './../../services/fetch-student';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/entities/student';
import { Selfie } from 'src/entities/selfie';
import { FetchSelfieService } from 'src/app/services/fetch-selfie.service';

@Component({
  selector: 'app-visualizar-foto-aluno',
  templateUrl: './visualizar-foto-aluno.component.html',
  styleUrls: ['./visualizar-foto-aluno.component.css'],
})
export class VisualizarFotoAlunoComponent implements OnInit {
  private studentsList: Student[] = [];
  studentsListFiltered!: Student[];

  private selfiesList : Selfie[] = [];
  selfiesListFiltered! : Selfie[];

  constructor(private fetchStudentService: FetchStudent, private fetchSelfieService : FetchSelfieService) {}

  ngOnInit() {
    this.GetSelfiesList()
    this.GetStudentsList()
  }

  GetSelfiesList() : void{
    this.fetchSelfieService.FetchAllSelfies().subscribe((resp:any) =>{
      let allSelfies = resp['all_selfies']

      allSelfies.forEach((selfieJson : any) => {
        let selfie :Selfie = Selfie.InstatiateSelfieFromJson(selfieJson)

        this.selfiesList.push(selfie)
      });
    })
  }
  
  GetStudentsList() : void{
    this.fetchStudentService.FetchStudentsList().subscribe((resp:any) =>{
      let allStudentsDict = resp['all_students']

      for(let studentRa in allStudentsDict){
        let studentJson = allStudentsDict[studentRa]

        let student :Student = new Student(studentJson['name'], studentRa, studentJson['email'], studentJson['status'], studentJson['selfies'])

        this.studentsList.push(student)
      }
    
    })
  }

}



  // GetSelfiesList(): void {
  //   this.fetchStudentService.FetchStudentsList().subscribe((resp: any) => {
  //     let studentsJson = resp['student'];
  //     let selfiesListJson = resp['selfies'];

  //     let studentToReturn = Student.FactoryStudentFromJsonAndSelfieJson(studentsJson, selfiesListJson);
  //     this.studentsList = [studentToReturn, studentToReturn, studentToReturn, studentToReturn, studentToReturn, studentToReturn, studentToReturn, studentToReturn];
  //     this.studentsListFiltered = this.studentsList.slice();
  //   });
  // }

  // GetSelfiesListByState(state: string): void {
  //   this.studentsListFiltered = this.studentsList.slice();
  //   let newStudentList: Student[] = [];

  //   if (state == '') {
  //     return;
  //   }

  //   this.studentsListFiltered.forEach((student) => {
  //     let selfieListFiltered: Selfie[] = [];

  //     student.GetUploadedSelfiesList().forEach((selfie) => {
  //       if (selfie.state == state) {
  //         selfieListFiltered.push(selfie);
  //       }
  //     });

  //     newStudentList.push(
  //       new Student(student.GetName(), student.GetRA(), student.GetEmail(), selfieListFiltered)
  //     );
  //   });

  //   this.studentsListFiltered = newStudentList;
  // }
