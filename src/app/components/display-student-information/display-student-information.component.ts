import { Student } from './../../../entities/student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-student-information',
  templateUrl: './display-student-information.component.html',
  styleUrls: ['./display-student-information.component.css']
})
export class DisplayStudentInformationComponent implements OnInit {

  public studentToDisplay! : Student
  
  constructor() { 
    this.studentToDisplay = new Student("Malu", "21.12306-8", "abc/21")

  }

  ngOnInit(): void {
  }
}
