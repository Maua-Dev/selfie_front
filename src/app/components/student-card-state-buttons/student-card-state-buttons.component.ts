import { Selfie } from './../../../entities/selfie';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-card-state-buttons',
  templateUrl: './student-card-state-buttons.component.html',
  styleUrls: ['./student-card-state-buttons.component.css']
})
export class StudentCardStateButtonsComponent implements OnInit {

  @Input() selfieToDisplay!: Selfie
  currentState!:string

  constructor() { }

  ngOnInit(): void {
    this.currentState = this.selfieToDisplay.state
  }

}
