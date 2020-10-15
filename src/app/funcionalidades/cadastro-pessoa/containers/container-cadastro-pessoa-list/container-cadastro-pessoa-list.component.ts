import { PessoaService } from './../../services/pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../../models/pessoa.model';

@Component({
  selector: 'app-container-cadastro-pessoa-list',
  templateUrl: './container-cadastro-pessoa-list.component.html',
  styleUrls: ['./container-cadastro-pessoa-list.component.scss']
})
export class ContainerCadastroPessoaListComponent implements OnInit {

  pessoas$: Observable<Pessoa[]>;

  constructor(pessoaService: PessoaService) { }

  ngOnInit(): void {

  }

  visualizar(url: string): void {

  }

  excluir(): void {

  }

}
