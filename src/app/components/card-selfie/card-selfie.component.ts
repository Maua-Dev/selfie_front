import { Component, OnInit} from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import {MatDialog} from '@angular/material/dialog';
import { SelfieStudent } from 'src/app/services/selfie-student.service';
import { CardStatusService } from 'src/app/services/card-status.service';
import { Card } from 'src/entities/card';
import { PopupAtivarCameraComponent } from '../popup-ativar-camera/popup-ativar-camera.component';
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
  
  constructor(private dialog : MatDialog, private selfieService: SelfieStudent, private cardStatusService : CardStatusService) { }

  statusCard!:any
  dialogRef !: any
  dialogRef2 !: any

  ngOnInit(): void {
    this.getStatus()
    this.popUpNavigationPerm()
  }
  
  checkPermissions(){
    let permissionName = "camera" as PermissionName
    navigator.permissions.query({ name : permissionName }).then(result => {
      let action = result.state
      if(action === "granted"){
        this.termos()
      }
      if(action === "denied"){
        this.ativarNovamente()
      }
    })
  }
  
  termos(){
    if(this.statusCard === 'APPROVED' || this.statusCard === 'PENDING_REVIEW'){
      alert('Voce ja tirou foto!')
    }
      this.dialogRef = this.dialog.open(PopupComponent) 
      if(this.dialogRef.nextPage === true)
        this.dialogRef.popup
  
  }

  ativarNovamente(){
    this.dialogRef2 = this.dialog.open(PopupAtivarCameraComponent)
  }
  
  popUpNavigationPerm(){
    navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'user'
      },
    }).then((response) => {
      this.stream = response
    }).catch(err => {
      this.stream = err
    })
  }

  
  card : Card[] = []

  public getStatus(){
    this.cardStatusService.gettingJson().subscribe((response : any) => {
      this.card = this.cardStatusService.showCards(response)
      this.statusCard = this.card[this.card.length-1].getSituacao()
      this.foto = this.card[this.card.length-1].getSelfie()
      if(this.foto != ''){
        this.tamanho = 'auto'
        this.marginTop = '2vh'
        this.marginBottom = '1vh'
      }
    })
  }

}
