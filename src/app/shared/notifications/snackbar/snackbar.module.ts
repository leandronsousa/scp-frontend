import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './component/snackbar.component';
import { SnackbarService } from './service/snackbar.service';

@NgModule({
  declarations: [
    SnackbarComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    SnackbarService
  ]
})
export class SnackbarModule { }
