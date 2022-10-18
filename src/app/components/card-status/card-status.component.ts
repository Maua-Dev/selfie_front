import { Component, OnInit,Input } from '@angular/core';
import { Card } from 'src/entities/card';
import { CardStatusService } from 'src/app/services/card-status.service';

@Component({
  selector: 'app-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.css']
})
export class CardStatusComponent{

  cards : Card[] = [
    //new Card(1, '21/10/2022', 'Reprovado', 'foto com óculos'),
    //new Card(2,'22/10/2022','Reprovado','pouca qualidade'),
    //new Card(3, '23/10/2022','Reprovado','pouca qualidade'),
    //new Card(4,'25/10/2022','Aprovado','aaa'),
  ]

  @Input() evento !: boolean                       // 7) Colocando a info do pai para o filho em uma variavel

  constructor(private cardStatusService : CardStatusService) { } 
  
  public criandoCard(){
    this.cardStatusService.createCard(this.cards)
  }

  public getCards(){
    return this.cards
  }

}
