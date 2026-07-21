// Task1 - Employee Profile
let employeeName = "Abhiram";
let employeeID = "EMP1001";
let department = "Full Stack Development";
let salary = 20000;
let Ispermanent = true;

console.log("Name :", employeeName);
console.log("Employeeid :", employeeID);
console.log("Department :", department);
console.log("Salary :", salary);
console.log("ISpermanent :", Ispermanent);


// Task2 - Student Details
let student = {
    studentname: "Abhiram",
    age: 23,
    course: "IT",
    college: "St.Peter's Engineering college",
    passed: true
};

console.log("Student Name :", student.studentname);
console.log("Course :", student.course);
console.log("Passed Status :", student.passed);


//Task3 - Shopping Cart
let products = ["Milk", "Rice", "Oil", "Sugar", "Soap"];

console.log(products[0]);
console.log(products[2]);
console.log(products[4]);
console.log(products.length);


//Task4 - Company Employee Database
let details = {
    employeename: "Abhiram",
    designation: "Full Stack Developer",
    salary: "20000",
    skills:["HTML", "CSS", "JAVASCRIPT", "PYTHON"]
}

console.log("Employee Name :", details.employeename);
console.log("Designation :", details.designation);
console.log("Second skill :", details.skills[1]);


//Task5 - Salary Calculation
let basicsalary = 25000;
let bonus = 5000;
totalsalary = basicsalary + bonus;

console.log("Total Salary :", totalsalary);


//Task6 - GST Calculator
let productprice = 4500;
let gst = 18 ;
let gstprice = (productprice * gst) / 100;
let totalprice = productprice + gstprice;

console.log("GST Amount :", gstprice);
console.log("Final Amount :", totalprice);


//Task7 - Even or Odd
let number = 25;

console.log(number % 2 === 0 ? "Even Number" : "Odd Number");


//Task8 - Login System
let username = "Abhiram";
let password = "12345";

console.log(
    username === "Abhiram" && password === "12345"
    ? "Login Success" :
    "Invalid Credentials"
);


//Task9 - Voting Eligibility
let age = 22;

console.log(
    age >= 18
    ? "Eligibile to vote" :
    "Not Eligible"
);


//Task10 - EMI Eligibility
let salaryy = 40000;
let experience = 3;

console.log(
    salaryy > 30000 && experience >= 2
    ? "Eligible" : "Not Eligible"
);


//Task11 - Product Discount
let price = 5000;
let discount = 10;

let discountamount = price * (discount/100);
let finalprice = price - discountamount

console.log("Discount Amount :", discountamount);
console.log("Final Amount :", finalprice);


//Task12 - User Registration
let yourname = "Abhiram";
let email = "abhi@email.com";
let phone = 9876543210;
let city = "MNCL";

console.log("-----USER DETAILS-----");
console.log("Name :", yourname);
console.log("Email :", email);
console.log("Phone :", phone);
console.log("City :", city);


//Task 13 - Social Media Profile
let instaprofile = {
    userName: "Abhiram",
    followers: 500,
    following: 500,
    posts: 10,
    verified: true
}

console.log("Username :", instaprofile.userName);
console.log("Followers :", instaprofile.followers);
console.log("Verified Status :", instaprofile.verified);


//Task 14 - Restaurant Menu
let menu = ["Idli", "Dosa", "Poori", "Meals", "Parotta"]

console.log(menu[1]);
console.log(menu[3]);
console.log(menu[4]);


//Task 15 - Banking System
let accountbalance = 25000;
withdraw = 8000;
let remainingbalance = accountbalance - withdraw

console.log("Remaining Balance :",remainingbalance);


//Task 16 - Mobile Store
let mobileprice = 25000;
let exchange = 5000;
let coupon = 2000;
let finalamount = mobileprice - exchange - coupon;

console.log("Final Amount :",finalamount);


//Task 17 - Employee Promotion
let employeeexperience = 5;
let performance = true;

console.log(
    employeeexperience >= 5 && performance == true
    ? "Promotion Approved" : "Promotion pending"
);


//Task 18 - Movie Ticket
let ticketprice = 180;
let people = 5;
let totalamount = ticketprice * people
console.log("Total Amount :", totalamount);


//Task 19 - Weather App
let temperature = 38;
console.log(
    temperature > 35 ? "Hot Day" : "Normal Weather"
);


//Task 20 - Mini HR Management (Real-Time)
let employee = {
    empcode: "EMP1001",
    empname: "Abhiram",
    department: "FullStack",
    designation: "Full Stack Developer",
    empsalary: 25000,
    skills: ["HTML","CSS","JavaScript","Python"],
    permanent: true
   }

console.log("Employee Code :", employee.empcode);
console.log("Employee Name :", employee.empname);
console.log("Department :", employee.department);
console.log("Salary :", employee.empsalary);
console.log("Last Skill :", employee.skills[3]);
console.log("Permanent Status :", employee.permanent);











