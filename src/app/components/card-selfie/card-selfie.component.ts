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
  status!:boolean;
  stream:any = null;

  constructor(private dialog : MatDialog,private router :ActivatedRoute) { }

  @Output() eventClickSelfie : EventEmitter<Card> = new EventEmitter()  //2) criando um transmissor para a classe pai
  //eventoClickSelfie : boolean = false
  dialogRef !: any

  ngOnInit(): void {
    this.checkPermissions()
  }

  criarStatus(){
    if(this.status == true){
      this.dialogRef = this.dialog.open(PopupComponent)   //invocando ele
      console.log(this.dialogRef.nextPage)
      if(this.dialogRef.nextPage === true)
        this.dialogRef.popup
    }
    else{
      alert('Necessario ativar a camera para prosseguir')
      this.checkPermissions()
    }
  }

  checkPermissions() : void{
    navigator.mediaDevices.getUserMedia({
      video:{
        facingMode: 'user'
      },
    }).then((response)=>{
      console.log('response: ', response)
      this.stream = response
      this.status = true
    }).catch(err =>{
      this.stream = err
      this.status = false
    })
  }

}
