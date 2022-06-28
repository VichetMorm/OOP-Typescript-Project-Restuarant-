import { Customer } from "../human/customer/Customer";
import { MenuItem } from "../menu/Menu";
import { Table } from "../rooms/Table";

export class Order{
    public menuItems:MenuItem[]=[]
    constructor(private id:number, private table:Table){}
    menuSelected(menu:MenuItem){
        this.menuItems.push(menu);
    }


    getTableId():number{
        return this.table.getIdTable();
    }

}