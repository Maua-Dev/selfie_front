import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponentComponent implements OnInit {

  imagePath = '/assets/icon-profile.png'
  constructor() { }

  ngOnInit(): void {
  }

}
