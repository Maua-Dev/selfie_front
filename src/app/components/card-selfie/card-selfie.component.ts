import { Component, OnInit,Input} from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import {MatDialog} from '@angular/material/dialog';
import { SelfieStudent } from 'src/app/services/selfie-student.service';
import { CardStatusService } from 'src/app/services/card-status.service';
import { Card } from 'src/entities/card';
import { PopupAtivarCameraComponent } from '../popup-ativar-camera/popup-ativar-camera.component';
import { CameraPermissions } from 'src/app/services/camera-permissions.service';
import { TitleStrategy } from '@angular/router';
@Component({
  selector: 'app-card-selfie',
  templateUrl: './card-selfie.component.html',
  styleUrls: ['./card-selfie.component.css'],
})
export class CardSelfieComponent implements OnInit {

  name!:PermissionName
  //foto : string = ''
  status!:string;
  stream:any = null;
  tamanho:string = '32.6vh'
  marginTop:string = '4vh'
  marginBottom!:string
  
  @Input() card!:any
  @Input() statusCard!:any
  @Input() foto!:any

  constructor(private dialog : MatDialog, private cameraPermissions : CameraPermissions, private cardStatusService : CardStatusService) { }


  dialogRef !: any
  dialogRef2 !: any

  ngOnInit(): void {
    this.getStatus()
  }

  checkPermissions(){
    let permissionName = "camera" as PermissionName
    navigator.permissions.query({ name : permissionName }).then(result => {
      let action = result.state
      if(action === "granted"){
        this.turnOnCamera()
      }
      if(action === "denied"){
        this.ativarNovamente()
      }
    })
  }
  
  turnOnCamera(){
    this.cameraPermissions.turnOnCamera()
    this.dialogRef = this.dialog.open(PopupComponent) 
    if(this.dialogRef.nextPage === true){
      this.dialogRef.popup
    }
  
  }

  ativarNovamente(){
    this.dialogRef2 = this.dialog.open(PopupAtivarCameraComponent)
  }
  

  public getStatus(){
      if(this.foto != ''){
        this.tamanho = 'auto'
        this.marginTop = '2vh'
        this.marginBottom = '1vh'
      }
  }

}
