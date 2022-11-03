import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/entities/student';

@Component({
  selector: 'app-situation-rectangle',
  templateUrl: './situation-rectangle.component.html',
  styleUrls: ['./situation-rectangle.component.css']
})
export class SituationRectangleComponent implements OnInit {

  @Input() public studentToDisplay! : Student
  studentState!:string

  constructor() { }

  ngOnInit(): void {
    this.studentToDisplay.GetUploadedSelfiesList().forEach(selfie => {
      if(selfie.state == "APPROVED"){
        this.studentState = "APPROVED"
        return
      }
      else if(selfie.state == "DECLINED"){
        this.studentState = "DECLINED"
        return
      }
      else if(selfie.state == "PENDING_REVIEW"){
        this.studentState = "PENDING_REVIEW"
        return
      }
    
      this.studentState = 'IN_REVIEW'
    });
  }

}
