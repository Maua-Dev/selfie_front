import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizarFotoAlunoComponent } from './pages/visualizar-foto-aluno/visualizar-foto-aluno.component';
import { CommonModule } from '@angular/common';
import { TelaTirarSelfieComponent } from './components/tela-tirar-selfie/tela-tirar-selfie.component';
import { HomePageComponent } from './components/home-page/home-page.component';


const routes: Routes = [
  { path: '',loadChildren: () => import('./pages/visualizar-foto-aluno/visualizar-foto-aluno.module').then(m => m.VisualizarFotoAlunoModule) },
  {path:'aluno',component: HomePageComponent},
  {path:'selfie',component:TelaTirarSelfieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

