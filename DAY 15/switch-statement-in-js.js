// Switch Statement In javaScript
// = We used "switch" statement when we have some fixed values that we need to compare to.
// = it's same like as if-else statement
// = A switch statement in JavaScript is used to run different code based on different values of a variable or expression. It’s an alternative to using many if...else statements.

// syntax = 

// switch (...) {
//     case "...": 
//         console.log(...);
//         break;
//     default :
//         console.log("...");
//         break;
// }

// Here "case" give true output like if statement and default give false output like else statement

// Example 
// Question 1). Create traffic light system using switch statement

let color = "yellow";

switch (color) {
    case "red":
        console.log("Stop!, traffic ligh is Red.");
        break;

    case "yellow":
        console.log("Go Shlow!, traffic light is Yellow.");
        break;

    case "green":
        console.log("Go!, you can go traffic light is Green");
        break;

    default:
        console.log("traffic light is brocken..!!");
        break;
}

// Note - in the switch statement we can execute one case in one time. and then break the bprogram.



// Question 2). Create a simple calculator using switch statement. 

let num1 = 1;
let num2 = 545;

operation = '/';

switch (operation) {
    case '+':
        console.log(result = num1 + num2);
        break;
    case '-':
        console.log(result = num1 - num2);
        break;
    case '*':
        console.log(result = num1 * num2);
        break;
    case '/':
        if (num2 !== 0) {
            console.log(result = num1 / num2);
        } else {
            console.log("can't divide by zero");
        }
        break;
    default:
        console.log("enter your correct operation");
        break;
}


// Question 3). Grade System
// Input marks or grade letter (A, B, C, etc.) and output performance feedback.

let grade = 'A';
grade = grade.toLowerCase();

switch (grade) {
    case 'a':
        console.log("You get 80 - 90 marks");
        break;
    case 'b':
        console.log("You get 60 - 80 marks");
        break;
    case 'c':
        console.log("You get 40 - 60 marks");
        break;
    case 'd':
        console.log("You get 33 - 40 marks");
        break;
    default:
        console.log("Fail ! Try next time.");
        break;
}


// Question 4). Predict week day using switch statement.  
let enterNumber = 8;

switch (enterNumber) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Please enter a valid number (1-7)");
        break;
}
