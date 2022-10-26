import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-card-selfie-tela2',
  templateUrl: './card-selfie-tela2.component.html',
  styleUrls: ['./card-selfie-tela2.component.css']
})

export class CardSelfieTela2Component implements OnInit {
  
  dialogRef !: any;
  status!:boolean;
  stream:any = null;
  trigger: Subject<void> = new Subject();
  previewImage:string = '';

  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
    this.checkPermissions()
  }

  get $trigger() : Observable<void>{
    return this.trigger.asObservable();
  }

  snapshot(event:WebcamImage){
    console.log(event)
    this.previewImage = event.imageAsDataUrl;
  }

  tirarFoto(){
    this.trigger.next();
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

  popUp(){
    this.dialogRef = this.dialog.open(PopupComponent)   //invocando ele
    console.log(this.dialogRef.nextPage)
    if(this.dialogRef.nextPage === true)
      this.dialogRef.popup
  }

  public handleInitError(error: WebcamInitError): void {
    if (error.mediaStreamError && error.mediaStreamError.name === "NotAllowedError") {
      console.warn("Camera access was not allowed by user!");
    }
  }
 
}
