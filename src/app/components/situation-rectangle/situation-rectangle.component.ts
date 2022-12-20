import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/entities/student-admin-domain';

@Component({
  selector: 'app-situation-rectangle',
  templateUrl: './situation-rectangle.component.html',
  styleUrls: ['./situation-rectangle.component.css'],
})
export class SituationRectangleComponent implements OnInit {
  @Input() public studentToDisplay!: Student;

  constructor() {}

  ngOnInit(): void {

  }
}
