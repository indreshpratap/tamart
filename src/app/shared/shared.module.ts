import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MatToolbarModule,MatIconModule,MatCardModule, MatMenuModule, MatButtonModule} from '@angular/material'
const IMPORT_EXPORT= [
  CommonModule,
  FormsModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule
]

@NgModule({
  imports: IMPORT_EXPORT,
  exports: IMPORT_EXPORT,
  declarations: []
})
export class SharedModule { }
