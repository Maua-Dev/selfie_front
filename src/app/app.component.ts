import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'selfie-maua-front';

  eventoPai !: boolean                      // 4) definindo uma variavel a ser manipulada - pensei nisso

  constructor(){
  }

  eventoClick(){
    this.eventoPai = true               // 5) atribuindo o valor (transmitido do filho para o pai) para a variavel (4)
  }
}
