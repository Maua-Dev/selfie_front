import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { lastValueFrom, Observable, Subject } from 'rxjs';
import { PopupComponent2 } from '../popup2/popup2.component';
import { SelfieStudent } from 'src/app/services/selfie-student.service';
import { CardStatusService } from 'src/app/services/card-status.service';
import { UploadSelfieService } from 'src/app/services/upload-selfie.service';
import { CameraPermissions } from 'src/app/services/camera-permissions.service';

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
  previewImageUpload: string = '';

  constructor(public uploadSelfie : UploadSelfieService ,private dialog: MatDialog, private selfieService: SelfieStudent, private cameraPermission : CameraPermissions) {
  }

  ngOnInit(): void {
    this.cameraPermission.getStream()
  }

  get $trigger(): Observable<void> {
    return this.trigger.asObservable();
  }

  snapshot(event: WebcamImage) {
    this.previewImage = event.imageAsDataUrl;
    this.snapshotCutting(this.previewImage);
  }

  snapshotCutting(base64Image:string){
    this.selfieService.cuttingPhoto(base64Image).then((compressed:any)=>{
      this.previewImageUpload = compressed;
    })
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
    this.dialogRef = this.dialog.open(PopupComponent2)
    if (this.dialogRef.nextPage === true)
      this.dialogRef.popup
  }

  sendingPhoto() {
    var res = lastValueFrom(this.selfieService.uploadSelfie(this.previewImageUpload));
    return res
  }

  async confirmarFoto() {
    alert('Foto feita!')
    let selfieBase64 = await this.sendingPhoto()
    this.uploadSelfie.testSendImageService(selfieBase64)
    this.stream = this.cameraPermission.getStream()
    this.cameraPermission.turnOffCamera(this.stream)
  }

}

