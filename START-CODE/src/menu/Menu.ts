
import { foodCategory, drinkCategory } from "./menuCategory";

export class MenuItem{
    public description?:string;
    constructor(private menu:drinkCategory|foodCategory, private price:number){}

    getPrice():number{
        return this.price;
    }
}