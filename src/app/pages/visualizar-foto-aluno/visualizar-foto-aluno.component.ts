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

  private selfiesList: Selfie[] = [];
  selfiesListFiltered!: Selfie[];

  selfieFiltersButtons: boolean[] = [false, false, false];
  studentsFiltersButtons: boolean[] = [false, false, false, false];

  constructor(
    private fetchStudentService: FetchStudent,
    private fetchSelfieService: FetchSelfieService
  ) {}

  ngOnInit() {
    this.GetSelfiesList();
    this.GetStudentsList();
  }

  GetSelfiesList(): void {
    this.fetchSelfieService.FetchAllSelfies().subscribe((resp: any) => {
      let allSelfies = resp['all_selfies'];

      let selfiesList: Selfie[] = [];
      allSelfies.forEach((selfieJson: any) => {
        let selfie: Selfie = Selfie.InstatiateSelfieFromJson(selfieJson);

        selfiesList.push(selfie);
      });

      this.selfiesList = selfiesList;
      this.selfiesListFiltered = this.selfiesList.slice();
    });
  }

  GetStudentsList(): void {
    this.fetchStudentService.FetchStudentsList().subscribe((resp: any) => {
      let allStudentsDict = resp['all_students'];

      let studentsList: Student[] = [];

      for (let studentRa in allStudentsDict) {
        let studentJson = allStudentsDict[studentRa];

        let student: Student = new Student(
          studentJson['name'],
          studentRa,
          studentJson['email'],
          studentJson['status'],
          studentJson['selfies']
        );

        studentsList.push(student);
      }

      this.studentsList = studentsList;
      this.studentsListFiltered = this.studentsList.slice();
    });
  }

  FilterSelfieByState(indexButton: number, state: string): void {
    if (state == '') {
      this.selfiesListFiltered = this.selfiesList.slice();
      for (let i = 0; i < this.selfieFiltersButtons.length; i++) {
        this.selfieFiltersButtons[i] = false;
      }
      return;
    }

    let stateFilter = state

    if(stateFilter == 'PENDING_REVIEW'){
      stateFilter = 'IN_REVIEW'
    }

    this.selfieFiltersButtons[indexButton] =
      !this.selfieFiltersButtons[indexButton];

    if (this.selfieFiltersButtons[indexButton]) {
      this.selfiesListFiltered = this.selfiesList.filter(
        (element: Selfie): boolean => {
          return element.state == stateFilter;
        }
      );
    } else {
      this.selfiesListFiltered = this.selfiesListFiltered.concat(
        this.selfiesList.filter((element: Selfie): boolean => {
          return element.state != stateFilter;
        })
      );
    }
  }

  FilterStudentsByStatus(indexButton: number, status: string): void {
    this.studentsFiltersButtons[indexButton] =
      !this.studentsFiltersButtons[indexButton];

    if (this.studentsFiltersButtons[indexButton]) {
      this.studentsListFiltered = this.studentsList.filter(
        (element: Student): boolean => {
          return element.status == status;
        }
      );
    } else {
      this.studentsListFiltered = this.studentsListFiltered.concat(
        this.studentsList.filter((element: Student): boolean => {
          return element.status != status;
        })
      );
    }
  }
}
