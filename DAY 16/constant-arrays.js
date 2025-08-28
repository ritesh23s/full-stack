// *************** Constant Arrays ***************
// constant arrays = A constant array is an array declared with const. You cannot reassign the whole array to a new one, but you can still change, add, or remove its elements.

// In short: = 
// 1. Array reference is fixed 
// 2. Array values can be changed 

// Just like we make a normal variable a constant, we can make the array a constant as well.
// here example of constant variable = 

// 1).
// let x = 5; // value of a = changeble.
const x = 5; // value of a = not-changeble
console.log(x);

// we can create a constant array with the help of "const" keyword same like constant variable  

// 2).
// let arr = [1, 2, 3, 4, 5, 6];
const arr = [1, 2, 3, 4, 5, 6]; // this is constant array but special thing with array we can perform any operation at the value of constant array. like this = 
arr.push(7);
console.log(arr);

// we can only one thing do with "const" array that which we can't conver into completely into new array means we can't assigne a new array like this .  


// arr = [2, 4, 6, 8];
// now we see this error = VM563:1 Uncaught TypeError: Assignment to constant variable.
    // at <anonymous>:1:5

