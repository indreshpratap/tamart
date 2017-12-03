import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ErrorsComponent } from './errors/errors.component';
import { MatToolbarModule, MatIconModule, MatCardModule, MatMenuModule, MatButtonModule } from '@angular/material'
const IMPORT_EXPORT = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule
];

const EXPORTED_COMPONENTS = [ErrorsComponent];

@NgModule({
  imports: IMPORT_EXPORT,
  exports: [...IMPORT_EXPORT,...EXPORTED_COMPONENTS ],
  declarations: [ErrorsComponent]
})
export class SharedModule { }
