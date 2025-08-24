// Question: 01). Create a number variable num with some value.
// now print "good" if the number is divisible by 10 and print "bad" if it is not.
// Answer = 

let num = 20;
if (num % 10 === 0) {
    console.log("Good ! This number is divisible by 10.");
} else {
    console.log("Bad ! This number is not divisible by 10");
}

// Question: 02). Take user's name and input using prompts.
// then return back the following statement to the user an alert (by substituting their name & age ) Name is Age year old

let name = prompt("Enter Your Name:");
let age = prompt("Enter Your Age:");

let displayMessage = `${name} is ${age} year old`

alert(displayMessage);


// Question: 03). Write a switch statement to print the months in a quarter.
// Months in Quarter 1: January, February, March
// Months in Quarter 2: April, May, June
// Months in Quarter 3: July, August, September
// Months in Quarter 4: October, Novmber, December
// Answer = 

let quarter = 3;
switch (quarter) {
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, Novmber, December");
        break;
    default:
        console.log("You have entered wrong 'Quarter'")
        break;
}

// Question: 04). A string is a "golden string" if it start with the character 'A' or 'a' and has a total length greater than 5. 
// Answer = 

let str = "adventure";

str = str.toLowerCase()

if (str[0] === 'a' && str.length > 5) {
    console.log("Golden String");
} else{
    console.log("Not a Golden String");
}

// Question: 05). Write a program to find the largest of 3 numbers.
// Answer = 

let a = 1;
let b = 3;
let c = 4;

if (a > b && a > c) {
    console.log(`${a} is largest value in the given numbers`);
} else if (b > a && b > c){
    console.log(`${b} is largest value in the given numbers`);
} else{
    console.log(`${c} is largest value in the given numbers`);
}


// Question: 05). Write a program to check if 2 numbers have the same last digit.
// Answer = 

let x = 2022012;
let y = 232

let lastDigitX = (x) %10;
let lastDigitY = (y) %10;

if (lastDigitX === lastDigitY) {
    console.log("Both number last digit is same!");
} else {
    console.log("Last digit is not same!");
}