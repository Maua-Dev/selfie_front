import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CardStatusService } from 'src/app/services/card-status.service';
import { SelfieStudent } from 'src/app/services/selfie-student.service';
import { Student } from 'src/entities/student';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  eventoPai !: boolean                      // 4) definindo uma variavel a ser manipulada - pensei nisso
  nome !: any
  student !: any 
  statusCamera !: boolean

  constructor(public selfieStudent : SelfieStudent, public cardStatusService : CardStatusService) { }

  ngOnInit(): void {
    this.getStudent()
  }

  status!:string

  public showStatusLastCard(){
    //this.status = this.cardStatusService.gettingStatus()
    console.log(this.status)
  }

  public getStudent(){
    this.selfieStudent.getStudent().subscribe(response =>{
      this.student = Student.createStudent(response);             //recebe o estudante
      this.nome = this.student.getNome()
    })
  } 

  eventoClick(){
    this.eventoPai = true               // 5) atribuindo o valor (transmitido do filho para o pai) para a variavel (4)
  }

}
