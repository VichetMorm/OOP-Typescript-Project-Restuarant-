//REQUIREMENT

import { Room } from "./rooms/Room";
import { Table } from "./rooms/Table";
import { HumanManager } from "./human/Humanmanager";
import { Customer } from "./human/customer/Customer";
import { Chef } from "./human/staff/Chef";
import { Gender } from "./human/Person";
import { Cashier } from "./human/staff/Casheir";
import { Staff, StaffCategory } from "./human/staff/Staff";
import { Restaurant } from "./Restaurant";
import { Waiter } from "./human/staff/waiter";
import { TableStatus } from "./rooms/TableStatus";
import { RoomsManager } from "./rooms/RoomsManager";
import { Order } from "./Order/Order";
import { MenuItem } from "./menu/Menu";
import { drinkCategory, foodCategory } from "./menu/menuCategory";
import { CalendarManager } from "./calendar/CalendarManager";
import { DateTime } from "./calendar/DateTime";
import { CookingAppointment } from "./calendar/CookingAppointment";
import { EventCategory } from "./calendar/Event";
//_________________restaurant_________________________________
const Vichet_Restuarant = new Restaurant("Vichet Romdul", "KPT");
//_____________________________Humanmanager_______________________________________
// ___________________chef______________________________________
const tim_chef = new Chef(StaffCategory.CHEF, "Tim", 18, Gender.MALE);
tim_chef.setSalary(3000);
//___________________cashier___________________________________
const vansoa_cashier = new Cashier(StaffCategory.CASHIER, "Vansoa", 25, Gender.MALE)
vansoa_cashier.setSalary(4000);
//__________________Waiter______________________________________
const nga_waiter = new Waiter(StaffCategory.WAITER, "Nga", 22, Gender.MALE);
nga_waiter.setSalary(4200);

//____________ add staff to restuarant _______________________
Vichet_Restuarant.hr.setStaff(tim_chef);
Vichet_Restuarant.hr.setStaff(vansoa_cashier);
Vichet_Restuarant.hr.setStaff(nga_waiter);
//_______________________Customers________________________________________
let customer1 = new Customer("Shaut", 50, Gender.MALE);
let customer2 = new Customer("Sarath", 40, Gender.MALE)
let customer3 = new Customer("Bopha", 20, Gender.MALE);
let customer4 = new Customer("Sopha", 30, Gender.MALE)
let customer5 = new Customer("SeyHa", 60, Gender.MALE);
let customer6 = new Customer("Mao", 19, Gender.FEMALE);
//_____________________________customer_______________________________________
Vichet_Restuarant.hr.setCustomers(customer1)
Vichet_Restuarant.hr.setCustomers(customer2)
Vichet_Restuarant.hr.setCustomers(customer3)
Vichet_Restuarant.hr.setCustomers(customer4)
Vichet_Restuarant.hr.setCustomers(customer5)
Vichet_Restuarant.hr.setCustomers(customer6)
// console.log("Staffs in restaurant : ", Vichet_Restuarant.hr);
//_________________________Room______________________________________________
let table1 = new Table(1);
let table2 = new Table(2);
let table3 = new Table(3);
let table4 = new Table(4);
table1.setCustomer(customer1);
table2.setCustomer(customer2)
table4.setCustomer(customer3)
table3.setCustomer(customer4)
table1.setStatus(TableStatus.GOOD)
table2.setStatus(TableStatus.GOOD)
table3.setStatus(TableStatus.BROKEN);
table4.setStatus(TableStatus.OPERATIONAL);
let room1 = new Room(1);
room1.addTable(table1);
room1.addTable(table2);
room1.addTable(table3);
room1.addTable(table4)
Vichet_Restuarant.rooms.addRoom(room1);
// console.log("Room in restaurant : ", Vichet_Restuarant.rooms);

//_______________________________Menu_____________________________
let rice = new MenuItem(foodCategory.RICE, 2500);
let roast = new MenuItem(foodCategory.ROAST_CHECKENT, 15000)
let coca = new MenuItem(drinkCategory.COCA, 3000)
let sprite = new MenuItem(drinkCategory.SPRITE, 3400)
let wine = new MenuItem(drinkCategory.WINE, 50000)
//_______________________________Order_____________________________
let order1 = new Order( 1, table1)
order1.menuSelected(rice);
order1.menuSelected(roast);
order1.menuSelected(sprite);
let order2 = new Order(2, table4);
order2.menuSelected(wine);
order2.menuSelected(roast);
Vichet_Restuarant.orders.addOrder(order1);

let order3 = new Order(3, table2);
order3.menuSelected(coca);
order3.menuSelected(rice);
order3.menuSelected(roast);
Vichet_Restuarant.orders.addOrder(order3);

// console.log("All payment : ", Vichet_Restuarant.orders.getListOfPayMentEachTable());
// console.log("Payment at table : ", Vichet_Restuarant.orders.getPaymentInATable(1));
//___________________________kitchen__________________________

Vichet_Restuarant.kitchens.addChef(tim_chef);
Vichet_Restuarant.kitchens.addOrders(order1)
Vichet_Restuarant.kitchens.addOrders(order2);
Vichet_Restuarant.kitchens.addOrders(order3);

//____________________________Calenda__________________________
let dateCooking1 = new DateTime(12, 23, 10, 6, 2022)
let dateCooking2 = new DateTime(12, 50, 10, 6, 2022)

let cookingappointment1 = new CookingAppointment(EventCategory.COOKER_APPOINTEMENT, dateCooking1, dateCooking2)
Vichet_Restuarant.Calendars.addEvent(cookingappointment1);
console.log("Time to cooking : ", Vichet_Restuarant.Calendars);
