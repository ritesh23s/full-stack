// 1). AND (&&) operator
// = Its Return true if both condition are true.
// = We used AND operator to combine two expression
// syntax - exp1 && exp2

// Logical AND Chart = 
// Value1 | Value2 | Ans(Output)
// T      | T      | T  
// T      | F      | F
// F      | T      | F
// F      | F      | F


// example = 
// 1).
// true&&true
// Always return = true
// true&&false
// Always return = false
// false&&true
// Always return = false
// false&&false
// Always return = false

// 2).
// 5>3 && 3>1
// Output - true
// 5==5 && 2<3
// Output - true
// 3!=2 && 3!=3
// Output - false
// 8<7 && 7==7
// Output - false
// 6>7 && 7<6
// Output - false

// Question: 3).
let mymarks = 45;
if (mymarks >= 33 && mymarks >= 80) {
    console.log("Pass");
    console.log("Grade A+");
}
else { //for checking both value are true or not
    console.log("code don't executed")
}

// Question: 4).Login Validation
let correctUsername = "admin";
let correctPassword = "12345";

let enterUsername = "admin";
let enterPassword = "12345";

if (enterUsername === correctUsername && enterPassword === correctPassword) {
    console.log("Login successfull !");
} else {
    console.log("Invalid username or password.");
}

// Question: 5).
let requiredPercentage = 80;
let requiredFamilyIncom = 200000;
let currentBacklock = "no"

let studentPercentage = 85;
let studentFamilyIncome = 200000;
if (studentPercentage >= requiredPercentage && studentFamilyIncome < requiredFamilyIncom && currentBacklock === "no") {
    console.log("You are eligible for scholarship");

} else {
    console.log("You are not eligible for scholarship");
}

// Question: 6). Employee Work Hours Tracker for their bonuses
let employeeWorkTime = 8;
let employeeProductivity = 80;
let employeeattendence = 26;

let requiredWorkTime = 8;
let requiredProductivity = 80;
let requiredattendence = 26;

if (employeeWorkTime >= requiredWorkTime && employeeProductivity >= requiredProductivity && employeeattendence >= requiredattendence) {
    console.log("Congratulation you got 75% bonus of your salary");
} else {
    console.log("You are not eligible");
}

// Question: 7).Online Shopping Checkout Eligibility
// The user will only be allowed to proceed to checkout when:

// There are at least 3 items in the cart.
// The total value is greater than ₹1000.
// The delivery address is valid.

let requiredItem = 3;
let requiredTotalValue = 1000;
let requiredDeliveryAddress = "valid";

let userItem = 3;
let userTotalValue = 100;
let userDeliveryAddress = "valid"

if (userItem >= requiredItem && userTotalValue >= requiredTotalValue && requiredDeliveryAddress === userDeliveryAddress) {
    console.log("Process to payment.");
} else {
    console.log("You can't buy items, please add more items for buy.");
}


// Question: 8).Write a program that determines whether an employee is eligible for a shift assignment based on the following conditions:

// 1).The employee must be available for work.

// 2).The employee must have worked the required minimum number of work hours.

// 3).The employee must have manager approval.

// 4).The employee's shift time should fall between the office's designated shift time (9 AM to 5 PM in 24-hour format).

let Availability = true;
let minWorkHours = 39; //in a week
let managerApproval = true;
let startShiftTime = 9; //9AM 
let endShiftTime = 17; //5PM 24hour format

let employeeAvailability = true;
let employeeMinWorkHours = 38;
let employeeManagerApproval = true;
let employeeShiftTime = 8; // 24Hours format

if (
    employeeAvailability === true && employeeMinWorkHours >= minWorkHours && employeeManagerApproval === true && employeeShiftTime >= startShiftTime && employeeShiftTime <= endShiftTime
) {
    console.log("Employee assigned to shift");
} else {
    if (employeeAvailability === false) {
        console.log("Employee not Available");
    } else if (employeeMinWorkHours < minWorkHours) {
        console.log(`You need to complete ${minWorkHours - employeeMinWorkHours} hourse more.!`);
    } else if (employeeManagerApproval === false) {
        console.log("Manager approval pending");
    } else if (employeeShiftTime < startShiftTime) {
        console.log("Please come office at your shift time");
    } else if (employeeShiftTime > endShiftTime) {
        console.log("Shift time is over.!");
    } else {
        console.log("Please follow the office guidelines to avoid any issues.")
    }
}