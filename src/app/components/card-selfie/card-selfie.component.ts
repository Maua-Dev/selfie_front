import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Card } from 'src/entities/card';
import { CardStatusComponent } from '../card-status/card-status.component';
import { PopupComponent } from '../popup/popup.component';
import {MatDialogModule,MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-card-selfie',
  templateUrl: './card-selfie.component.html',
  styleUrls: ['./card-selfie.component.css'],
})
export class CardSelfieComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  @Output() eventClickSelfie : EventEmitter<Card> = new EventEmitter()  //2) criando um transmissor para a classe pai
  //eventoClickSelfie : boolean = false


  ngOnInit(): void {
  }

  criarStatus(){
    let dialogRef = this.dialog.open(PopupComponent,{
      height: '400px',
      width: '600px',
    })
    this.eventClickSelfie.emit()
  }

}
