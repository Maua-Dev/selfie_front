import { Component, OnInit,Input } from '@angular/core';
import { Card } from 'src/entities/card';
import { CardStatusService } from 'src/app/services/card-status.service';

@Component({
  selector: 'app-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.css']
})
export class CardStatusComponent{

  teste !: any
  cards : Card[] = []
  
  constructor(private cardStatusService : CardStatusService) { } 
  
  ngOnInit(): void {
    this.creatingCard()
  }

  public creatingCard(){
    this.cardStatusService.gettingJson().subscribe(response =>{
      console.log(this.cards)
      this.cards = this.cardStatusService.createCards(response)
      console.log(this.cards)
    });
  }

  public createCard(){
    this.cardStatusService.gettingJson()
  }

}
