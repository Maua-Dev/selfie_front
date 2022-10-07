import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponentComponent } from './components/profile-component/profile-component.component';
import { BackgroundComponent } from './components/background/background.component';
import { CardSelfieComponent } from './components/card-selfie/card-selfie.component';
import { TituloPaginaComponent } from './components/titulo-pagina/titulo-pagina.component';
import { CardStatusComponent } from './components/card-status/card-status.component';
import { BackgroundGreyComponent } from './components/background-grey/background-grey.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponentComponent,
    BackgroundComponent,
    CardSelfieComponent,
    TituloPaginaComponent,
    CardStatusComponent,
    BackgroundGreyComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
