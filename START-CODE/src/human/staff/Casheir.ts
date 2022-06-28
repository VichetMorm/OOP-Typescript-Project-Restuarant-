
import { Staff, StaffCategory } from "./Staff";
import { Gender, Person } from "../Person";
import { Order } from "../../Order/Order";


export class Cashier extends Staff {
  // private 
  protected salary:number = 0;
  constructor(category:StaffCategory,name: string, age: number, gender: Gender) {
    super(category,name, age, gender);
  }

  setSalary(salary: number){
    this.salary=salary;
  }

  getSalary(): number {
    return this.salary;
  }

  

}
