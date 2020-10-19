import { CpfPipe } from './../pipes/cpf.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CpfPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CpfPipe
  ],
  providers: [
  ]
})
export class SharedModule { }
