import { Chef } from "../human/staff/Chef";
import { MenuItem } from "../menu/Menu";
import { Order } from "../Order/Order";

export class KitchenManager{
   private listChefs:Chef[]=[];
   private listOrders:Order[]=[];

   addChef(chef:Chef){
    this.listChefs.push(chef);
   }

   addOrders(order:Order){
    this.listOrders.push(order);
   }

   getListOfMenu():MenuItem[]{
    let listOfMenu:MenuItem[]=[]
    for(let orders of this.listOrders){
        let order = orders.menuItems;
        for (let menu of order){
            listOfMenu.push(menu);
        }
    }
    return listOfMenu
   }



}

