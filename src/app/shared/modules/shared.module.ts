import { CpfPipe } from './../pipes/cpf.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarModule } from '../notifications/snackbar/snackbar.module';

@NgModule({
  declarations: [
    CpfPipe
  ],
  imports: [
    CommonModule,
    SnackbarModule
  ],
  exports: [
    CpfPipe
  ]
})
export class SharedModule { }
