// else statement
// = The "else" statement is used to specify a block of code that runs when the all if condition is false.

// = "else" not check any condition its directly exe cute the code which is written inside the else statement.

// syntex = 

// if (condition1){
//     //DO SOMETHING
// }else if (condition2) {
//     //DO SOMETHING
// }

// else{
//     //DO SOMETHING
// }

// Example = 
// 1).
let age3 = 16;
if (age3 >= 18) {
    console.log("You can vote");
}
else {
    console.log("You can't vote");
}

// 2).
let myColor = "blue";
if (myColor === "red") {
    console.log("Stop.! Traffic light is Red");
} else if (myColor === "yellow") {
    console.log("Shlow donw! Traffic light is Yellow");
} else if (myColor === "green") {
    console.log("You can go now.! Traffic light is Green");
} else {
    console.log("Traffic failed");
}