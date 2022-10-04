import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayStudentInformationComponent } from './components/display-student-information/display-student-information.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayStudentInformationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
