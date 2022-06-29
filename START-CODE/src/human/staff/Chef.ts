
import { Staff, StaffCategory } from "./Staff";
import { Gender, Person } from "../Person";
import { MenuItem } from "../../menu/Menu";
import { Order } from "../../Order/Order";
import { OrderManager } from "../../Order/OrderManagement";


export class Chef extends Staff {
  public menus:MenuItem[]=[];
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

  addMenuToChef(order:Order){
    this.menus = order.getMenu();
  }

  getMenuForChef():MenuItem[]{
    // return this.menus.getMenu();
    return this.menus
  }

  getDone():boolean{
    let menu = this.menus.length;
    if (menu>0) {
      return true;
    }else{
      return false;
    }
  }

    

 

}
