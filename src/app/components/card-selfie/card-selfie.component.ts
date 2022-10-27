import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Card } from 'src/entities/card';
import { PopupComponent } from '../popup/popup.component';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-card-selfie',
  templateUrl: './card-selfie.component.html',
  styleUrls: ['./card-selfie.component.css'],
})
export class CardSelfieComponent implements OnInit {

  foto : string = ''

  constructor(private dialog : MatDialog,private router :ActivatedRoute) { }

  @Output() eventClickSelfie : EventEmitter<Card> = new EventEmitter()  //2) criando um transmissor para a classe pai
  //eventoClickSelfie : boolean = false
  dialogRef !: any

  ngOnInit(): void {
  }

  criarStatus(){
    this.dialogRef = this.dialog.open(PopupComponent)   //invocando ele
    console.log(this.dialogRef.nextPage)
    if(this.dialogRef.nextPage === true)
      this.dialogRef.popup
  }

}
