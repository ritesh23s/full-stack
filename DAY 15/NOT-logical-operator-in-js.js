// NOT (!) Logical Operator 
// = NOT (!) is a logical operator that reverses the meaning of a condition.
// It turns true to false and false to true.
// = its return always reverse value of any expression and its work on single expression
// syntax = !exp1

// Example = 

// 1).
// !true
// return = false
// !false
// return = true

// 2).
// !(2>3)
// output = true
// !(5<8)
// output = false

// 3).
let myMarks = 54;
if (!(myMarks < 33)) {
    console.log("PASS");
} else {
    console.log("FAIL");
}

// 4).
let age = 18;
if (!(age < 18)) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}

// 5)
let num = -12;
if (!(num < 0)) {
    console.log("You enter positive number which is ", num);
} else {
    console.log("You enter negative number which is", num);
}

// // 6).Validate a Bank Account Balance for Withdrawal
// condition
// We have a balance variable, and we need to validate if the balance is sufficient for a withdrawal. If the balance is insufficient, it should display a message.
let balance = 1000;
let balanceWithdrawal = 100;

if (!(balance >= balanceWithdrawal)) {
    console.log("Your balance is insufficient");
} else {
    console.log("Withdrawal successful.");
}

// an another example 
let bal = 1000;
let wa = 2000;
if (!(wa > bal)) {
    console.log(`Withdrawal ${wa}`);
} else {
    console.log("Paisa nhi hai");
}

// We can also combine multiple logical operator like this = 
let marrkss = 75;
if ((marrkss > 33 && marrkss <= 80) || !false) {
    console.log("pass");
} else ("fail");

