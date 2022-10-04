import { Student } from './../../../entities/student';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-student-information',
  templateUrl: './display-student-information.component.html',
  styleUrls: ['./display-student-information.component.css']
})
export class DisplayStudentInformationComponent implements OnInit {

  @Input() public studentToDisplay! : Student
  
  constructor() { 
  }

  ngOnInit(): void {
  }
}
