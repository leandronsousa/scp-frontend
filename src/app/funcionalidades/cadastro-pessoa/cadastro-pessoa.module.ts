import { CpfPipe } from './../../shared/pipes/cpf.pipe';
import { MaterialModule } from './../../shared/modules/material.module';
import { PessoaService } from './services/pessoa.service';
import { CadastroPessoaFormComponent } from './components/cadastro-pessoa-form/cadastro-pessoa-form.component';
import { CadastroPessoaTableComponent } from './components/cadastro-pessoa-table/cadastro-pessoa-table.component';
import { ContainerCadastroPessoaFormComponent } from './containers/container-cadastro-pessoa-form/container-cadastro-pessoa-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerCadastroPessoaListComponent } from './containers/container-cadastro-pessoa-list/container-cadastro-pessoa-list.component';
import { CadastroPessoaRoutingModule } from './cadastro-pessoa-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    ContainerCadastroPessoaListComponent,
    ContainerCadastroPessoaFormComponent,
    CadastroPessoaTableComponent,
    CadastroPessoaFormComponent
  ],
  imports: [
    CommonModule,
    CadastroPessoaRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    PessoaService
  ]
})
export class CadastroPessoaModule { }
