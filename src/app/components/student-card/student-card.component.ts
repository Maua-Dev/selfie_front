import { Selfie } from 'src/entities/selfie';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/entities/student-admin-domain';
import { AutomaticReview } from 'src/entities/automatic-review';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css'],
})
export class StudentCardComponent implements OnInit {
  @Input() public selfieToDisplay!: Selfie;
  @Output() OnSetSelfieStateEvent: EventEmitter<any> = new EventEmitter();

  studentEntity!: Student;
  rejectionDescription: string = ''

  ngOnInit(): void {
    this.studentEntity = this.selfieToDisplay.student!;
  }

  SetRejectionDescription(newRejectionDescription:string){
    this.rejectionDescription = newRejectionDescription
  }

  GetStudentFirstName(): string {
    let nameArray = this.studentEntity.name.split(' ');

    if (nameArray.length > 1) {
      const secondNameLowerCase = nameArray[1].toLocaleLowerCase();
      const secondNamesMask = ['a', 'de', 'o', 'e', 'em', 'dos', 'do', 'da', 'das'];

      if (secondNamesMask.includes(secondNameLowerCase))
        return `${nameArray[0]} ${nameArray[1]} ${nameArray[2]}`;

      return `${nameArray[0]} ${nameArray[1]}`;
    }
    return this.studentEntity.name;
  }

  GetStudentRa(): string{
    let raArray = this.studentEntity.ra
    if(raArray.length != 8)
      return ''
    return `${raArray.slice(0,2)}.${raArray.slice(2,7)}-${raArray.slice(7,8)}`
  }

  GetSquareCoords() {
    for (let i = 0; i < this.selfieToDisplay.automaticReview?.labels.length!; i++) {
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

  IsReasonTrue(reasonToCheck: string, reasonToCompare: string): boolean{
    return reasonToCheck == reasonToCompare
  }

}


// rejectionDescription!: string;

// recuseReasons: any = {
//   NOT_ALLOWED_BACKGROUND: false,
//   COVERED_FACE: false,
//   NO_PERSON_RECOGNIZED: false,
//   OTHER_REASONS: false
// };

// constructor(private updateSelfieService: UpdateSelfieStateService) {}



// SetSelfieState(newState: string): void {
//   let newRecuseReasons: string[] = [];

//   for (let reason in this.recuseReasons) {
//     if (this.recuseReasons[reason]) {
//       newRecuseReasons.push(reason);
//     }
//   }
//   console.log(this.recuseReasons);
//   this.updateSelfieService
//     .UpdateSelfieState(
//       this.selfieToDisplay.student!.ra,
//       this.selfieToDisplay.idSelfie.toString(),
//       newState,
//       newRecuseReasons,
//       this.rejectionDescription
//     )
//     .subscribe((resp) => {
//       console.log(newRecuseReasons);
//       console.log(this.rejectionDescription);

//       console.log(resp);
//       this.OnSetSelfieStateEvent.emit();
//     });
// }

// setReproveReason(reason: string) {
//   this.recuseReasons[reason] = !this.recuseReasons[reason];
// }
