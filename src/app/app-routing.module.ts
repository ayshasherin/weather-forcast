import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeathComponent } from './weath/weath.component';


const routes: Routes = [
  {path: '',component: WeathComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
