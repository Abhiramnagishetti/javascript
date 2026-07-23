//Task 1: Employee Login System
let username = prompt("Enter your name :");
let password = prompt("Enter your password :");

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}


//Task 2: E-Commerce Discount
let amount = 6500;
let discount = 0;
if(amount >= 5000){
    discount = (amount * 20) / 100
    console.log("20% Discount Applied");
}else{
    console.log("No Discount");
}

let finalamount = amount - discount

console.log("Discount :", discount);
console.log("Final amount :", finalamount);


//Task 3: ATM Withdrawal
let balance = 10000;
let withdraw = 4000;

if(withdraw <= balance){
    balance -= withdraw;
    console.log("Transaction Success");
    console.log("Balance:", balance);
}else{
    console.log("Insufficient Balance");
}


//Task 4: Student Grade System
let marks = 85;

if (marks >= 90){
    console.log("Grade A");
}
else if (marks >=80){
    console.log("Grade B");
}
else if (marks >= 70){
    console.log("Grade C");
}
else {
    console.log("Fail");
}


//Task 5: Traffic Signal
let signal = "yellow";

switch(signal){
    case "red":
    console.log("STOP");
    break;

    case "yellow":
    console.log("START");
    break;

    case "green":
    console.log("GO");
    break;

    default:
    console.log("Invalid");
    
}


//Task 6: Online Shopping Delivery Charge
let order = 800;
let deliverycharge = 0;

if (order >= 1000){
    deliverycharge = 0;
}
else{
    deliverycharge = 80;
}
totalamount = order + deliverycharge

console.log("Order amount :", order);
console.log("Delivery charge :", deliverycharge);
console.log("Total amount :", totalamount);


//Task 7: User Age Verification
let age = prompt("Enter your age");

if (age >= 18){
    console.log("Eligible to vote");
}
else{
    console.log("Not Eligible");
}


//Task 8: Find Largest Number
let a = 50;
let b = 70;
let c = 30;
let largestnumber = a;

if (a > b && a > c){
    largestnumber = a;
}
else if (b > a && b > c){
    largestnumber = b;
}
else{
    largestnumber = c;
}
console.log("Largest number :",largestnumber);


//Task 9: Mobile Password
let pin = prompt("Enter your pin")

if (pin.length === 4){
    console.log("Login success");
}
else{
    console.log("Invalid PIN");
    
}


//Task 10: Product Stock
let stock = 0;

if (stock === 0){
    console.log("Out of stock");
}
else{
    console.log("Available");
}


//Task 11: Employee Salary Bonus
let salary = 30000;

if (salary >= 50000){
    console.log("Bonus : 10000");
}
else if(salary >= 30000){
    console.log("Bonus : 5000");
}
else{
    console.log("Bonus : 2000");   
}


//Task 12: Electricity Bill
let units = 170;
let bill ;

if (units <=100){
    bill = units * 2
}
else if(units <=200){
    bill = units * 4
}
else{
    bill = units * 6
}
console.log("Total bill :", bill);


//Task 13: Movie Ticket Booking
let age = 17;

if(age < 5){
    console.log("Free");
}
else if (age > 5 && age < 18){
    console.log("Ticket price : 100");
}
else if (age > 18){
    console.log("Ticket price : 200");
}


//Task 14: Hospital Token System
let patient = "Emergency";

switch (patient){
    case "Emergency":
    console.log("Token 1");
    break;

    case "Senior Citixen":
    console.log("Priority");
    break;

    case "Normal":
    console.log("Regular Queue");
    break;

    default:
    console.log("Invalid");
}


//Task 15: Company Attendance
let attendance = "Present";

switch (attendance){
    case "Present":
    console.log("Working");
    break;

    case "Leave":
    console.log("Leave Approved");
    break;

    case "Absent":
    console.log("Salary deducted");
    break;

    default:
    console.log("Invalid");   
}


//Task 16: Grocery Cart Total
let rice=500;
let sugar=300;
let oil=250;

let total=rice+sugar+oil;

console.log(total);

if (total > 1000){
    total = total - (total * 10 / 100)
}
console.log("Total amount :", total);


//Task 17: Array Task
let products = ["Laptop", "Mouse", "Keyboard", "Monitor"]

for (let i = 0; i < products.length; i++){
    console.log(products[i]);
}


//Task 18: Employee Database
let employee={
    name:"Rahul",
    role:"Developer",
    salary:50000
    }
for (let i in employee){
    console.log(employee[i]);
}


//Task 19: Type Casting
let num = Number("100");
let bool = Boolean("true");
let str = String(200);

console.log(num);
console.log(bool);
console.log(str);


//Task 20: Banking Menu
let choice = 3;

switch (choice) {
    case 1:
    console.log("Deposit");
    break;

    case 2:
    console.log("Withdraw");
    break;

    case 3:
    console.log("Balance");
    break;

    case 4:
    console.log("Exit");
    break;

    default:
    console.log("Invalid Choice");
}


//Mini Project (Interview Level) 
console.log("----Employee Management System----");
let employeeData = [
    {
        empname : "Abhi",
        role: "Developer",
        salary: 30000,
        attendance: "present"
    },
    {
        empname: "Ram",
        role: "Tester",
        salary: 40000,
        attendance: "Leave"
    }
];
let choices = prompt("Enter your choice:");
switch (choices) {
    case "1":
        console.log("Add Employee");
        break;
    case "2":
        console.log("Show Employee Details");
        for (let employee of employeeData) {
            console.log(`Name: ${employee.empname}`);
            console.log(`Role: ${employee.role}`);
            console.log(`Salary: ${employee.salary}`);
        }
        break;
    case "3":
        console.log("Calculate Bonus");
        for (let employee of employeeData) {
            let bonus = 0;
            if (employee.salary > 50000) {
                bonus = 10000;
            } else if (employee.salary > 30000) {
                bonus = 5000;
            } else {
                bonus = 2000;
            }
            console.log(`Bonus for ${employee.empname}: ${bonus}`);
        }
        break;
    case "4":
        console.log("Check Attendance");
        for (let employee of employeeData) {
            if (employee.attendance === "present") {
                console.log(`${employee.empname} is working`);
            }
            else {
                console.log(`${employee.empname} is on leave`);
            }
        }
        break;
    case "5":
        console.log("Print Salary");
        for (let employee of employeeData) {
            console.log(`${employee.empname} salary is ${employee.salary}`);
        }
        break;
    case "6":
        console.log("Exit");
        break;
    default:
        console.log("Invalid Choice");
}




