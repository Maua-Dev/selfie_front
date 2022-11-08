import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/entities/card';
import { CardStatusService } from 'src/app/services/card-status.service';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.css']
})
export class CardStatusComponent{

  statusCard!:string
  cards : Card[] = []

  @Output() lastStatus : EventEmitter<string> = new EventEmitter()

  constructor(private cardStatusService : CardStatusService) { } 
  
  ngOnInit(): void {
    this.showingCards()
  }

  public showingCards(){
    this.cardStatusService.gettingJson().subscribe((response : any) => {
      this.cards = this.cardStatusService.showCards(response)
      console.log(this.cards)
      this.statusCard = this.cards[this.cards.length-1].getSituacao()
      console.log(this.statusCard)
      //console.log(this.cards)
      //this.lastStatus.emit()
    })
    
  }

  /*
  public gettingStatus(){
    this.statusCard = this.cardStatusService.gettingStatus()
    console.log(this.statusCard)
    return this.statusCard
  }
  */

}
