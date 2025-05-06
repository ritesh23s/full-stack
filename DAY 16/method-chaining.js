// ***************** String Method *****************

// Method Chaining = 
// Using one method after another. order of execution will be left to right

// format = 
// strName.method().method();

// Example = 

// 1).
let myMsg = "           hello      ";
console.log(myMsg); // get output with whitespaces
let newMsg = myMsg.trim();
console.log("After trim:",newMsg);

newMsg = newMsg.toUpperCase();
console.log("After uppercase:", newMsg); 

// we can also performd both method together like this = 
let applyMethodsTogether = myMsg.trim().toUpperCase();
console.log(applyMethodsTogether);

// Here we see our method apply left to right