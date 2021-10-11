import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AppModule } from './app.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes:Routes=[
  {
    path:'auth',
    loadChildren: () =>import('./auth/auth.module').then(m => m.AuthModule)
  },
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
