import { Injectable } from '@angular/core';
import { Card } from 'src/entities/card';

@Injectable({
  providedIn: 'root'
})
export class CardStatusService {

  id : number = 1

  constructor() { }

  public createStatus(){
    if(this.id <= 3)
      return new Card(this.id++,'17/10/2022','Reprovado','foto com óculos')
    else
      return new Card(this.id++,'17/10/2022','Aprovado','')
  }

  public createCard(arrayCards : Card[]){
    console.log(arrayCards)
    arrayCards.push(this.createStatus())
  }

  public showCard(arrayCards : Card[]){
    arrayCards
  }
}
