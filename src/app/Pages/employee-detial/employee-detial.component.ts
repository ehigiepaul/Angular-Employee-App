import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params} from "@angular/router";
import { EmployeeApiServiceService} from "../../Services/employee-api-service.service";

@Component({
  selector: 'app-employee-detial',
  templateUrl: './employee-detial.component.html',
  styleUrls: ['./employee-detial.component.css']
})
export class EmployeeDetialComponent implements OnInit {
  private route: ActivatedRoute;
  private _employeeService: EmployeeApiServiceService;
  data: any;
  private errorMessage: any;

  constructor(route: ActivatedRoute, employeeService: EmployeeApiServiceService) {
    this.route = route;
    this._employeeService = employeeService;
  }

  ngOnInit(): void {
    this.route.params.subscribe((param:Params) => {

      let id = param["id"];
      this._employeeService.Get(id).subscribe(
        (d) => {this.data = d},
        error => this.errorMessage = error
        )
    });
  }

}
