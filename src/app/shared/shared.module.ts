import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ErrorsComponent } from './errors/errors.component';
import { MatToolbarModule, MatIconModule, MatCardModule, MatMenuModule, MatButtonModule } from '@angular/material';
import { HeaderComponent } from './layout/header/header.component'
import { RouterModule } from '@angular/router';
const IMPORT_EXPORT = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  RouterModule
];

const EXPORTED_COMPONENTS = [ErrorsComponent,HeaderComponent];

@NgModule({
  imports: IMPORT_EXPORT,
  exports: [...IMPORT_EXPORT,...EXPORTED_COMPONENTS ],
  declarations: EXPORTED_COMPONENTS
})
export class SharedModule { }
