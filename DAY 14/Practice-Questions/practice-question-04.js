// Questions

// Q1. Declare your name as a string and  print its length in js 
// Answer =

let myName = "Shubham"+" "+"Yadav";
myName;
'Shubham Yadav' //output
myName.length;
13 //output


// Q2. Declare your first name as a string and print its first character.
// Answer = 

let name = "Shubham";
name;
'Shubham' // output
name[0]; // first method to print first character
'S' // output

name[name.length-7] //second method to print first character
'S' // output

// Q3. Declare your first name as a string and print its last character.
// Answer = 

let firstName = "Shubham";
firstName;
'Shubham'  // output
firstName[6]; // first method to print first character
'm' // output

firstName[firstName.length-1]; //second method to print first character
'm' // output

// Here Q1 to Q3 answer in a program 

// let firstName = "Shubham";
// let lastName = "Yadav";
// let fullName = firstName+" "+lastName;
// fullName;
// 'Shubham Yadav'

// Question-01.
// fullName.length;
// 13

// Question-02
// firstName[0];
// 'S'

// Question-03
// firstName[6];
// 'm'

// Q4. What is the output of following code: "apnacollege"+123
// Answer = 

"apnacollege"+123;
'apnacollege123' // Output

// Q5. What are lengths of an "empty string" & a string with a single space?
// Answeer = 

// length of an "empty string = "" " 
let empty = "";
empty.length; // calculate length
0 // output


// lenght of a "string with a single space = "." "
let space = " ";
space.length; // calculate length
1 // output