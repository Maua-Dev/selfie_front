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

  private readonly baseURL: string | undefined = environment.BASE_URL_ESTUDANTE_DOMAIN

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
      `${this.baseURL}/request-upload-selfie`,body,{observe:'response'}
    )
  }

  public async testSendImageService(selfie:string) {
    var linkS3 : any
    this.requestUpload().subscribe((response => {
      if(response.status === 200){
        linkS3 = response.body
        this.uploadSelfie(selfie,linkS3)
      }
      
    }))}

  public async uploadSelfie(selfie: string, link:any){
    //tratando a selfie
    let base64 = selfie;
    let base64Res = await fetch(base64);
    const blob = await base64Res.blob();

    //headers = link fields
    const headers = link.fields
    console.log(typeof(headers))

    this.http.put(link.url, blob, {headers}).subscribe((res) => {
      console.log(res);
    });
  }

}

