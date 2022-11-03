import { UpdateSelfieStateBackendService } from './services/update-selfie-state-backend.service';
import { FetchStudentMockService } from './services/fetch-student-mock.service';
import { FetchStudent } from './services/fetch-student';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VisualizarFotoAlunoComponent } from './pages/visualizar-foto-aluno/visualizar-foto-aluno.component';
import { StudentCardComponent } from './components/student-card/student-card.component';
import { SituationRectangleComponent } from './components/situation-rectangle/situation-rectangle.component';
import { FetchStudentFromBackendService } from './services/fetch-student-from-backend.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { UpdateSelfieStateService } from './services/update-selfie-state.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { StateDisplayIconsComponent } from './components/state-display-icons/state-display-icons.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualizarFotoAlunoComponent,
    StudentCardComponent,
    SituationRectangleComponent,
    StateDisplayIconsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    AppRoutingModule,
    MatIconModule,
    
  ],
  providers: [
    { provide: FetchStudent, useClass: FetchStudentFromBackendService },
    {
      provide: UpdateSelfieStateService,
      useClass: UpdateSelfieStateBackendService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
