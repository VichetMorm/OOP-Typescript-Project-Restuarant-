

import { Customer } from "../human/customer/Customer";
import { Room } from "./Room";

export class RoomsManager {
  public rooms: Room[] = [];
  getNumberOfRooms(): number {
    return this.rooms.length;
  }
  addRoom(room: Room) {
    return this.rooms.push(room);
  }

  /** Find a room with a free table
   * @return the first room available with a free table
   */
  //  findFreeRoom(): Room | undefined {
  //   let freeRooms:Room[]=[];
  //   this.rooms.forEach(room => {
  //     let tables = room.getTables();
  //     tables.forEach(table => {
  //       if(!table.hasCustomer()){
  //         freeRooms.push(room);
  //       }
  //     });
  //   });
  //   if(freeRooms.length > 0){
  //     return freeRooms[1];
  //   }
  //     return undefined;
  // }
  
  // removeCustomer(customer:Customer){
  //   this.rooms.forEach(room => {
  //     let tables = room.getTables();
  //     tables.forEach(table => {
  //       if(table.getCustomer()?.isEqual(customer)){
  //         table.removeCustomerFromTable(customer)
  //       }
  //     });
  //   });
  // }
}
