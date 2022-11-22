import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'a',
    loadChildren: () =>
      import('./pages/tela-admin-ver-fotos/visualizar-foto-aluno.module').then(
        (m) => m.VisualizarFotoAlunoModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/tela-aluno/tela-aluno.module').then(
        (m) => m.TelaAlunoModule
      ),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
