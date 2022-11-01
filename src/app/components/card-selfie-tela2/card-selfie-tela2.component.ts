import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { lastValueFrom, Observable, Subject } from 'rxjs';
import { PopupComponent } from '../popup/popup.component';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SelfieStudent } from 'src/app/services/selfie-student.service';

@Component({
  selector: 'app-card-selfie-tela2',
  templateUrl: './card-selfie-tela2.component.html',
  styleUrls: ['./card-selfie-tela2.component.css']
})

export class CardSelfieTela2Component implements OnInit {

  fotoId!: number;
  dialogRef !: any;
  webcam: boolean = true;
  foto: boolean = false;
  h !: number;
  w !: number;
  status!: boolean;
  stream: any = null;
  trigger: Subject<void> = new Subject();
  previewImage: string = '';

  constructor(private dialog: MatDialog, private selfieService: SelfieStudent) {
  }

  ngOnInit(): void {
  }

  get $trigger(): Observable<void> {
    return this.trigger.asObservable();
  }

  snapshot(event: WebcamImage) {
    console.log(event)
    this.previewImage = event.imageAsDataUrl;
  }

  tirarFoto() {
    this.trigger.next();
    this.webcam = !this.webcam
    this.foto = !this.foto
    if (this.previewImage != '') {
      this.h = 400
      this.w = 300
    }
  }

  checkPermissions(): void {
    navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'user'
      },
    }).then((response) => {
      console.log('response: ', response)
      this.stream = response
      this.status = true
    }).catch(err => {
      this.stream = err
      this.status = false
    })
  }

  popUp() {
    this.dialogRef = this.dialog.open(PopupComponent)   //invocando ele
    console.log(this.dialogRef.nextPage)
    if (this.dialogRef.nextPage === true)
      this.dialogRef.popup
  }

  public handleInitError(error: WebcamInitError): void {
    if (error.mediaStreamError && error.mediaStreamError.name === "NotAllowedError") {
      console.warn("Camera access was not allowed by user!");
    }
  }

  async sendingPhoto() {
    var res = await lastValueFrom(this.selfieService.uploadSelfie(this.previewImage));
  }

  async confirmarFoto() {
    alert('Foto feita!')
    await this.sendingPhoto()
  }

}

