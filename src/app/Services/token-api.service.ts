import { Injectable } from '@angular/core';
import {CrudBase} from "./crud-base";
import {AccessToken} from "../Models/accessToken";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TokenApiService extends CrudBase<AccessToken>{
  private _route: Router;

  constructor(httpClient: HttpClient, route: Router) {
    super(httpClient)
    this._route = route;
    this._path = "TokenAccesses";
  }
}
