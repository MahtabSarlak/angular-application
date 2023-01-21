import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,Router, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './service/auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // @ts-ignore
    return this.authService.isAuthenticated()
      .then(
        (authenticated: any) => {
          if (authenticated) {
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
  }
}
