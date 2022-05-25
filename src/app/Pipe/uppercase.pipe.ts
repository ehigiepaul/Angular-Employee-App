import { Pipe, PipeTransform } from '@angular/core';
import {Employee} from "../Models/employee";

@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string, ...args: Employee[]): string {

    return value.toUpperCase();
  }

}
