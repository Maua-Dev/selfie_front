import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-photo',
  templateUrl: './display-photo.component.html',
  styleUrls: ['./display-photo.component.css']
})
export class DisplayPhotoComponent implements OnInit {

  ImageURLToDisplay! : string

  constructor() {
   }

  ngOnInit(): void {
  }

}
