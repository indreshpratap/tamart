import { NgModule } from '@angular/core';


import { HomeComponent } from './home/home.component';
import { SharedModule } from 'app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ObservablesComponent } from './observables/observables.component';
import { ErrorsComponent } from './errors/errors.component';
import { AdminModule } from 'app/admin/admin.module';
import { LoginComponent } from 'app/core/login/login.component';

const routes: Routes = [
  // { path: "", redirectTo: "/", pathMatch: "full" },
  {
    path: "home", component: HomeComponent, children: [
      // { path: "admin", loadChildren: "../admin/admin.module#AdminModule" }
    ]
  },
  {
    path: "", component: LoginComponent,
  }
];

@NgModule({
  imports: [
    SharedModule,
    // AdminModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent, HomeComponent, ObservablesComponent, ErrorsComponent]
})
export class CoreModule { }
