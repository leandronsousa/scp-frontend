import { API } from './../../shared/api';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const usuario = this.authService.usuarioValue;
    const isLoggedIn = usuario && usuario.authdata;
    const isApiUrl = request.url.startsWith(API);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
            Authorization: `Basic ${usuario.authdata}`
        }
      });
    }
    return next.handle(request);
  }
}
