import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router'
import { TelaTirarSelfieComponent } from './components/tela-tirar-selfie/tela-tirar-selfie.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes : Routes = [
  {path:'',component: HomePageComponent},
  {path:'selfie',component:TelaTirarSelfieComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
  export class AppRoutingModule { }
