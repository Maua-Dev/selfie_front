import { Selfie } from 'src/entities/selfie';
import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/entities/student';
import { UpdateSelfieStateService } from 'src/app/services/update-selfie-state.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css'],
})
export class StudentCardComponent implements OnInit {
  @Input() public selfieToDisplay!: Selfie;
  studentSelfie! : Student

  private recuseReasons: any = {
    fundoEscuro: false,
    oculos: false,
    rostoEscuro: false,
  };

  constructor(private updateSelfieService: UpdateSelfieStateService) {
  }

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
    );
    console.log(this.recuseReasons);
  }

  ngOnInit(): void {
    this.studentSelfie = this.selfieToDisplay.student!

  }

  setReproveReason(reason: string) {
    this.recuseReasons[reason] = !this.recuseReasons[reason];
  }
}
