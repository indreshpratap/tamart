import { NgModule } from '@angular/core';


import { HomeComponent } from './home/home.component';
import { SharedModule } from 'app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ObservablesComponent } from './observables/observables.component';


import { LoginComponent } from 'app/core/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", component: LoginComponent },
  {path:"404",component:PageNotFoundComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent, HomeComponent, ObservablesComponent, PageNotFoundComponent]
})
export class CoreModule { }
