import { LoginModule } from './funcionalidades/login/login.module';
import { MaterialModule } from './shared/modules/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './funcionalidades/home/home.component';
import { ScpErrorHandler } from './shared/handlers/error-handler';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    LoginModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: ScpErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
