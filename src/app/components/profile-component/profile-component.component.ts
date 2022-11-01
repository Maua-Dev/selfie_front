import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SelfieStudent } from 'src/app/services/selfie-student.service';
import { Student } from 'src/entities/student';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponentComponent implements OnInit {

  name : any = ''
  imagePath : string = '/assets/icon-profile.png'

  constructor(public selfieStudent : SelfieStudent) { }

  ngOnInit(): void {
    this.getNome()
  }

  getNome(){
    this.name = this.selfieStudent.getName()
    return this.name
  }

}
