// Comparison-operators-in-js
// = Comparison Operators to compare 2 values

// 1). > (Greater than)
// 2). >= (Greater than or equal to)
// 3). < (less than)
// 4). <= (lesser than or equal to)
// 5). == (equalto Operator)
// 6). != (Not-equalto operator)

let age = 18;
console.log(age>18);
// output = false

console.log(age>=18);
// output = true

console.log(age<18);
// output = false

console.log(age<=18);
// output = true

// we can also print the absolute value like this
console.log(3<5);
// output = true

console.log(3<=5);
// output = true

console.log(5<4);
// output = false

console.log(5<=4);
// output = false

console.log(0>-99);
// output = true


//5). == (equalto operator)
console.log(5==5);
// output = true

console.log(6==3);
// output = false

// Equalto operator properties
// = Its don't compare the datatypes. its always compare the value of variable
// Example =
// 1).
console.log(5=='5'); 
// output = true
// here its not compare the number and string its only compare the value of the variable

// 2).
let n = 6; //typeof n = number
let str = '6'; // typeof str = string
console.log(n==str);
// output = true


//6). != (Not-Equalto)
console.log(4!=4);
// output = false

console.log(5!=3);
// output = true

// != (Not-Equalto) Properties
// its also inore the datatypes like as equalto operator
// Its don't compare the datatypes. its always compare the value of variable
// Example =

// 1).
let num = 10; // typeof num = number
let cmpare = '10'; // typeof cmpare = string
console.log(num!=cmpare);
// output = false
// here its not compare the number and string its only compare the value of the variable


// Special Comparison Operator
// => we have an special type of comparison operator which is compare strictly thats
//    called === (triple equalto operator)

// 7). === (Triple Equalto Operator)
// = Its compare variable types and value both and its compare strictly.
// Example = 

// 1).
let quantity = 19;
let rating = '19';
console.log(quantity==rating); // output = true
// here if we compare with == its return output = true (because its compare the variable valye not compare variable datatypes)

console.log(quantity===rating); // output = false 

// here if we compare with === its return output = false (because its compare the variable value and datatype both. and do compare strictly.)
