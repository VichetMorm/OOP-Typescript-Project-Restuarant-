import { Gender, Person } from "../Person";

export enum StaffCategory {
  CHEF,
  WAITER,
  RECIPTIONIST,
  CASHIER
}

/**
 * A staff is a personn of the hospital with a salary
 */
export class Staff extends Person {
  protected salary: number = 0; // by default

  constructor(
    protected category: StaffCategory,
    name: string,
    age: number,
    gender: Gender
  ) {
    super(name, age, gender);
  }

  setSalary(salary: number) {
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

  getCategory(){
    return this.category;
  }
}
