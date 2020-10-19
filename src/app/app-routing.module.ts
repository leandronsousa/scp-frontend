import { HomeComponent } from './funcionalidades/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './funcionalidades/login/component/login.component';
import { AuthGuardGuard } from './security/authentication/auth-guard.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '',
    component: HomeComponent, canActivate: [AuthGuardGuard],
    children: [
      {
        path: 'pessoas',
        loadChildren: () => import('./funcionalidades/cadastro-pessoa/cadastro-pessoa.module').then(mod => mod.CadastroPessoaModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
