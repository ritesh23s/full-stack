// ***************** String Method *****************
// ************** String Methods With Arguments **************

// 3). Replace = Searches a value in the string and returns a new string with the value replaced
// = in the replace method we passed two parameter (argument)
// format = 
// stringName.replace("findvalue", "replacevalue");

// Example = 
// 1).
let myMessage = "WeLoveCoding";
let myNewMessage = myMessage.replace("Love","do");
console.log(myNewMessage);
// Here with the help of .replace method we replace "Love" to "do"

// 2).
let myName = "Shubham Kumar";
let nameWithTitle = myName.replace("Kumar","Yadav");
console.log(nameWithTitle); // output = Shubham Yadav

// console.log(myName);  // output = Shubham Kumar
// Here we see that our original string is not changed completely we get always a new string