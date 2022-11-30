import { Selfie } from 'src/entities/selfie';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/entities/student-admin-domain';
import { UpdateSelfieStateService } from 'src/app/services/update-selfie-state.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css'],
})
export class StudentCardComponent implements OnInit {
  @Input() public selfieToDisplay!: Selfie;
  studentSelfie!: Student;

  @Output() OnSetSelfieStateEvent: EventEmitter<any> = new EventEmitter();

   recuseReasons: any = {
    NOT_ALLOWED_BACKGROUND: false,
    COVERED_FACE: false,
    NO_PERSON_RECOGNIZED: false,
  };

  constructor(private updateSelfieService: UpdateSelfieStateService) {}

  SetSelfieState(newState: string): void {
    let newRecuseReasons: string[] = [];

    for (let reason in this.recuseReasons) {
      if (this.recuseReasons[reason]) {
        newRecuseReasons.push(reason);
      }
    }

    this.updateSelfieService.UpdateSelfieState(
      this.selfieToDisplay.student!.ra,
      this.selfieToDisplay.idSelfie.toString(),
      newState,
      newRecuseReasons,
      ''
    ).subscribe(resp =>{
      console.log(this.recuseReasons);
      console.log(resp)
      this.OnSetSelfieStateEvent.emit();
    })
   
  }

  ngOnInit(): void {
    this.studentSelfie = this.selfieToDisplay.student!;
  }

  setReproveReason(reason: string) {
    this.recuseReasons[reason] = !this.recuseReasons[reason];
  }
}
