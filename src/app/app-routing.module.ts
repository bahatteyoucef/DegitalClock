import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MontreDegitalComponent } from './montre-degital/montre-degital.component';

const routes: Routes = [
  {path:'' ,redirectTo:'MontreDegital',pathMatch:'full'},
  {path:'MontreDegital' ,component:MontreDegitalComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
