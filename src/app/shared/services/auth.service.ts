import { UserService } from './user.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUser } from '../models/app-user';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(
    public afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.user$ = afAuth.authState;
  }

  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$
    .switchMap((user) => {
      if (user) {
        return this.userService.get(user.uid).valueChanges();
      }
      Observable.of(null);
    });
    }

}
