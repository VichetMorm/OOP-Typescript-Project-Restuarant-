
import { Gender } from "../Person";
import { Staff, StaffCategory } from "./Staff";

/**
 * A nurse manage patient checks
 */
export class Waiter extends Staff {
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
