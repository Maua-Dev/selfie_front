import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { lastValueFrom, Observable, Subject } from 'rxjs';
import { PopupComponent } from '../popup/popup.component';
import { SelfieStudent } from 'src/app/services/selfie-student.service';
import { CardStatusService } from 'src/app/services/card-status.service';
import { UploadSelfieService } from 'src/app/services/upload-selfie.service';

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

  constructor(public uploadSelfie : UploadSelfieService,private dialog: MatDialog, private selfieService: SelfieStudent, private statusCardService : CardStatusService) {
  }

  ngOnInit(): void {
  }

  get $trigger(): Observable<void> {
    return this.trigger.asObservable();
  }

  snapshot(event: WebcamImage) {
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

  popUp() {
    this.dialogRef = this.dialog.open(PopupComponent)   //invocando ele
    console.log(this.dialogRef.nextPage)
    if (this.dialogRef.nextPage === true)
      this.dialogRef.popup
  }

  async sendingPhoto() {
    var res = await lastValueFrom(this.selfieService.uploadSelfie(this.previewImage));
    return res
  }

  async confirmarFoto() {
    alert('Foto feita!')
    let selfieBase64 = await this.sendingPhoto()
    this.uploadSelfie.testSendImageService(selfieBase64)
  }

}

