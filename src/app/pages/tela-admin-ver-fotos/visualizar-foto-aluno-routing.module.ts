import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizarFotoAlunoComponent } from './visualizar-foto-aluno.component';

const routes: Routes = [
  {path:'',redirectTo:'/maua',pathMatch:'full'},
  { path: 'maua', component:  VisualizarFotoAlunoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualizarFotoAlunoRoutingModule { }
