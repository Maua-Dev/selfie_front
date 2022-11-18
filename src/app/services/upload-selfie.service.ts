import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from 'src/entities/student-aluno-domain';
import { SelfieStudent } from './selfie-student.service';

@Injectable({
  providedIn: 'root',
})
export class UploadSelfieService {
  constructor(private http: HttpClient, private selfieStudent: SelfieStudent) {}

  student!: Student;
  nome!: string;
  ra!: string;
  email!: string;

  public getStudent(): any {
    this.selfieStudent.getStudent().subscribe((response) => {
      this.student = Student.createStudent(response); //recebe o estudante
      this.nome = this.student.getNome();
      this.ra = this.student.getRa();
      this.email = this.student.getEmail();
    });
  }

  public async testSendImageService(selfie: string) {
    let data = {
      url: 'https://test-selfie-bucket.s3.amazonaws.com/',
      fields: <any>{
        'x-amz-meta-ra': '21010757',
        'x-amz-meta-name': 'JOAO VITOR CHOUERI BRANCO',
        'x-amz-meta-email': '21.01075-7@maua.br',
        key: '21010757/selfie-2022-11-17-17:53:11-650c2.jpeg',
        AWSAccessKeyId: 'AKIAT26XMTD74XSJ5FPO',
        policy:
          'eyJleHBpcmF0aW9uIjogIjIwMjItMTEtMjFUMjA6NTM6MTFaIiwgImNvbmRpdGlvbnMiOiBbeyJ4LWFtei1tZXRhLXJhIjogIjIxMDEwNzU3In0sIHsieC1hbXotbWV0YS1uYW1lIjogIkpPQU8gVklUT1IgQ0hPVUVSSSBCUkFOQ08ifSwgeyJ4LWFtei1tZXRhLWVtYWlsIjogIjIxLjAxMDc1LTdAbWF1YS5iciJ9LCB7ImJ1Y2tldCI6ICJ0ZXN0LXNlbGZpZS1idWNrZXQifSwgeyJrZXkiOiAiMjEwMTA3NTcvc2VsZmllLTIwMjItMTEtMTctMTc6NTM6MTEtNjUwYzIuanBlZyJ9XX0=',
        signature: 'ElmTjCrcIThs08E7JspOVcf2bCU=',
      },
    };

    let base64 = selfie;

    let base64Res = await fetch(base64);
    const blob = await base64Res.blob();
    const formdata = new FormData();
    for (let val in data.fields) {
      formdata.append(val, data.fields[val]);
    }
    formdata.append('file', blob);
    this.http.post(data.url, formdata).subscribe((res) => {
      console.log(res);
    });
  }
}
