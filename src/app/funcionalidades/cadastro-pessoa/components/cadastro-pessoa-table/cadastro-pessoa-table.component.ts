import { Component, Input, OnInit } from '@angular/core';
import { Pessoa } from '../../models/pessoa.model';

@Component({
  selector: 'app-cadastro-pessoa-table',
  templateUrl: './cadastro-pessoa-table.component.html',
  styleUrls: ['./cadastro-pessoa-table.component.scss']
})
export class CadastroPessoaTableComponent implements OnInit {

  @Input() pessoas: Pessoa[];

  colunas = ['nome', 'sexo', 'dataNascimento', 'cpf', 'acoes'];

  constructor() { }

  ngOnInit(): void {
  }

  visualizar(url: string): void {

  }

  excluir(): void {

  }

}
