
import { DateTime } from "./DateTime";
import { CookingAppointment } from "./CookingAppointment";
import { Event } from "./Event";

export class CalendarManager {
  public events: Event[] = [];

  addEvent(event: Event) {
    this.events.push(event);
  }

  /**
   * @returns all appointement for the given cooker
   */
  getAllAppointementFor() {

  }

}
