import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, NgZone, Injectable } from '@angular/core';
import { SnackbarService } from '../notifications/snackbar/snackbar.service';

@Injectable()
export class ScpErrorHandler extends ErrorHandler {

  constructor(private snackbarService: SnackbarService, private zone: NgZone) {
    super();
  }

  handleError(error: Error | HttpErrorResponse): void {

    if (error instanceof HttpErrorResponse) {
      this.zone.run(() => {
        this.snackbarService.exibirNotificaoErro(error.message);
      });
    } else {
        // Client Error
    }

    console.error(error);

    super.handleError(error);
  }

}
