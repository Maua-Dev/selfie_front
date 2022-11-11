import { Component} from '@angular/core';
import { Card } from 'src/entities/card';
import { CardStatusService } from 'src/app/services/card-status.service';

@Component({
  selector: 'app-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.css']
})
export class CardStatusComponent{

  statusCard!:string
  cards : Card[] = []

  constructor(private cardStatusService : CardStatusService) {} 
  
  ngOnInit(): void {
    this.showingCards()    
  }

  public showingCards(){
      this.cardStatusService.gettingJson().subscribe((response : any) => {
        this.cards = this.cardStatusService.showCards(response)
        this.statusCard = this.cards[this.cards.length-1].getSituacao()
        //this.cardStatusService.sendingStatus(this.statusCard)   //enviando o status para o service
        console.log(this.cards)
        console.log(this.statusCard)
      })
  }
}
