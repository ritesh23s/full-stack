// ******** Array ********
// Creating Arrays Like This = 

// 1).Same data type array  
let marks = [258,46,85,98,57,60];
console.log(marks);

// 2). Same data type array
let names = ["Adam", "Anurag", "Yogesh", "Amit"];
console.log(names);

// 3).Mixed Array = we can also create mix array(diffrence datatype elements) in javaScript like this =
let info = ["Aman", 25, 6.12];
console.log(info);
// Note = some programming langusges have restriction on the mixed array

// 4). Empty Array = we can also create an empty array
let emptyArr = [];

// 5). We can also write an array without declear any variable like this = 
[]; // This is also an empty arry

// There are some special things with array
// 1). Acces the array element = we can eaily acces the array element with the help of array index. 
// syntax = arrayName[array-index No.];
// If we want to acces any element of "any array" array then we can acces like this 
// Example = 1). acces the first & third elements of "info" array.
console.log(info[0]); //acces the first index element.
console.log(names[2]); //acces the third index element. 

// 2). Acces the any charactor of any array-elemtnt = we can easily acces the charactor of any array-element with the help of array index & element index together.
// syntax = arrayName[array-index no.][element-index no.];
// If we want to acces "any charactor" of "any element" of "any array"then we can acces like this = 
// Example = 
// 1). acces the first charactor firrst element of this "info" array.
console.log(info[0][0]);

// 2). acces the sixth charactor of third array element of this "names" array.
console.log(names[2][5]);

// so we cann also acces any charactor of any index which is persents in an Array with the help of this format(syntax).
// arrName[arr index number][element index number];
// or 
// console.log(arr[arr index No.][element index No.]);


// We can also perform multiple string-method on string which is persents inside an array with the help of method chaining 
// means = If array element = string → so we can apply string methods like slice(), toUpperCase(), etc.
console.log(names[1].slice(0,5));


// -------------------- Remember (Formula) --------------------

// To access element
// arrName[index]

// // To access character inside element (if element is string)
// arrName[index][charIndex]

// // To access element inside nested array (2D array)
// arrName[index][innerIndex]
