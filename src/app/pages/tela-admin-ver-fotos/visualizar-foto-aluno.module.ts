import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualizarFotoAlunoRoutingModule } from './visualizar-foto-aluno-routing.module';
import { VisualizarFotoAlunoComponent } from './visualizar-foto-aluno.component';
import { StudentCardComponent } from 'src/app/components/student-card/student-card.component';
import { SituationRectangleComponent } from 'src/app/components/situation-rectangle/situation-rectangle.component';
import { StateDisplayIconsComponent } from 'src/app/components/state-display-icons/state-display-icons.component';
import { FilterListsButtonsComponent } from 'src/app/components/filter-lists-buttons/filter-lists-buttons.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FetchStudent } from 'src/app/services/fetch-student';
import { FetchStudentFromBackendService } from 'src/app/services/fetch-student-from-backend.service';
import { UpdateSelfieStateService } from 'src/app/services/update-selfie-state.service';
import { UpdateSelfieStateBackendService } from 'src/app/services/update-selfie-state-backend.service';
import { FetchSelfieService } from 'src/app/services/fetch-selfie.service';
import { FetchSelfieBackendService } from 'src/app/services/fetch-selfie-backend.service';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    VisualizarFotoAlunoComponent,
    StudentCardComponent,
    SituationRectangleComponent,
    StateDisplayIconsComponent,
    FilterListsButtonsComponent
  ],
  imports: [
    CommonModule,
    VisualizarFotoAlunoRoutingModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    TextFieldModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    { provide: FetchStudent, useClass: FetchStudentFromBackendService },
    {
      provide: UpdateSelfieStateService,
      useClass: UpdateSelfieStateBackendService,
    },
    {provide:FetchSelfieService, useClass:FetchSelfieBackendService}
  ],
})
export class VisualizarFotoAlunoModule { }