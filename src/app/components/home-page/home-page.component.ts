import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  eventoPai !: boolean                      // 4) definindo uma variavel a ser manipulada - pensei nisso
  status!:boolean;
  stream:any = null;
  //public foto: string = ''

  constructor(private router : Router) { }

  ngOnInit(): void {
    //this.router.navigateByUrl('/selfie', {state: this.foto})
  }

  eventoClick(){
    this.eventoPai = true               // 5) atribuindo o valor (transmitido do filho para o pai) para a variavel (4)
  }

}
