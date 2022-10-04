import { Student } from './../entities/student';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'selfie-maua-front';

  mockStudent : Student

  constructor(){
    this.mockStudent = new Student("Malu", "21.12306-8", "https://fotopaulo.com.br/public/getProductTypeImage/35742")

  }
  
}
