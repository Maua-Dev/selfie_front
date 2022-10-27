import { FetchStudentMockService } from './services/fetch-student-mock.service';
import { FetchStudent } from './services/fetch-student';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VisualizarFotoAlunoComponent } from './pages/visualizar-foto-aluno/visualizar-foto-aluno.component';
import { StudentCardComponent } from './components/student-card/student-card.component';
import { SituationRectangleComponent } from './components/situation-rectangle/situation-rectangle.component';
import { FetchStudentFromBackendService } from './services/fetch-student-from-backend.service';
import { RejectionCardComponent } from './components/rejection-card/rejection-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VisualizarFotoAlunoComponent,
    StudentCardComponent,
    SituationRectangleComponent,
    RejectionCardComponent,
  ],
  imports: [BrowserModule, NgbModule, HttpClientModule],
  providers: [{ provide: FetchStudent, useClass: FetchStudentFromBackendService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
