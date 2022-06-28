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

    getListOfPayMentEachTable(){
        let listOfPayMent:{ tableID:number; payment:number}[]=[];
        for(let orders of this.orders){
            let totalPrice:number = 0;
            let order = orders.menuItems;
            for(let price of order){
                totalPrice += price.getPrice();
            }
            let tablePay={'tableID':orders.getTableId(), 'payment': totalPrice}
           
            listOfPayMent.push(tablePay);
        }
        return listOfPayMent;
    }

    getPaymentInATable(id:number){
        let paymentTables = this.getListOfPayMentEachTable();
        for(let paymentTable of paymentTables){
            if(id === paymentTable.tableID){
                return paymentTable;
            }
        }
    }

}