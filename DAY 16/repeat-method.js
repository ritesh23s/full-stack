// ***************** String Method *****************
// ************** String Methods With Arguments **************

// 4). Repeat = Returns a string with the number of copies of a string 
// syntax = 
// stringName.repeat(No. of copies);
// Like =  
// Example = stringName.repeat(5);

// 1).
let fruit = "Mango";
let newFruit = fruit.repeat(4);
console.log(newFruit); // output = MangoMangoMangoMango

// Here we see that "fruit" repeat four times

// 2).
let inputDevice = "Mouse";
// console.log(inputDevice); 
// here we get output = Mouse, because js is always check code line by line
inputDevice = inputDevice.repeat(5);
console.log(inputDevice); // output = MouseMouseMouseMouseMouse
