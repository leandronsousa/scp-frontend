import { ContainerCadastroPessoaFormComponent } from './containers/container-cadastro-pessoa-form/container-cadastro-pessoa-form.component';
import { ContainerCadastroPessoaListComponent } from './containers/container-cadastro-pessoa-list/container-cadastro-pessoa-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ContainerCadastroPessoaListComponent
  },
  {
    path: ':id',
    component: ContainerCadastroPessoaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroPessoaRoutingModule { }
