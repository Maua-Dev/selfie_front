import { Injectable } from '@angular/core';
import { Card } from 'src/entities/card';

@Injectable({
  providedIn: 'root'
})
export class CardStatusService {

  id : number = 1

  constructor() { }

  createStatus(){
    return new Card(this.id++,'17/10/2022','Reprovado','foto com óculos')
  }

  createCard(arrayCards : Card[]){
    return arrayCards.push(this.createStatus())
  }
}
