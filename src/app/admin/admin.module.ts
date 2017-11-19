import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewItemComponent } from './new-item/new-item.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

const routes: Routes = [
   { path: 'new-item', component: NewItemComponent }
  

];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewItemComponent]
})
export class AdminModule { 
  count:number = 10;

  inc() {
    this.count++;
       
  }
}
