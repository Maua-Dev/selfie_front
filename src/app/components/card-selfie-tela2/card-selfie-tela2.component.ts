import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { PopupComponent } from '../popup/popup.component';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-card-selfie-tela2',
  templateUrl: './card-selfie-tela2.component.html',
  styleUrls: ['./card-selfie-tela2.component.css']
})

export class CardSelfieTela2Component implements OnInit {
  
  dialogRef !: any;
  webcam : boolean = true;
  foto : boolean = false;
  h !: number
  w !: number
  status!:boolean;
  stream:any = null;
  trigger: Subject<void> = new Subject();
  previewImage:string = '';

  constructor(private dialog : MatDialog,private router:Router, private route :ActivatedRoute) {
    //console.log(this.router.getCurrentNavigation()?.extras.state)
  }

  ngOnInit(): void {
    //this.checkPermissions();
    //if(this.previewImage != '')
    //  this.previewImage = history.state
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
    this.webcam = !this.webcam
    this.foto = !this.foto
    if(this.previewImage != ''){
      //this.webcam = !this.webcam
      //this.foto = !this.foto
      this.h = 400
      this.w = 300
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
 
  confirmarFoto(){
    alert('Foto feita!')
    //this.route.queryParams.subscribe(() => this.previewImage)
  }

}
