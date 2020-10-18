import { SnackbarService } from './../service/snackbar.service';
import { Component, OnInit } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { timer } from 'rxjs';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  animations: [
    trigger('visibilidade-snackbar', [
      state('hidden', style({
        opacity: 0,
        top: '0px'
      })),
      state('visible', style({
        opacity: 1,
        top: '50px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  mensagem: string;

  visibilidade = 'hidden';

  classe: string;

  constructor(private snackbarService: SnackbarService) { }

  ngOnInit() {
      this.snackbarService.notificador.pipe(
        tap(notificacao => {
          this.mensagem = notificacao.msg;
          this.classe = notificacao.classe;
          this.visibilidade = 'visible';
        }),
        switchMap(message => timer(3000))
      ).subscribe(timer => this.visibilidade = 'hidden');
  }

}
