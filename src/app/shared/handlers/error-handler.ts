import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, NgZone, Injectable } from '@angular/core';
import { AuthService } from 'src/app/security/authentication/auth.service';
import { SnackbarService } from '../notifications/snackbar/snackbar.service';

@Injectable()
export class ScpErrorHandler extends ErrorHandler {

  constructor(private snackbarService: SnackbarService,
              private zone: NgZone,
              private authService: AuthService) {
    super();
  }

  handleError(error: Error | HttpErrorResponse): void {

    if (error instanceof HttpErrorResponse) {
      this.zone.run(() => {
        if (error.status === 401) {
          this.snackbarService.exibirNotificaoErro(error.error);
          this.authService.logout();
        } else {
          const msg = error.error || error.error.message;
          if (msg) {
            this.snackbarService.exibirNotificaoErro(msg);
          }
        }
      });
    } else {
        // Client Error
    }

    super.handleError(error);
  }

}
