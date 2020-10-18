import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pessoa } from '../../models/pessoa.model';

@Component({
  selector: 'app-cadastro-pessoa-table',
  templateUrl: './cadastro-pessoa-table.component.html',
  styleUrls: ['./cadastro-pessoa-table.component.scss']
})
export class CadastroPessoaTableComponent implements OnInit {

  @Input() pessoas: Pessoa[];

  @Output() visualizarPessoa: EventEmitter<string> = new EventEmitter();

  @Output() excluirPessoa: EventEmitter<string> = new EventEmitter();

  colunas = ['nome', 'sexo', 'dataNascimento', 'cpf', 'acoes'];

  constructor() { }

  ngOnInit(): void {
  }

  visualizar(url: any): void {
    this.visualizarPessoa.emit(url.href);
  }

  excluir(url: any): void {
    this.excluirPessoa.emit(url.href);
  }

}
