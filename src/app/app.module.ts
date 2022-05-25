import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule, ActivatedRoute} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {HomeComponent} from './Pages/home/home.component';
import {EmployeesComponent} from './Pages/employees/employees.component';
import {EmployeesListComponent} from './Components/employees-list/employees-list.component';
import {PageNotFoundComponent} from './Components/page-not-found/page-not-found.component';
import {EmployeeDetialComponent} from './Pages/employee-detial/employee-detial.component';
import {SalaryPipe} from './Pipe/salary.pipe';
import {UppercasePipe} from './Pipe/uppercase.pipe';
import { LoginComponent } from './Pages/login/login.component';
import {AuthGuardGuard} from "./Services/auth-guard.guard";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LogoutComponent } from './Pages/logout/logout.component';
import { AddEmployeeComponent } from './Pages/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Pages/edit-employee/edit-employee.component';

let routes: Routes = [
  {path: "", component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'employees', component: EmployeesListComponent,canActivate:[AuthGuardGuard],
  children:[
    {path: 'detail/:id', component: EmployeeDetialComponent},
    {path: 'add', component: AddEmployeeComponent},
    {path: 'edit/:id', component: EditEmployeeComponent},
  ]
  },
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesComponent,
    EmployeesListComponent,
    PageNotFoundComponent,
    EmployeeDetialComponent,
    SalaryPipe,
    UppercasePipe,
    LoginComponent,
    LogoutComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,

  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule,
    ],
  exports: [RouterModule],
  providers: [AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
