import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackgroundGreyComponent } from 'src/app/components/background-grey/background-grey.component';
import { BackgroundComponent } from 'src/app/components/background/background.component';
import { CardSelfieTela2Component } from 'src/app/components/card-selfie-tela2/card-selfie-tela2.component';
import { CardSelfieComponent } from 'src/app/components/card-selfie/card-selfie.component';
import { CardStatusInicialComponent } from 'src/app/components/card-status-inicial/card-status-inicial.component';
import { CardStatusComponent } from 'src/app/components/card-status/card-status.component';
import { PopupAtivarCameraComponent } from 'src/app/components/popup-ativar-camera/popup-ativar-camera.component';
import { PopupComponent } from 'src/app/components/popup/popup.component';
import { PopupComponent2 } from 'src/app/components/popup2/popup2.component';
import { ProfileComponentComponent } from 'src/app/components/profile-component/profile-component.component';
import { TelaTirarSelfieComponent } from 'src/app/components/tela-tirar-selfie/tela-tirar-selfie.component';
import { TituloPaginaComponent } from 'src/app/components/titulo-pagina/titulo-pagina.component';
import { HomePageComponent } from './home-page.component';
import { TelaAlunoRoutingModule } from './tela-aluno-routing.module';
import { SelfieStudentMockService } from 'src/app/services/selfie-student-mock.service';
import { SelfieStudent } from 'src/app/services/selfie-student.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { WebcamModule } from 'ngx-webcam';
import { UploadSelfieService } from 'src/app/services/upload-selfie.service';



@NgModule({
  declarations: [
    ProfileComponentComponent,
    BackgroundComponent,
    CardSelfieComponent,
    TituloPaginaComponent,
    CardStatusComponent,
    BackgroundGreyComponent,
    PopupComponent,
    PopupComponent2,
    TelaTirarSelfieComponent,
    HomePageComponent,
    CardSelfieTela2Component,
    CardStatusInicialComponent,
    PopupAtivarCameraComponent,
  ],
  imports: [
    CommonModule,
    TelaAlunoRoutingModule,

    
    MatDialogModule,
    MatCheckboxModule,
    WebcamModule,
  ],
  providers:[{ provide: SelfieStudent, useClass: SelfieStudentMockService }, {provide:UploadSelfieService, useClass:UploadSelfieService }]
})
export class TelaAlunoModule { }
