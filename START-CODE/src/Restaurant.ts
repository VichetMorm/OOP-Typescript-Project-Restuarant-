import { HumanManager } from "./human/Humanmanager";
import { KitchenManager } from "./rooms/kitchenManager";
import { OrderManager } from "./Order/OrderManagement";
import { RoomsManager } from "./rooms/RoomsManager";
import { CalendarManager } from "./calendar/CalendarManager";



export class Restaurant{
  constructor(protected name:string, protected address:string){}

    // public services
  public rooms: RoomsManager = new RoomsManager();
  public hr: HumanManager = new HumanManager();
  public orders: OrderManager = new OrderManager();
  public kitchens: KitchenManager = new KitchenManager();
  public Calendars:CalendarManager = new CalendarManager();
}