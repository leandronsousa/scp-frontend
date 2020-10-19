import { EventEmitter, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  exibirNotificaoSucesso(mensagem: string): void {
    this.exibirMensagem(mensagem);
  }

  exibirNotificaoErro(mensagem: string): void {
    this.exibirMensagem(mensagem);
  }

  private exibirMensagem(msg: string): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
