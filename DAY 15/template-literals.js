// Template Literals
// = The are used to add embedded expressions in a string.

// Example = 

// 1).
// let a = 10;
// let b = 5;
// console.log("total",a+b,"rupees");

// we can also used back ticks " `` " to write and perform expression in our string like this = 
// console.log(`Your Pay ${a+b} rupees`);

// 2).
let pencilPrice = 10;
let erasorPrice = 5;

// Print methode - 01:
output = "total prise is:"+ " " + (pencilPrice + erasorPrice) + " "+ "rupees"; // here we cnver variable (pencilPrice and erasorPrice which data type is number) in string  
console.log(output);

// Print method - 02:
console.log("total prise is", pencilPrice+erasorPrice,"rupees");

// Print method - 03;
console.log(`total prise is ${pencilPrice+erasorPrice} rupees`); // here we used back ticks "`..` for convert expression in string"