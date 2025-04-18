// If Stetement
// = IF is a predefine keyword in JavaScript.
// = If statement is used to run a block of code only when a "Specific Condition" is true.
// 1). If something is true, then do this.
// 2). Otherwise , do nothing.
// syntex =
// some code before if

// if (some condition){

    //DO SOMETHING
// }

// some code after if

// Example = 

// 1).
console.log("before my if statement");
let age = 23;
if (age>=18) {
    console.log("you can voat");
    console.log("You can drive")
}
console.log("after my if statement");

// 2).
let a = 18;
let b = 29;
if (a<=b) {
    console.log("Right now, you need", b - a, "more to reach b.");  
}

// here we can also create a variables inside the if statement
let x = 91;
let y = 65;
if (x>=y) {
    diffrent = x-y;
    console.log("Right now you need to", diffrent, "more to reach x.");
}


// We can anso write another if statement inside the if statement like this = 

let age1 = 23;
if (age1>=18) {
    console.log("you can voat");
    console.log("You can drive")

    if (age1<18);
    console.log("You can't vote and drive.");

    if (age1>20){
        console.log("You are in your 20s.");
    }
}

// Note: If statement work when, given "Specific condition" is true 