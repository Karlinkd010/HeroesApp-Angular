import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes:Routes=[
  {
    path:'404',
    component:ErrorPageComponent
  },
  {
    path:'**',
    redirectTo:'404'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
