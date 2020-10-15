import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/pessoas'
  },
  {
    path: 'pessoas',
    loadChildren: () => import('./funcionalidades/cadastro-pessoa/cadastro-pessoa.module').then(mod => mod.CadastroPessoaModule)
  },
  {
    path: '**', redirectTo: '/pessoas'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
