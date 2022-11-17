import { Component, OnInit } from '@angular/core';
import { SelfieStudent } from 'src/app/services/selfie-student.service';
import { Student } from 'src/entities/student-davi';

@Component({
  selector: 'app-tela-tirar-selfie',
  templateUrl: './tela-tirar-selfie.component.html',
  styleUrls: ['./tela-tirar-selfie.component.css']
})
export class TelaTirarSelfieComponent implements OnInit {

  nome !: any
  student !: any 

  constructor(public selfieStudent : SelfieStudent) { }

  ngOnInit(): void {
    this.getStudent()
  }

  public getStudent(){
    this.selfieStudent.getStudent().subscribe(response =>{
      this.student = Student.createStudent(response);             //recebe o estudante
      this.nome = this.student.getNome()
    })
  }

  public getName(){
    this.getStudent()
    this.nome = this.student.getNome()
  }

}
