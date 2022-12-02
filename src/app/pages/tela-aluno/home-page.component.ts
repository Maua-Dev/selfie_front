import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { CardStatusService } from 'src/app/services/card-status.service';
import { SelfieStudent } from 'src/app/services/selfie-student.service';
import { UploadSelfieService } from 'src/app/services/upload-selfie.service';
import { Student } from 'src/entities/student-aluno-domain';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  nome!: string;
  ra!: string;
  email!: string;
  student!: Student;
  statusCamera!: boolean;

  constructor(
    public uploadSelfie: UploadSelfieService,
    public selfieStudent: SelfieStudent,
    public cardStatusService: CardStatusService,
  ) {}

  ngOnInit(): void {
    this.getStudent();
    this.uploadSelfie.getStudent()
  }

  status!: string;

  public getStudent() {
    this.selfieStudent.getStudent().subscribe((response) => {
      this.student = Student.createStudent(response); 
      this.tratarNome(this.student.getNome())
    });
  }

  public tratarNome(nomeCompleto:string){
    let primeiroNome = nomeCompleto.split(" ")[0] 
    let primeiroNomeLowerCase = primeiroNome.toLowerCase()
    let primeiraLetraUpperCase = primeiroNome[0].toUpperCase()
    let restoNomeLowerCase = primeiroNomeLowerCase.substring(1,primeiroNome.length)
    let nomeExibir = primeiraLetraUpperCase + restoNomeLowerCase
    this.nome = nomeExibir
  }
}
