import { Injectable } from '@angular/core';
import {  CanActivate, Router} from '@angular/router';
import {AuthServiceService} from "./auth-service.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  private _authService: AuthServiceService;
  private _router: Router;

  constructor(authService : AuthServiceService, router:Router) {
    this._authService = authService;
    this._router = router;
  }
  canActivate(): boolean {
    if(this._authService.LoggedIn()){
      return true;
    }
    this._router.navigate(["/login"])
    return false;
  }
}
