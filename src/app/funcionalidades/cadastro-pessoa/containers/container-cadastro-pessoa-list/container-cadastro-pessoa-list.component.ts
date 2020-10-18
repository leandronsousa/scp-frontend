import { PessoaService } from './../../services/pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../../models/pessoa.model';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

@Component({
  selector: 'app-container-cadastro-pessoa-list',
  templateUrl: './container-cadastro-pessoa-list.component.html',
  styleUrls: ['./container-cadastro-pessoa-list.component.scss']
})
export class ContainerCadastroPessoaListComponent implements OnInit {

  pessoas$: Observable<Pessoa[]>;

  constructor(private pessoaService: PessoaService,
              private router: Router) { }

  ngOnInit(): void {
    this.consultarPessoas();
  }

  consultarPessoas(): void {
    this.pessoas$ = this.pessoaService.listarPessoas();
  }

  visualizar(url: string): void {
    const id = url.replace(/\D/g, '');
    this.router.navigate(['/pessoas', id], { state: { link: url }});
  }

  excluir(url: string): void {
    if (window.confirm('Confirmar exclusão da pessoa?')) {
      this.pessoaService.excluirPessoa(url).pipe(
        take(1),
        finalize(() => this.consultarPessoas())
      ).subscribe();
    }
  }

}
