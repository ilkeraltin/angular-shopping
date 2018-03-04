import { Observable } from 'rxjs/Observable';
import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../shared/services/auth.service';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$
    .map(appUser => appUser.isAdmin);
    }
}


