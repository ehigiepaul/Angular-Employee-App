import {Component, OnInit} from '@angular/core';
import {EmployeeApiServiceService} from "../../Services/employee-api-service.service";
import {Router} from "@angular/router";
import {Employee} from "../../Models/employee";

@Component({
  selector: 'employees-list-page',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  data!: Employee[];
  private errorMessage: any;
  private router: Router;
  private Employees: EmployeeApiServiceService;

  constructor(Employees: EmployeeApiServiceService, router: Router) {
    this.Employees = Employees;
    this.router = router;
    Employees.GetAll().subscribe(
      data => {
        this.data = data;
      },
      error => this.errorMessage = error
    );
  }

  selected: any;

  highLight(item: any) {
    this.selected = item;
  };

  ngOnInit(): void {
  }

  GetSalary(age: number) {
    if (age < 40) {
      return (age * 5) + 50000;
    } else {
      return (age * 10) + 50000;
    }
  }

  OnSelect(data: Employee) {
    this.router.navigate(['/employees/detail', data.id])
  }

  OnAdd() {
    this.router.navigate(['/employees/add'])
  }

  OnDelete(data: Employee) {
    let confirmed = confirm(`Are you sure you want to delete employee with id:${data.id}`);
    if (confirmed) {
      this.Employees.Delete(data.id).subscribe(
        next => {
          alert(`Employees with ${data.id} is deleted`)
          window.location.reload()
        },
        err => alert("Error deleting employee"))
    }

  }

  OnEdit(data: Employee) {
    this.router.navigate(['/employees/edit', data.id])
  }
}
