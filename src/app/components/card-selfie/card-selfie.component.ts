import { Component, OnInit } from '@angular/core';
import { CardStatusService } from 'src/app/services/card-status.service';
import { Card } from 'src/entities/card';
import { CardStatusComponent } from '../card-status/card-status.component';
@Component({
  selector: 'app-card-selfie',
  templateUrl: './card-selfie.component.html',
  styleUrls: ['./card-selfie.component.css'],
})
export class CardSelfieComponent implements OnInit {

  cards : Card[]

  constructor(private cardStatusService : CardStatusService) { }

  ngOnInit(): void {
  }

  criarStatus(){
    
  }
}
