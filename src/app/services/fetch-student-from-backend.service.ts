import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from 'src/entities/student';
import { FetchStudent } from './fetch-student';
import { Selfie } from 'src/entities/selfie';

@Injectable({
  providedIn: 'root',
})
export class FetchStudentFromBackendService implements FetchStudent {
  studentsList: Student[] = [];
  private readonly baseURL: string =
    'https://idxd34yq6k.execute-api.us-east-1.amazonaws.com/prod/mss-student';

  constructor() {}

  async FetchStudent(studentRA: string) {
    let student
    await this.GetStudentFromAPI(studentRA).then((resp) => {
      student = resp;
    });
  }

  async FetchStudentsList() {
    let studentsList
    await this.GetStudentListFromAPI().then((resp) => {
      studentsList = resp;
    });
    return studentsList
  }

  private async GetStudentListFromAPI() {
    let resp = await fetch(this.baseURL + '/get-selfies-by-ra?ra=21010757');
    let json = await resp.json();
    let studentJson = await json['student'];
    let selfiesListJson: any[] = await json['selfies'];

    let selfiesList: Selfie[] = [];

    selfiesListJson.forEach((selfie) => {
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

    return this.studentsList = [
      new Student(studentJson['name'], studentJson['ra'], selfiesList),
    ]
  }

  private async GetStudentFromAPI(ra : string) {
    let resp = await fetch(this.baseURL + `/get-selfies-by-ra?ra=${ra}`);
    let json = await resp.json();
    let studentJson = await json['student'];
    let selfiesListJson: any[] = await json['selfies'];

    let selfiesList: Selfie[] = [];

    selfiesListJson.forEach((selfie) => {
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

    return new Student(studentJson['name'], studentJson['ra'], selfiesList)
  }

}
