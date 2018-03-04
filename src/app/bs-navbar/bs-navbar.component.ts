import { AppUser } from '../shared/models/app-user';
import { AuthService } from '../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {
  appUser: AppUser;
  isAdmin: boolean;
  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
      this.isAdmin = appUser.isAdmin;
    });
  }

  logout() {
    this.auth.logout();
  }

}
