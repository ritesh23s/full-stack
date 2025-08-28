// Question 05 = For the start state of an array, change it to final from using splice.
// start = ["january", "july", "march", "august"];
// final = ["july", "june", "march", "august"];

let startStateOfMonths = ["january", "july", "march", "august"];
let performOperation = startStateOfMonths.splice(0, 2, "july", "june");
console.log(startStateOfMonths); // this is our final state.

// if we print the "performOperation" then we get output = deleted elements
// console.log(performOperation);

// Question 06 = Returns the index of the "javascript" from the giver array, if it was reversed. array = ["c", "c++" ,"html", "javascript", "python", "java", "c#", "sql"];
let lang = ["c", "c++" ,"html", "javascript", "python", "java", "c#", "sql"];
console.log(lang.reverse());
// now we find index of "javascript"
console.log(lang.indexOf("javascript")); // returns output = 4
