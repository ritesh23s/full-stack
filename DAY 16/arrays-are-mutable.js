// Arrays are mutable = In the javaScript arrays are mutable. means we can change the value of arrays after that don't create a new array its return same arrays with change value.
// Note = its don't return a new variable this retern same variable with changed value.
// Example
// 1). Here we create an array "fruits"
let fruits = ["mango", "apple", "litchi"];
console.log(fruits); //output =  ['mango', 'apple', 'litchi']

// here we print the first index of "fruits" array
console.log(fruits[0]); // output = mango

// but here we change the value of first index of fruits array
fruits[0] = "banana";
// and now pring the array "fruits"
console.log(fruits); //output =  ['banana', 'apple', 'litchi']
// means its return same array "fruits" with changed value.

// Some special thing = 
// we can easily change the any index value of an array
fruits[10] = "papaya";
// and now print "fruits" array
console.log(fruits);
// after print we see that the array length is 11 (beaause we change the 10th index of array)

// Output = ['banana', 'apple', 'litchi', empty × 7, 'papaya']
// we see an unique thing that this array 0th index value = banana , 1st index value = apple, 2nd index value = litchi , and 3rd to 9th index value = "empty" and 10th index value = papaya.

// now if we want to acces the 5th index of array then
console.log(fruits[5]);
// output = undefined