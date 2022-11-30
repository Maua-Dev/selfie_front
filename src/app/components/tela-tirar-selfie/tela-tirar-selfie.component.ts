import { Component, OnInit } from '@angular/core';
import { SelfieStudent } from 'src/app/services/selfie-student.service';
import { Student } from 'src/entities/student-aluno-domain';

@Component({
  selector: 'app-tela-tirar-selfie',
  templateUrl: './tela-tirar-selfie.component.html',
  styleUrls: ['./tela-tirar-selfie.component.css'],
})
export class TelaTirarSelfieComponent implements OnInit {
  nome!: any;
  student!: any;

  constructor(public selfieStudent: SelfieStudent) {}

  ngOnInit(): void {
    this.getStudent();
  }

  public getStudent() {
    this.selfieStudent.getStudent().subscribe((response) => {
      this.student = Student.createStudent(response); //recebe o estudante
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
