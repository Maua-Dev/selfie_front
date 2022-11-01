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
    //new Card(1, '21/10/2022', 'Pendente', 'foto com óculos'),
    //new Card(2,'22/10/2022','Reprovado','pouca qualidade'),
    //new Card(3, '23/10/2022','Reprovado','pouca qualidade'),
    //new Card(4,'25/10/2022','Aprovado','aaa'),
  ]

  foto !: string
  showCard !: boolean

  constructor(private cardStatusService : CardStatusService) { } 
  
  ngOnInit(): void {
    this.criandoCard()
    console.log(this.cards)
  }

  public criandoCard(){
    this.cardStatusService.createCard(this.cards)
  }

  public getCards(){
    return this.cards
  }

}
