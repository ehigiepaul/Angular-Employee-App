import {Injectable} from '@angular/core';
import {CrudBase} from "./crud-base";
import {User} from "../Models/user";
import {HttpClient} from "@angular/common/http";
import {AccessToken} from "../Models/accessToken";
import {Router} from "@angular/router";
import {LoginVeiwModel} from "../ViewModels/LoginVeiwModel";

@Injectable({
  providedIn: 'root'
})
export class UserApiServicesService extends CrudBase<User> {
  private _route: Router;

  constructor(httpClient: HttpClient, route: Router) {
    super(httpClient);
    this._route = route;
    this._path = "Users";
  }

  Login(cred: LoginVeiwModel) {

    return this._http.post<AccessToken>(`${this._url}/${this._path}/login`, cred)
  }

  Logout() {
    var token = localStorage.getItem("Token");
    var val: boolean = false;
    this._http.get<AccessToken>(`${this._url}/${this._path}/logout/${token}`);
    localStorage.removeItem("Token")
    window.location.reload();
  }


}
