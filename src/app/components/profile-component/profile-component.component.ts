import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponentComponent implements OnInit {

  @Input() nameProfile !: any
  imagePath : string = '/assets/icon-profile.png'

  constructor() { }

  ngOnInit(): void {
  }

}
