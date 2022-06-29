import { TypeOfFoods } from "./menuCategory";

export class MenuItem{
    public description?:string;
    constructor(private TypeFood:TypeOfFoods, private name:string, private price:number){}

    getPrice():number{
        return this.price;
    }
}