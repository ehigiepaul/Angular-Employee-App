import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../Services/auth-service.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  private _auth: AuthServiceService;

  constructor(auth:AuthServiceService) {
    this._auth = auth;
  }

  ngOnInit(): void {
    this._auth.Logout();
  }

}
