import { Pessoa } from 'src/app/funcionalidades/cadastro-pessoa/models/pessoa.model';

export interface PessoaResponse {

  _embedded: {
    pessoaDTOList: Pessoa[];
    _links: {self: {href: string}};
  };

}
