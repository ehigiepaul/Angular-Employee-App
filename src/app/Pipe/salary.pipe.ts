import { Pipe, PipeTransform } from '@angular/core';
import {Employee} from "../Models/employee";

@Pipe({
  name: 'salary'
})
export class SalaryPipe implements PipeTransform {

  transform(age: any, ...args: Employee[]): string {

    if (age < 40) {
      return `$${(age * 5) + 50000}`;
    } else {
      return `$${(age * 10) + 50000}`;
    }
  }

}
