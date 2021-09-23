import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { Injector } from '@angular/core';
import { Router } from '@angular/router';
import myAppConfig from './config/my-app-config';


const oktaConfig = Object.assign({
  onAuthRequired: (oktaAuth: any, injector: Injector) => {
     const router = injector.get(Router);
     router.navigate(['/login']);
  }
}, myAppConfig.oidc)

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: oktaConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
