import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizarFotoAlunoComponent } from './pages/visualizar-foto-aluno/visualizar-foto-aluno.component';

const routes: Routes = [
  { path: '',loadChildren: () => import('./pages/visualizar-foto-aluno/visualizar-foto-aluno.module').then(m => m.VisualizarFotoAlunoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }