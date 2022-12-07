import { AutomaticReview } from './../../../entities/automatic-review';
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
  studentEntity!: Student;

  @Output() OnSetSelfieStateEvent: EventEmitter<any> = new EventEmitter();
  rejectionDescription!: string;

  recuseReasons: any = {
    NOT_ALLOWED_BACKGROUND: false,
    COVERED_FACE: false,
    NO_PERSON_RECOGNIZED: false,
    OTHER_REASONS: false
  };

  constructor(private updateSelfieService: UpdateSelfieStateService) {}

  GetSquareCoords() {
    for (
      let i = 0;
      i < this.selfieToDisplay.automaticReview?.labels.length!;
      i++
    ) {
      let label = this.selfieToDisplay.automaticReview?.labels[i];

      let isAbleToDrawSquare: boolean =
        (AutomaticReview.RejectedLabelslist.includes(label['name']) ||
          label['parents'].some((parent: any) =>
            AutomaticReview.RejectedLabelslist.includes(parent)
          )) &&
        Object.keys(label['coords']).length > 0;

      if (isAbleToDrawSquare) {
        let coordsObj = label['coords'];
        return {
          height: `${coordsObj['Height'] * 100}%`,
          width: `${coordsObj['Width'] * 100}%`,
          top: `${coordsObj['Top'] * 100}%`,
          left: `${coordsObj['Left'] * 100}%`,
        };
      }
    }
    return null;
  }

  SetSelfieState(newState: string): void {
    let newRecuseReasons: string[] = [];

    for (let reason in this.recuseReasons) {
      if (this.recuseReasons[reason]) {
        newRecuseReasons.push(reason);
      }
    }
    console.log(this.recuseReasons);
    this.updateSelfieService
      .UpdateSelfieState(
        this.selfieToDisplay.student!.ra,
        this.selfieToDisplay.idSelfie.toString(),
        newState,
        newRecuseReasons,
        this.rejectionDescription
      )
      .subscribe((resp) => {
        console.log(newRecuseReasons);
        console.log(this.rejectionDescription);

        console.log(resp);
        this.OnSetSelfieStateEvent.emit();
      });
  }

  ngOnInit(): void {
    this.studentEntity = this.selfieToDisplay.student!;
    // console.log(this.GetSquareCoords());
  }

  setReproveReason(reason: string) {
    this.recuseReasons[reason] = !this.recuseReasons[reason];
  }
}
