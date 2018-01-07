import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from 'app/core/core.module';
import { AdminModule } from 'app/admin/admin.module';

import "rxjs/Rx";

const mainRoutes: Routes = [
  { path: '**', redirectTo: "404", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AdminModule,
    RouterModule.forRoot(mainRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
