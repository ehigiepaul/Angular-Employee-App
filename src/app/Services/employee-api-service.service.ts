import {Injectable} from '@angular/core';
import {Employee} from "../Models/employee";
import {CrudBase} from "./crud-base";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiServiceService extends CrudBase<Employee>{

constructor(httpClient:HttpClient) {
  super(httpClient);
  this._path = "employees";
}



}



