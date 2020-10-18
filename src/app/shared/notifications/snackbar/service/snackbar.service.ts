import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor() { }

  notificador = new EventEmitter<{msg: string, classe: string}>();

  exibirNotificaoSucesso(mensagem: string): void {
    this.notificador.emit({msg: mensagem, classe: 'sucesso'});
  }

  exibirNotificaoErro(mensagem: string): void {
    this.notificador.emit({msg: mensagem, classe: 'erro'});
  }

}
