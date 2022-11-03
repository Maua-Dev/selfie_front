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
  @Input() public studentToDisplay!: Student;
  @Input() public photoToDisplay!: Selfie;

  private recuseReasons: any = {
    fundoEscuro: false,
    oculos: false,
    rostoEscuro: false,
  };

  constructor(private updateSelfieService: UpdateSelfieStateService) {}

  SetSelfieState(newState: string): void {
    let newRecuseReasons = `${this.recuseReasons['fundoEscuro']};${this.recuseReasons['oculos']};${this.recuseReasons['rostoEscuro']}`;
    this.updateSelfieService.UpdateSelfieState(
      this.studentToDisplay.GetRA(),
      this.photoToDisplay.idSelfie.toString(),
      newState,
      newRecuseReasons,
      ''
    );
  }

  ngOnInit(): void {}

  setReproveReason(reason: string) {
    this.recuseReasons[reason] = !this.recuseReasons[reason];
  }
}
