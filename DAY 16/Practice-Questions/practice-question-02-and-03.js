// Question = For the String -> let message = "ILovejavaScript", pradict the output for following:

// 1). message.slice(4,9);
// Output = ejava
// 2). message.indexOf("Sc");
// Output = 9
// 3). message.replace("I", "We");
// Output = WeLovejavaScript

// Let verify Output = 

let message = "ILovejavaScript";
sliceMessage = message.slice(4,9);
console.log(sliceMessage);
console.log(message.indexOf("Sc"));
console.log(message.replace("I", "We"));

// Question 03). = Saparate the "javascript" part in above string & replace "S" with "t" in it
// Answer = 
separatePart = message.slice(5, 15);
console.log(separatePart);
console.log(separatePart.replace("S", "t"));