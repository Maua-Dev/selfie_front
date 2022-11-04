import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Card } from 'src/entities/card';
import { PopupComponent } from '../popup/popup.component';
import {MatDialog} from '@angular/material/dialog';
import { SelfieStudent } from 'src/app/services/selfie-student.service';
import { CardStatusService } from 'src/app/services/card-status.service';
@Component({
  selector: 'app-card-selfie',
  templateUrl: './card-selfie.component.html',
  styleUrls: ['./card-selfie.component.css'],
})
export class CardSelfieComponent implements OnInit {

  name!:PermissionName
  foto : string = ''
  status!:string;
  stream:any = null;
  tamanho:string = '32.6vh'
  marginTop:string = '4vh'
  marginBottom!:string

  constructor(private dialog : MatDialog, private selfieService: SelfieStudent, private cardStatusSelfie : CardStatusService) { }

  @Output() eventClickSelfie : EventEmitter<Card> = new EventEmitter()  //1) criando um transmissor para a classe pai
  dialogRef !: any

  ngOnInit(): void {
    this.getSelfie()
    this.acionaCamera()
    this.checkingStatus()
  }

  async getSelfie(){
    this.foto = this.selfieService.getSelfie()
    if(this.foto != ''){
      this.tamanho = 'auto'
      this.marginTop = '2vh'
      this.marginBottom = '1vh'
      this.eventClickSelfie.emit()          //2) transmitindo definitivo
    }
  }
  
  termos(){
    this.dialogRef = this.dialog.open(PopupComponent)   //invocando ele
    if(this.dialogRef.nextPage === true)
      this.dialogRef.popup
  }

  acionaCamera(){
    navigator.mediaDevices.getUserMedia({
      video:{
        facingMode: 'user'
      },
    }).then(response =>{
      this.stream = response
    }).catch(err =>{
      this.stream = err
    })
  }

  checkPermissions(){
    let permissionName = "camera" as PermissionName
    navigator.permissions.query({ name : permissionName }).then(result => {
      console.log(result.state)
      let action = result.state
      if(action === "granted"){
        action = 'prompt'
        this.termos()
      }
      if(action === "denied"){
        alert('necessario acionar novamente')
        this.acionaCamera()
      }
    })
  }

  public checkingStatus(){
    this.status = this.cardStatusSelfie.gettingStatus()
    console.log(this.status)
  }
}
