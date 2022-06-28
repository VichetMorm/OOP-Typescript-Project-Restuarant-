
import { Customer } from "./customer/Customer";
import { Staff } from "./staff/Staff";

export class HumanManager {
    protected staffs:Staff[]=[];
    protected customers:Customer[]=[]

    setCustomers(customer:Customer){
        this.customers.push(customer)
    }

    getCustomers():Customer[]{
        return  this.customers;
    }
    setStaff(staff:Staff){
        this.staffs.push(staff)
    }

    getStaffs():Staff[]{
        return  this.staffs;
    }
}




