import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponentComponent } from './components/profile-component/profile-component.component';
import { BackgroundComponent } from './components/background/background.component';
import { CardSelfieComponent } from './components/card-selfie/card-selfie.component';
import { TituloPaginaComponent } from './components/titulo-pagina/titulo-pagina.component';
import { CardStatusComponent } from './components/card-status/card-status.component';
import { BackgroundGreyComponent } from './components/background-grey/background-grey.component';
import { PopupComponent } from './components/popup/popup.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TelaTirarSelfieComponent } from './components/tela-tirar-selfie/tela-tirar-selfie.component';
import { HomePageComponent } from './pages/tela-aluno/home-page/home-page.component';
import { CardSelfieTela2Component } from './components/card-selfie-tela2/card-selfie-tela2.component';
import { WebcamModule } from 'ngx-webcam';
import { SelfieStudent } from './services/selfie-student.service';
import { SelfieStudentMockService } from './services/selfie-student-mock.service';
import { CardStatusInicialComponent } from './components/card-status-inicial/card-status-inicial.component';
import { PopupAtivarCameraComponent } from './components/popup-ativar-camera/popup-ativar-camera.component';

@NgModule({
  declarations: [
    AppComponent,

    ProfileComponentComponent,
    BackgroundComponent,
    CardSelfieComponent,
    TituloPaginaComponent,
    CardStatusComponent,
    BackgroundGreyComponent,
    PopupComponent,
    TelaTirarSelfieComponent,
    HomePageComponent,
    CardSelfieTela2Component,
    CardStatusInicialComponent,
    PopupAtivarCameraComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    NoopAnimationsModule,
    MatDialogModule,
    MatCheckboxModule,
    WebcamModule,
  ],
  providers: [{ provide: SelfieStudent, useClass: SelfieStudentMockService }], //injecao de dependencia
  bootstrap: [AppComponent],
})
export class AppModule {}
