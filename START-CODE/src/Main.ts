//REQUIREMENT

import { Room } from "./rooms/Room";
import { Table } from "./rooms/Table";
import { HumanManager } from "./human/Humanmanager";
import { Customer } from "./human/customer/Customer";
import { Chef } from "./human/staff/Chef";
import { Gender } from "./human/Person";
import { Staff, StaffCategory } from "./human/staff/Staff";
import { Restaurant } from "./Restaurant";
import { Waiter } from "./human/staff/waiter";
import { TableStatus } from "./rooms/TableStatus";
import { RoomsManager } from "./rooms/RoomsManager";
import { Order } from "./Order/Order";
import { MenuItem } from "./menu/Menu";
import { TypeOfFoods } from "./menu/menuCategory";

//_________________restaurant_________________________________
const Vichet_Restuarant = new Restaurant("Vichet Romdul", "KPT");
//_____________________________Humanmanager_______________________________________
// ___________________chef______________________________________
const tim_chef = new Chef(StaffCategory.CHEF, "Tim", 18, Gender.MALE);
tim_chef.setSalary(3000);

//__________________Waiter______________________________________
const nga_waiter = new Waiter(StaffCategory.WAITER, "Nga", 22, Gender.MALE);
const phim_waiter = new Waiter(StaffCategory.WAITER, "Phim", 24, Gender.MALE);
const shaut_waiter = new Waiter(StaffCategory.WAITER, "Shaut", 21, Gender.MALE);
nga_waiter.setSalary(4200);


//____________ add staff to restuarant _______________________
Vichet_Restuarant.hr.setStaff(tim_chef);
Vichet_Restuarant.hr.setStaff(nga_waiter);
Vichet_Restuarant.hr.setStaff(phim_waiter);
Vichet_Restuarant.hr.setStaff(shaut_waiter);
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
let rice = new MenuItem(TypeOfFoods.PROTEIEN, "Rice", 200);
let roast = new MenuItem(TypeOfFoods.MEAT, "Roast kitchen", 2500);
let coca = new MenuItem(TypeOfFoods.SOFTDRINK, "COCA_COLA", 3000);
let apple = new MenuItem(TypeOfFoods.FRUITE_VEGETABLE, "APPLE", 2000)
let wine = new MenuItem(TypeOfFoods.SOFTDRINK, "Wine", 50000)
//_______________________________Order_____________________________
let order1 = new Order( 1, table1);
order1.addMenu(rice);
order1.addMenu(roast);
order1.addMenu(apple);
let order2 = new Order(2, table4);
order2.addMenu(wine);
order2.addMenu(roast);

let order3 = new Order(3, table2);
order3.addMenu(coca);
order3.addMenu(rice);
order3.addMenu(roast);
nga_waiter.addOrder(order3);
shaut_waiter.addOrder(order2);
phim_waiter.addOrder(order1)
//________________________________add order______________________________________
Vichet_Restuarant.orders.addOrder(order1)
Vichet_Restuarant.orders.addOrder(order3)
Vichet_Restuarant.orders.addOrder(order2)
//____________________________
tim_chef.addMenuToChef(order1);
tim_chef.addMenuToChef(order2)
tim_chef.addMenuToChef(order3)

// console.log(tim_chef.getMenuForChef());
// console.log(tim_chef.getDone());

console.log(Vichet_Restuarant);


