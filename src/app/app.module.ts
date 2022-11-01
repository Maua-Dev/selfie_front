import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponentComponent } from './components/profile-component/profile-component.component';
import { BackgroundComponent } from './components/background/background.component';
import { CardSelfieComponent } from './components/card-selfie/card-selfie.component';
import { TituloPaginaComponent } from './components/titulo-pagina/titulo-pagina.component';
import { CardStatusComponent } from './components/card-status/card-status.component';
import { BackgroundGreyComponent } from './components/background-grey/background-grey.component';
import { PopupComponent } from './components/popup/popup.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TelaTirarSelfieComponent } from './components/tela-tirar-selfie/tela-tirar-selfie.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CardSelfieTela2Component } from './components/card-selfie-tela2/card-selfie-tela2.component';
import { WebcamModule } from 'ngx-webcam';
import { HttpClientModule } from '@angular/common/http'
import { SelfieStudent } from './services/selfie-student.service';
import { SelfieStudentMockService } from './services/selfie-student-mock.service';
import { CardStatusInicialComponent } from './components/card-status-inicial/card-status-inicial.component';

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
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatCheckboxModule,
    AppRoutingModule,
    WebcamModule,
    HttpClientModule
  ],
  providers: [{ provide: SelfieStudent, useClass: SelfieStudentMockService }], //injecao de dependencia
  bootstrap: [AppComponent]
})
export class AppModule { }
