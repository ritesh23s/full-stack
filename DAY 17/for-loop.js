console.log("***** for loop *****")
// **************************** Loops ****************************
// *************** 1). For loop ***************
// For loop = For loop is used to repeat a block of code a fixed number of times.
// Syntax = 
// for(initialisation; condition; updation) {
//     // Do something
// }

// Where,

// 1) initialisation → 
//    - It is the starting point of the loop.
//    - Here we declare and initialise the loop variable (counter).
//    - Runs only one time at the beginning.
//    Example: let i = 1;

// 2) condition (Ending condition)→ 
//    - It decides how long the loop will run.
//    - The loop body will execute as long as the condition is true.
//    - When condition becomes false, the loop stops.
//    Example: i <= 10;

// 3) updation → 
//    - It updates the loop variable after each iteration.
//    - Usually increment (i++) or decrement (i--).
//    Example: i++;

// 4) body (Do something) → 
//    - The block of code which is executed repeatedly.
//    Example: console.log(i);


// Example = 
// 1). Print 1 to 10 using for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// For Loop Flow Diagram
//    ┌─────────────────────────┐
//    │   Initialisation        │   ← (e.g. let i = 1)
//    └───────────┬─────────────┘
//                │
//                ▼
//       ┌───────────────┐
//       │   Condition?  │   ← (e.g. i <= 10)
//       └───────┬───────┘
//               │ if condition is true
//               ▼
//       ┌────────────────┐
//       │   Loop Body    │   ← (e.g. console.log(i))
//       └───────┬────────┘
//               │ execute the loop body
//               ▼
//       ┌────────────────┐
//       │   Updation     │   ← (e.g. i++)
//       └───────┬────────┘
//               │
//               └───────────────→ Back to Condition check
//               │
//               |
//               ▼
//             (No)
//         ┌─────────────┐
//         │   Exit      │
//         └─────────────┘
//       → If the condition is false, the loop exits



console.log("Print table of 2 using for loop");
// 2). Print table of 2 using for loop 
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

console.log("Same thing write like this");
// Same thing write like this 
for (let i = 1; i <= 10; i++) {
    console.log(`2 x ${i} = ${2 * i}`);
}


console.log("print odd numbers between 1 to 20");
// 3). print odd numbers between 1 to 20 
for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}

// 4). take input for write table of any number and print the table.
let num = Number(prompt("Please enter your number to print its table:"))
console.log(`Table of ${num}`);
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

// We can also run loops in backword directions like this
console.log("We can also runs loops in backword direction");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
