import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaTirarSelfieComponent } from 'src/app/components/tela-tirar-selfie/tela-tirar-selfie.component';
import { HomePageComponent } from './home-page.component';

const routes: Routes = [
  { path: '',redirectTo:'/aluno',pathMatch:'full'},
  { path: 'aluno', component:  HomePageComponent},
  { path: 'selfie', component: TelaTirarSelfieComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelaAlunoRoutingModule { }