

import { Customer } from "../human/customer/Customer";
import { TableStatus } from "./TableStatus";

export class Table {
  
  private status = TableStatus.GOOD; // by default
  private customer?:Customer  = undefined; // not customer

  constructor(private id: number) {}

  getIdTable():number{
    return this.id;
  }

  // TABLE CUSTOMER ----------------------------------------------
  setCustomer(customer: Customer) {
    this.customer = customer;
  }

  hasCustomer() {
    return this.customer !== undefined;
  }

  getCustomer() {
    return this.customer;
  }

  // TABLE STATUS  ----------------------------------------------
  getStatus() {
    return this.status;
  }

  setStatus(newStatus: TableStatus) {
    this.status = newStatus;
  }

  removeCustomerFromTable(customer:Customer){
    this.customer = undefined;
  }
  
}
