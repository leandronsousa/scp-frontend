import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/security/authentication/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  returnUrl: string;

  loginForm = this.formBuilder.group({
    login: this.formBuilder.control(
      {value: null, disabled: false},
      {
        validators: Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9._-]+$')]),
        updateOn: 'blur'
      }
    ),
    password: this.formBuilder.control(
      {value: '', disabled: false},
      {
        validators: Validators.compose([Validators.required, Validators.minLength(6)])
      }
    )
  });

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) {
    if (this.authService.usuarioValue) {
        this.router.navigate(['/pessoas']);
    }
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/pessoas';
  }

  login(): void {
    this.authService.login(this.loginForm.get('login').value, this.loginForm.get('password').value)
      .pipe(
        take(1)
      ).subscribe(
        data => {
          this.router.navigate(['/pessoas']);
        }
      );
  }

}
