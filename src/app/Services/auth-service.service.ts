import {Injectable} from '@angular/core';
import {UserApiServicesService} from "./user-api-services.service";
import {Router} from "@angular/router";
import {LoginVeiwModel} from "../ViewModels/LoginVeiwModel";
import {TokenApiService} from "./token-api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private _usersRepository: UserApiServicesService;
  private _route: Router;

  constructor(usersRepository: UserApiServicesService, tokenRepo: TokenApiService, route: Router) {
    this._usersRepository = usersRepository;
    this._route = route;
  }

  async Login(data: LoginVeiwModel) {
    try {
      await this._usersRepository.Login(data).subscribe(
        next => {
          localStorage.setItem("Token", next?.token!.toString());
          window.location.reload();
          this._route.navigate(['/employees']);
        },
        err => {
          console.log(err);
          console.log("Invalid account");
          alert("Invalid Credentials");
        }
      );
    } catch (e) {
      console.log("Invalid account");
      alert("Invalid Credentials");
    }
  }

  Logout() {
    this._usersRepository.Logout();
    this._route.navigate(["/login"])
  }

  LoggedIn(): boolean {
   return !!localStorage.getItem("Token");
  }
}
