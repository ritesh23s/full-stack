 // else if Statement
// = The else-if statement allows you to check multiple conditions in a sequence and execute code for the first true condition.
// syntex  = 

// if (condition1) {
//     //DO SOMETHING
// }
// else if (condition2) {
//     //DO SOMETHING
// }
// else if (condition3) {
//     //DO SOMETHING
// }

// Now example = 

// 1).
let age2 = 14;
if (age2>=18) {
    console.log("You can vote now!");
}else if (age2<18) {
    console.log("you are not able to vote");
}else if (age2 === 14) {
    console.log("You have to need", 18-14, "years for able to vote");
}

//That means "else if" checks each condition one by one from top to bottom. When it finds the first true condition, it runs that code and skips the rest - even if other conditions are also true. (no matter another rest of condition is true or false)

// note - prerfer used "else if" always with if condition, you can't write directly "else if" 

// 2).
let marks = 45;
if (marks >= 80) {
    console.log("A+ grade");
}else if(marks >= 60) {
    console.log("A grade");
}else if (marks >= 33) {
    console.log("B grade");
}else if (marks < 33){
    console.log("Fail");
}

// 3).
let month = "April";
if (month === "january") {
    console.log("Winter season");
}else if (month === "April") {
    console.log("Summer season");
}
