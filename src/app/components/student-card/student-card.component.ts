import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/entities/student';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements AfterContentInit {

  @Input() public studentToDisplay! : Student
  constructor() { 
  }
  ngAfterContentInit(): void {
    console.log(this.studentToDisplay)
  }

}
