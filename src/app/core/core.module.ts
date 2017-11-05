import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ObservablesComponent } from './observables/observables.component';

const routes: Routes = [
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent, HomeComponent, ObservablesComponent]
})
export class CoreModule { }
