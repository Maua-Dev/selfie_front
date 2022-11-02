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
  
  title : string = 'Envie sua selfie!'
  date : string = 'Não enviado'
  situation : string = 'Não enviado'
  
  constructor(private cardStatusService : CardStatusService) { } 
  
  ngOnInit(): void {
    this.creatingCard()
  }

  public creatingCard(){
    this.cardStatusService.creatingCard().subscribe(response => 
      this.cards = this.cardStatusService.createCards(response)
    );
  }

}
