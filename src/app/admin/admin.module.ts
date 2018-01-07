import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewItemComponent } from './new-item/new-item.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { AdminComponent } from 'app/admin/admin.component';

const adminRoutes: Routes = [
  {
    path: "admin", component: AdminComponent,
    children: [
      { path: 'new-item', component: NewItemComponent }]
  }


];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [AdminComponent, NewItemComponent]
})
export class AdminModule {
  count: number = 10;

  inc() {
    this.count++;

  }
}
