import { API } from './../../shared/api';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/security/authentication/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  source: string;

  swagger: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.source = `${API}/source`;
    this.swagger = `${API}/swagger-ui/index.html`;
    this.router.navigate(['/pessoas']);
  }

  logout(): void {
    this.authService.logout();
  }

}
