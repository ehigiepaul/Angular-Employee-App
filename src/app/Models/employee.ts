import {IEmployee} from "./iemployee";

export class Employee implements IEmployee {
  age: number;
  gender: string;
  name: string;
  id: number;
  salary: number| any;

  constructor(name: string, gender: string, age: number, id:number) {
    this.age = age;
    this.name = name;
    this.gender = gender;
    this.id = id;
  }




}
