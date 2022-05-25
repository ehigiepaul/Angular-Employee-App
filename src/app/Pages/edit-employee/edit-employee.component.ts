import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {EmployeeApiServiceService} from "../../Services/employee-api-service.service";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  private _route: ActivatedRoute;
  private _employeeApi: EmployeeApiServiceService;
  private router: Router;
  employee: any;

  constructor(route:ActivatedRoute, router:Router, employeeApi : EmployeeApiServiceService) {
    this.router = router;
    this._route = route;
    this._employeeApi = employeeApi;
  }

  ngOnInit(): void {
    this._route.params.subscribe((para:Params)=>{
      let id = para["id"];
      this._employeeApi.Get(id).subscribe(emp=>{
        this.employee = emp;
      },
        error => {
        alert(error);
        }
        )
    })
  }

  UpdateEmployee() {
    this._employeeApi.Update(this.employee.id, this.employee)
      .subscribe(next=>{
        alert("Employees Updated");
        this.router.navigate(["/employees"]);
      })
  }
}
