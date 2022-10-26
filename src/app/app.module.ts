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
import { CardSelfieTela3Component } from './components/card-selfie-tela3/card-selfie-tela3.component';
import { TelaChecarSelfieComponent } from './components/tela-checar-selfie/tela-checar-selfie.component';


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
    CardSelfieTela3Component,
    TelaChecarSelfieComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatCheckboxModule,
    AppRoutingModule,
    WebcamModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
