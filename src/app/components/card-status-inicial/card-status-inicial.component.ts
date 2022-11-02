import { Component, OnInit } from '@angular/core';
import { CardStatusService } from 'src/app/services/card-status.service';

@Component({
  selector: 'app-card-status-inicial',
  templateUrl: './card-status-inicial.component.html',
  styleUrls: ['./card-status-inicial.component.css']
})
export class CardStatusInicialComponent implements OnInit {

  title !: string
  date !: string
  situation !: string

  constructor(public cardStatusService : CardStatusService) { }

  ngOnInit(): void {
    this.initialCard()
  }

  public initialCard(){

    this.title = 'Envie sua selfie!'
    this.date = 'Não enviado'
    this.situation = 'Não enviado'
  }

}


