import { PessoaResponse } from './../models/api-response-pessoa.model';
import { API } from './../../../shared/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Pessoa } from '../models/pessoa.model';
import { AuthService } from 'src/app/security/authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient,
              private authService: AuthService) {}

  listarPessoas(): Observable<Pessoa[]> {
    const opt =  {
      headers: new HttpHeaders ({
          'Content-type': 'application/json',
          Authorization: 'Basic ' + this.authService.usuarioValue.authdata
      })
    };
    return this.http.get<PessoaResponse>(`${API}/pessoas`, opt)
      .pipe(
        map(response => response._embedded ? response._embedded.pessoaDTOList : [])
      );
  }

  incluirPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(`${API}/pessoas`, pessoa, { headers: this.getHeader() });
  }

  alterarPessoa(pessoa: Pessoa): Observable<Pessoa> {
    const opt = this.getHeader();
    return this.http.patch<Pessoa>(`${API}/pessoas`, pessoa, { headers: this.getHeader() });
  }

  recuperarPessoa(url: string): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${url}`, { headers: this.getHeader() });
  }

  excluirPessoa(url: string): Observable<any> {
    return this.http.delete(`${url}`, { headers: this.getHeader() });
  }

  private getHeader(): HttpHeaders {
    return new HttpHeaders ({
      'Content-type': 'application/json',
      Authorization: 'Basic ' + this.authService.usuarioValue.authdata
    });
  }

}
