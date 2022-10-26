import { FetchStudentMockService } from './services/fetch-student-mock.service';
import { FetchStudent } from './services/fetch-student';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VisualizarFotoAlunoComponent } from './pages/visualizar-foto-aluno/visualizar-foto-aluno.component';
import { StudentCardComponent } from './components/student-card/student-card.component';
import { SituationRectangleComponent } from './components/situation-rectangle/situation-rectangle.component';
import { HttpClientModule } from '@angular/common/http';
import { FetchStudentFromBackendService } from './services/fetch-student-from-backend.service';
import { RejectionCardComponent } from './components/rejection-card/rejection-card.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualizarFotoAlunoComponent,
    StudentCardComponent,
    SituationRectangleComponent,
    RejectionCardComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [{ provide: FetchStudent, useClass: FetchStudentFromBackendService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
