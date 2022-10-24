import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  eventoPai !: boolean                      // 4) definindo uma variavel a ser manipulada - pensei nisso

  constructor() { }

  ngOnInit(): void {
  }

  eventoClick(){
    this.eventoPai = true               // 5) atribuindo o valor (transmitido do filho para o pai) para a variavel (4)
  }

}
