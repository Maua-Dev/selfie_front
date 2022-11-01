import { Selfie } from 'src/entities/selfie';
import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/entities/student';
import { UpdateSelfieStateService } from 'src/app/services/update-selfie-state.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {

  @Input() public studentToDisplay! : Student
  @Input() public photoToDisplay! : Selfie
  constructor(private updateSelfieService : UpdateSelfieStateService) { 
  }

  SetSelfieStateAsReproved(newState : string) : void{
    this.updateSelfieService.UpdateSelfieState(this.studentToDisplay.GetRA(), this.photoToDisplay.idSelfie.toString(), newState, '', '')
    console.log(`Settei como ${newState}`)
  }

  ngOnInit(): void {

  }
 
}
