import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/entities/student-aluno-domain';
import { SelfieStudent } from './selfie-student.service';

@Injectable({
  providedIn: 'root',
})
export class UploadSelfieService {

  private readonly baseURL: string = environment.BASE_URL_ESTUDANTE_DOMAIN

  constructor(private http: HttpClient, private selfieStudent: SelfieStudent) {}

  students!: Student;
  nome!: string;
  ra!: string;
  email!: string;
  list !: any[]
  
  public getStudent(): any {
    this.selfieStudent.getStudentAndSelfie().subscribe((response) => {
      this.students = Student.createStudent(response.student); //recebe o estudante
      this.nome = this.students.getNome();
      this.ra = this.students.getRa();
      this.email = this.students.getEmail();
      this.list = response.selfies.length
    });
  }

  public requestUpload() : Observable<any>{
    const body = {
        'ra':this.ra,
        'email':this.email,
        'name':this.nome
    }
    return this.http.post(
      `${this.baseURL}`,body
    )
  }

  public async testSendImageService(selfie: string) {
    console.log('ola')
    /*this.requestUpload().subscribe((response => {
      let statusApi = response.status
      console.log(statusApi)   //retorna o status do post - tem que dar 201
      console.log(response)
    }))

    /*let base64 = selfie;

    let base64Res = await fetch(base64);
    const blob = await base64Res.blob();
    const formdata = new FormData();
    for (let val in data.fields) {
      formdata.append(val, data.fields[val]);
    }
    formdata.append('file', blob);
    this.http.post(data.url, formdata).subscribe((res) => {
      console.log(res);
    });*/
  }
}
