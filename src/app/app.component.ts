import { ConsultStudentSituationService } from './services/consult-student-situation.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aprovado!:string
  reprovado:string = 'Reprovado'
  title = 'selfie-maua-front'

  constructor(private consultSituationService : ConsultStudentSituationService){
    this.aprovado = this.consultSituationService.GetStudentSituation()
  }


}
