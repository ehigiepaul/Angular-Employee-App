import { Component } from '@angular/core';
import {AuthServiceService} from "./Services/auth-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeApp';
   isLoggedIn: boolean;
   auth: AuthServiceService;

  constructor(auth:AuthServiceService) {
    this.auth = auth;
    this.isLoggedIn = auth.LoggedIn()
  }

}
