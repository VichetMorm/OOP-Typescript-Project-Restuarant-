
import { Staff, StaffCategory } from "./Staff";
import { Gender, Person } from "../Person";
import { MenuItem } from "../../menu/Menu";
import { Order } from "../../Order/Order";
import { OrderManager } from "../../Order/OrderManagement";


export class Chef extends Staff {
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
