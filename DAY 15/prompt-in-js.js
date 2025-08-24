// Prompt in javaScript
// = Prompt displays a dialog box that asks user for some input.

// syntax - prompt("prompt message for take user input");
prompt ("Enter your roll no:")

let firstName = prompt ("Enter your first name:");
let lastName = prompt ("Enter your last name:");
let rollNumber = prompt ("Enter your Roll No.");

let fullName = firstName + " " + lastName
console.log(`Welcome! ${fullName} your roll no. is ${rollNumber}:`);

// we can also print this message (console.log("Welcome!"+" "+fullName);) in our alert message like this =

welcomeMessage = `Welcome! ${fullName} your roll no. is ${rollNumber}:`
alert (welcomeMessage);