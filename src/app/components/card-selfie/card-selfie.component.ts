import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Card } from 'src/entities/card';
import { CardStatusComponent } from '../card-status/card-status.component';
@Component({
  selector: 'app-card-selfie',
  templateUrl: './card-selfie.component.html',
  styleUrls: ['./card-selfie.component.css'],
})
export class CardSelfieComponent implements OnInit {

  constructor() { }

  @Output() eventClickSelfie : EventEmitter<Card> = new EventEmitter()  //2) criando um transmissor para a classe pai
  //eventoClickSelfie : boolean = false


  ngOnInit(): void {
  }

  criarStatus(){
    //this.eventoClickSelfie = !this.eventoClickSelfie
    //console.log(this.eventoClickSelfie)
    this.eventClickSelfie.emit()
  }

}
