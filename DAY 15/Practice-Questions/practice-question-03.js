// Question = A "good string" is a string that starts with the latter 'a' & has a length > 3. write a program to find it string os good or not.

// Answer

let str = "Anurag";

str = str.toLowerCase();

if (str.length > 3 && str[0] === 'a'){
    console.log("Good String");
}else{
    console.log("Not a good String");
}