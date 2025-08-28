// *************** Array References (Most important topic) ***************
// Array references = When you assign an array to a variable, the variable does not store the actual array values. Instead, it stores the address (link) of the array in memory. If two variables share the same reference, they both point to the same array, so changing the array through one variable also changes it for the other.

// In simple word = An array reference means a variable stores the memory address (link) of the array, not the actual values. If two variables share the same reference, they both point to the same array - so a change through one affects the other.

// Example = 
// 1).
let a = [1, 2, 3];
let b = a;
console.log(a); //output - [1, 2, 3]
console.log(b); // output - [1, 2, 3]
// means both array value is same so we can say that array 'b' is also pointing to the same address in memory where array 'a' is stored. 
a.push(4); // here we add (4) at last inside "a" array.
b.unshift(0); // here we add (0) at starting inside "b" array.
// if now we print a and b then we see that  
console.log(a); //output - [0, 1, 2, 3, 4]
console.log(b); //output - [0, 1, 2, 3, 4]

// Conclusion: Both 'a' and 'b' point to the same array in memory.
// That's why any change through one variable affects the other.

// If we want to assign another value in any variable of these both variable 
