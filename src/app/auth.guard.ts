import { Injectable, OnInit } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { LoginserviceService } from './services/loginservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private login: LoginserviceService) {

  }

  // isLoggedIn() {
  //   if (sessionStorage.getItem("auth")=="true")
  //     return true;
  //   else
  //     return false;
  // }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.login.getloggedIn();
  }

}
