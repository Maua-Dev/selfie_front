import { Component } from '@angular/core';
import { Student } from 'src/entities/student';
import { ConsultStudentService } from './services/consult-student-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aprovado!:string
  reprovado:string = 'Reprovado'
  title = 'selfie-maua-front';

  //a = new Student("Davi","20/10/2022","Aprovado","")

  constructor(/*private consult : ConsultStudentService*/){
    //this.aprovado = this.consult.GetServiceStatus(this.a);
  }
}
