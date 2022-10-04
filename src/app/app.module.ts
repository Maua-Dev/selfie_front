import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayStudentInformationComponent } from './components/display-student-information/display-student-information.component';
import { DisplayPhotoComponent } from './components/display-photo/display-photo.component';
import { VisualizarFotoAlunoComponent } from './pages/visualizar-foto-aluno/visualizar-foto-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayStudentInformationComponent,
    DisplayPhotoComponent,
    VisualizarFotoAlunoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
