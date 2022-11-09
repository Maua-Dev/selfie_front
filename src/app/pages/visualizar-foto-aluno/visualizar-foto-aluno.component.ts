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
  private _studentsList: Student[] = [];
  studentsListFiltered!: Student[];

  private _selfiesList: Selfie[] = [];
  selfiesListFiltered!: Selfie[];

  selfieFiltersButtons: boolean[] = [false, false, false];
  studentsFiltersButtons: boolean[] = [false, false, false, false];

  private _currentActivatedSelfieFilters: string[] = [];
  private _currentActivatedStudentsFilters: string[] = [];

  constructor(
    private fetchStudentService: FetchStudent,
    private fetchSelfieService: FetchSelfieService
  ) {}

  ngOnInit() {
    this.GetSelfiesList();
    this.GetStudentsList();
  }

  OnSetSelfieState() {
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

      this._selfiesList = selfiesList;
      this.selfiesListFiltered = this._selfiesList.slice();

      this.FilterSelfiesLists();
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

      this._studentsList = studentsList;
      this.studentsListFiltered = this._studentsList.slice();

      this.FilterStudentsLists()
    });
  }

  FilterSelfieByState(indexButton: number, state: string): void {
    if (state == '') {
      this.selfiesListFiltered = this._selfiesList.slice();
      for (let i = 0; i < this.selfieFiltersButtons.length; i++) {
        this.selfieFiltersButtons[i] = false;
      }
      return;
    }

    this.selfieFiltersButtons[indexButton] =
      !this.selfieFiltersButtons[indexButton];

    if (this.selfieFiltersButtons[indexButton]) {
      //Ativando filtro
      this._currentActivatedSelfieFilters.push(state);

      this.FilterSelfiesLists();
    } else {
      //Desativando filtro
      this._currentActivatedSelfieFilters.splice(
        this._currentActivatedSelfieFilters.indexOf(state),
        1
      ); //removendo o estado

      if (this._currentActivatedSelfieFilters.length <= 0) {
        this.selfiesListFiltered = this._selfiesList.slice();
        return;
      }

      this.FilterSelfiesLists();
    }
  }

  FilterStudentsByStatus(indexButton: number, status: string): void {
    this.studentsFiltersButtons[indexButton] =
      !this.studentsFiltersButtons[indexButton];

    if (this.studentsFiltersButtons[indexButton]) {
      //Ativando filtro
      this._currentActivatedStudentsFilters.push(status);

      this.FilterStudentsLists()
    } else {
      //Desativando filtro
      this._currentActivatedStudentsFilters.splice(
        this._currentActivatedStudentsFilters.indexOf(status),
        1
      );

      if (this._currentActivatedStudentsFilters.length <= 0) {
        this.studentsListFiltered = this._studentsList.slice();
        return;
      }

      this.FilterStudentsLists()

    }
  }

  private FilterSelfiesLists(): void {
    if (this._currentActivatedSelfieFilters.length <= 0) return;
    this.selfiesListFiltered = this._selfiesList.filter(
      (element: Selfie): boolean => {
        return this._currentActivatedSelfieFilters.includes(element.state);
      }
    );
  }

  private FilterStudentsLists(): void {
    if (this._currentActivatedStudentsFilters.length <= 0) return;
    this.studentsListFiltered = this._studentsList.filter(
      (element: Student): boolean => {
        return this._currentActivatedStudentsFilters.includes(element.status!);
      }
    );
  }
}
