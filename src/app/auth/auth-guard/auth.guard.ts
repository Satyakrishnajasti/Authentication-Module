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
    return true;
  }

  checkLogin(url: string): any {
    console.log('Url' + url);

    let val: any = localStorage.getItem('isUserLoggedIn');

    if (val != null && val == "true") {
      if (url == "/login") {
        this.router.parseUrl('/expense');
      }

      else
        return true;
    }

    else {
      return this.router.parseUrl('/login');
    }
  }

}
