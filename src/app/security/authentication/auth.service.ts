import { Usuario } from './../../shared/models/usuario.model';
import { API } from './../../shared/api';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioSubject: BehaviorSubject<Usuario>;

  public usuario: Observable<Usuario>;

  constructor(private http: HttpClient,
              private router: Router) {
    this.usuarioSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('usuario')));
    this.usuario = this.usuarioSubject.asObservable();
  }

  login(login: string, senha: string): Observable<any> {
    return this.http.post<any>(`${API}/usuarios/autenticar`, { login, senha })
      .pipe(map(usuarioLogado => {
          usuarioLogado.authdata = window.btoa(login + ':' + senha);
          localStorage.setItem('usuario', JSON.stringify(usuarioLogado));
          this.usuarioSubject.next(usuarioLogado);
          return usuarioLogado;
      }));
  }

  logout(): void {
    localStorage.removeItem('usuario');
    this.usuarioSubject.next(null);
    this.router.navigate(['/login']);
  }

  public get usuarioValue(): Usuario {
    return this.usuarioSubject.value;
}

}
