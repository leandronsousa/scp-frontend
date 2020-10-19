import { PessoaResponse } from './../models/api-response-pessoa.model';
import { API } from './../../../shared/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Pessoa } from '../models/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) {}

  listarPessoas(): Observable<Pessoa[]> {
    return this.http.get<PessoaResponse>(`${API}/pessoas`)
      .pipe(
        map(response => response._embedded ? response._embedded.pessoaDTOList : [])
      );
  }

  incluirPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(`${API}/pessoas`, pessoa);
  }

  alterarPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.patch<Pessoa>(`${API}/pessoas`, pessoa);
  }

  recuperarPessoa(url: string): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${url}`);
  }

  excluirPessoa(url: string): Observable<any> {
    return this.http.delete(`${url}`);
  }

  private getHeader(): any {
    const username = 'leandro';
    const password = '123456';
    const opt =  {
      headers: new HttpHeaders ({
          'Content-type': 'application/json',
          Authorization: 'Basic ' + btoa(username + ':' + password)
      })
    };
    return opt;
  }

}
