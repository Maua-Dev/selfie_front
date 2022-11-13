import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/entities/student';

@Component({
  selector: 'app-situation-rectangle',
  templateUrl: './situation-rectangle.component.html',
  styleUrls: ['./situation-rectangle.component.css']
})
export class SituationRectangleComponent implements OnInit {

  @Input() public studentToDisplay! : Student

  constructor() { }

  ngOnInit(): void {
    // this.studentToDisplay.uploadedSelfiesList!.forEach(selfie => {
    //   if(selfie.state == "APPROVED"){
    //     this.studentState = "APPROVED"
    //     return
    //   }
    //   if(selfie.state == "DECLINED"){
    //     this.studentState = "DECLINED"
    //     return
    //   }
    //   if(this.studentToDisplay.uploadedSelfiesList.length <= 0){
    //     this.studentState = "PENDING_REVIEW"
    //     return
    //   }
    
    //   this.studentState = 'IN_REVIEW'
    // });
  }

}
