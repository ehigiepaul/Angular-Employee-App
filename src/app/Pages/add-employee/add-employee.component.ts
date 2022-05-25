import {Component, OnInit} from '@angular/core';
import {Employee} from "../../Models/employee";
import {EmployeeApiServiceService} from "../../Services/employee-api-service.service";
import {Router} from "@angular/router";
import { FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee
  private _employeeApi: EmployeeApiServiceService;
  private _route: Router;
  employeeForm: FormGroup;

  constructor(employeeApi: EmployeeApiServiceService, route: Router) {
    this._employeeApi = employeeApi;
    this._route = route;
    this.employee = new Employee("", "", 0, 0,);
  }

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      name:new FormControl("", [Validators.required]),
      gender:new FormControl("", Validators.required),
      age:new FormControl("", Validators.required),
    })
  }

  get name(){return this.employeeForm.get("name")}
  get gender(){return this.employeeForm.get("gender")}
  get age(){return this.employeeForm.get("age")}
  AddEmployee() {
    this._employeeApi.Create(this.employeeForm.value).subscribe(next => {
        alert("Employee Added")
        this._route.navigate(["/employees"])
        window.location.reload()

      },
      error => {
        alert("Cant create user")
        console.log(error)
      }
    );
  }
}
