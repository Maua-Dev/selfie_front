import { Injectable } from '@angular/core';
import { Card } from 'src/entities/card';

@Injectable({
  providedIn: 'root'
})
export class CardStatusService {

  id : number = 1

  constructor() { }

  public createStatus(){
    return new Card(this.id++,'31/10/2022','Pendente','')     //mockado
  }

  public createCard(arrayCards : Card[]){
    console.log(arrayCards)
    arrayCards.push(this.createStatus())
  }

  public showCard(arrayCards : Card[]){
    arrayCards
  }
}
