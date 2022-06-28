import { Chef } from "../human/staff/Chef";
import { Order } from "../Order/Order";
import { DateTime } from "./DateTime";
import { Event, EventCategory } from "./Event";

export class CookingAppointment extends Event {
  constructor(
    category: EventCategory,
    start: DateTime,
    end: DateTime,
    
  ) {
    super(category, start, end);
  }
  
  
}
