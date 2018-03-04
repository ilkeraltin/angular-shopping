import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    RouterModule
  ],
  declarations: [
    LoginComponent,
    BsNavbarComponent,
    HomeComponent
  ],
  exports: [
    LoginComponent,
    BsNavbarComponent,
    HomeComponent
  ]
})
export class CoreModule { }
