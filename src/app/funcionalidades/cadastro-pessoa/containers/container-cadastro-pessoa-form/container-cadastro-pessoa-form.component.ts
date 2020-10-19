import { PessoaService } from './../../services/pessoa.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Pessoa } from '../../models/pessoa.model';
import { takeUntil } from 'rxjs/operators';
import {  Router } from '@angular/router';
import { SnackbarService } from 'src/app/shared/notifications/snackbar/snackbar.service';

@Component({
  selector: 'app-container-cadastro-pessoa-form',
  templateUrl: './container-cadastro-pessoa-form.component.html',
  styleUrls: ['./container-cadastro-pessoa-form.component.scss']
})
export class ContainerCadastroPessoaFormComponent implements OnInit, OnDestroy {

  pessoa$: Observable<Pessoa>;

  subject$ = new Subject();

  constructor(private pessoaService: PessoaService,
              private router: Router,
              private snackbarService: SnackbarService) { }

  ngOnInit(): void {
    if (history.state.link) {
      this.pessoa$ = this.pessoaService.recuperarPessoa(history.state.link);
    }
  }

  ngOnDestroy(): void {
    this.subject$.next();
  }

  incluirPessoa(pessoa: Pessoa): void {
    this.pessoaService.incluirPessoa(pessoa).pipe(
      takeUntil(this.subject$)
    ).subscribe(
      pessoaCadastrada => {
        this.snackbarService.exibirNotificaoSucesso('Pessoa cadastrada com sucesso!');
        this.router.navigate(['/pessoas']);
      }
    );
  }

  alterarPessoa(pessoa: Pessoa): void {
    this.pessoaService.alterarPessoa(pessoa).pipe(
      takeUntil(this.subject$)
    ).subscribe(
      pessoaAlterada => {
        this.snackbarService.exibirNotificaoSucesso('Pessoa alterada com sucesso!');
        this.router.navigate(['/pessoas']);
      }
    );
  }

}
