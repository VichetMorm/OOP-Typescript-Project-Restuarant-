
import { Gender, Person } from "../Person";
export class Manager extends Person {
    protected salary:number = 0;
    constructor(name: string, age: number, gender: Gender) {
      super(name, age, gender);
    }
}