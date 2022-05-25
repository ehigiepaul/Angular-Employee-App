import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../Services/auth-service.service";
import {LoginVeiwModel} from "../../ViewModels/LoginVeiwModel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private _auth: AuthServiceService;

  cred:LoginVeiwModel={email:"", password:""};
  private _router: Router;

  constructor(auth:AuthServiceService, router:Router) {
    this._auth = auth;
    this._router = router;
  }

  ngOnInit(): void {
    if(!!localStorage.getItem("Token")){
      this._router.navigate(["/employees"])
    }
  }

  OnSubmit(){
    this._auth.Login(this.cred)
  }

}
