import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employees-page',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    window.location.reload()
  }

}
