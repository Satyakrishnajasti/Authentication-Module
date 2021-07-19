import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../auth-services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private service: AuthService) {

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): any {
    console.log('Url' + url);

    let val: any = localStorage.getItem('isUserLoggedIn');

    if (val != null && val == "true") {
      if (url == "auth/login") {
        this.router.parseUrl('/expense');
      }

      else
        return true;
    }

    else {
      return this.router.parseUrl('auth/login');
    }
  }

}
