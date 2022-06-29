import { HumanManager } from "./human/Humanmanager";
import { OrderManager } from "./Order/OrderManagement";
import { RoomsManager } from "./rooms/RoomsManager";
import { Manager } from "./human/staff/Manager";
import { Gender } from "./human/Person";




export class Restaurant{
  listOrder: any;
  constructor(protected name:string, protected address:string){}

    // public services
  public rooms: RoomsManager = new RoomsManager();
  public hr: HumanManager = new HumanManager();
  public orders: OrderManager = new OrderManager();
  public manager:Manager = new Manager ("Tim Bin", 19, Gender.MALE)
}