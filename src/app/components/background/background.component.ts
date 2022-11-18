import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  sizeMain : number = 39.1;
  sizeSelfie : number = 80;

  constructor(protected router : Router) { }

  ngOnInit(): void {
  }

}
