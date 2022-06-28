

import { MenuItem } from "../../menu/Menu";
import { Gender, Person } from "../Person";

export class Customer extends Person {
  public menuOrders?: MenuItem[];
  constructor(name: string, age: number, gender: Gender) {
    super(name, age, gender);
  }

  isEqual(other:Customer):boolean{
    if(this.name === other.name && this.age === other.age && this.gender === other.gender){
      return true
    }else{return false}
  }

  setMenu(menu:MenuItem){
    this.menuOrders?.push(menu);
  }

  getMenuCustomerOrders(){
    return this.menuOrders
  }


}
