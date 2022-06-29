import { MenuItem } from "../menu/Menu";
import { Table } from "../rooms/Table";
import { Order } from "./Order";
export class OrderManager {
    public orders: Order[]=[];

    getNumberOfOrder():number{
        return this.orders.length;
    }

    addOrder(order:Order){
        this.orders.push(order);
    }

    getOrders():Order[]{
        return this.orders;
    }

    getOneOrder(id:number):Order{
        return this.orders[id];
    }

    listOfPayMentEachTable(){
        let listOfPayMent:{ tableID:number; listMenus:MenuItem[]; totalPayMent:number}[]=[];
        for(let orders of this.orders){
            let totalPrice:number = 0;
            let order = orders.menuItems;
            let listMenus:MenuItem[]=[]
            for(let menu of order){
                totalPrice += menu.getPrice();
                listMenus.push(menu);
            }
            let tablePay={'tableID':orders.getTableId(),"listMenus":listMenus,  'totalPayMent': totalPrice}
           
            listOfPayMent.push(tablePay);
        }
        return listOfPayMent;
    }

    getPaymentInATable(id:number){
        let paymentTables = this.listOfPayMentEachTable();
        for(let paymentTable of paymentTables){
            if(id === paymentTable.tableID){
                return paymentTable;
            }
        }
    }


}