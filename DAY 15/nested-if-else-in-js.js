// Nested if-else statement
// = A nested "if-else" is when you place one if-else statement inside another, to check multiple conditions in a structured way.
// = Nesting is writing if-else inside if-else statements. it can have many levels.
// syntax =

// if (condition1) {

//     // DO SOMETHING

//     if (conditionA){

//         //DO SOMETHING
//     }else if (conditionB){

//         //DO SOMETHING
//     }
//     else {

//         //DO SOMETHING
//     }
// }
// else {

//     //DO SOMETHING

// }

// example = 

// 1). A simple grading system
let marks = 81;
if (marks >= 33) {
    console.log("PASS");
    if (marks >= 80) {
        console.log("Outstanding Grade")
    } else {
        console.log("Grade A");
    }
} else {
    console.log("Better luck next time!");
}


// 2). Shoping system criteria of an item.
let userBalance = 200;
let itemPrice = 200;
if (userBalance >= 150) {
    if (userBalance >= itemPrice) {
        console.log("Yo can purchase this item");
    } else {
        console.log("You need more balance for buy it.");
    }
} else {
    console.log("Insufficient balance");
}


// 3). A simple ticket booking payment system.
let userStatus = "loggedIn";
let selectedDestination = "Paris";

if (userStatus === "loggedIn") {
    if (selectedDestination !== "") {
        console.log("Proceed to payment.");
    } else {
        console.log("Please select a destination.");
    }
} else {
    console.log("Please log in to continue.");
}


// 4). A simple banking transaction allow system.  
let loginStatus = "loggedin";
let accountStatus = "active";

if (loginStatus === "loggedin") {
    if (accountStatus === "active") {
        console.log("Now you can do transaction");
    } else {
        console.log("Please update your KYC");
    }
} else {
    console.log("Please logint for transaction");
}


// 5). Grading System of Students marks.

let assignmentStatus = "done";
let passMarks = 33;
let studentMarks = 77;

if (assignmentStatus === "done") {
    if (studentMarks >= passMarks) {
        if (studentMarks === 100) {
            console.log("Outstanding Grade A++");
        } else if (studentMarks >= 90) {
            console.log("Grade A+");
        } else if (studentMarks >= 60) {
            console.log("Grade A");
        } else if (studentMarks >= 50) {
            console.log("Grade B");
        } else if (studentMarks >= 40) {
            console.log("Grade C")
        } else if (studentMarks >= 33) {
            console.log("Grade D"); 
        }
    } else {
        console.log("You failed. Try again next time!");
    }
} else {
    console.log("Complete your assignment to see the result.");
}