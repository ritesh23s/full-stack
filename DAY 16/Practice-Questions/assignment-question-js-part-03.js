// Question - 01 = Write a javascript program to get the first n elemenys of an array. (n can be any positive number).
// for example = for array [7,9,0,-2] and n = 3
// print [7,9,0]

let arr = [7,9,0,-2];
let n = 3;
let ansq01 = arr.slice(0, n);
console.log(ansq01);

// Question - 02 = Write a javascript program to get the last n elemenys of an array. (n can be any positive number).
// for example = for array [7,9,0,-2] and n = 3
// print [9,0,-2]

let arr1 = [7,9,0,-2];
let n1 = 3;
let ansq02 = arr1.slice(length - n );
console.log(ansq02);

// Question - 03 = Write a JavaScript program to check whether a string is blank or not.

let str = prompt ("Q03. please enter your string");
if (str.length === 0) {
    console.log("an empty string")
} else {
    console.log("not an empty string");
}

// Question - 04 = Write a JavaScript program to test whether the character at the given (character) index is lower case

// let str4 = prompt("Q04. please enter your characters:");
// if (str4 === str4.toLowerCase()) {
//     console.log("lower case character");
// } else{
//     console.log("not in lower case");
// }


let str4 = prompt("Q04. Enter your string:");
let index = Number(prompt("Q04. Enter the index you want to check:"));

let char = str4.charAt(index); // character at given index

if (char === char.toLowerCase() && char !== char.toUpperCase()) {
    console.log("Character at index " + index + " is lowercase");
} else {
    console.log("Character at index " + index + " is NOT lowercase");
}



// Question - 05 = Write a JavaScript program to strip leading and trailing spaces from a string.
let str5 = prompt("Q05. Please enter your password:");
console.log(`your password is: ${str5.trim()}`);

// Question - 06 = Write a JavaScript program to check if an element exists in an array or not.
let enterElement = Number(prompt("Q06. please enter your number to check element exist in array or not"));
let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let enterElement = 1;
if (arr6.indexOf(enterElement) != -1) {
    console.log("element exist in this array");
} else {
    console.log("element don't exist in array");
}
